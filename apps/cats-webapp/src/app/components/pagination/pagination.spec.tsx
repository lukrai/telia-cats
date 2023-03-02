import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Pagination from './pagination';

describe('Pagination', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Pagination
        activePage={1}
        setActivePage={jest.fn()}
        isNextButtonDisabled={false}
      />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should disable back button for first page', () => {
    render(
      <Pagination
        activePage={1}
        setActivePage={jest.fn()}
        isNextButtonDisabled={false}
      />
    );
    expect(screen.getByRole('button', { name: '<' })).toBeVisible();
    expect(screen.getByRole('button', { name: '<' })).toBeDisabled();
    expect(screen.getByRole('button', { name: '>' })).toBeVisible();
    expect(screen.getByRole('button', { name: '>' })).toBeEnabled();
    expect(screen.getByText(1)).toBeVisible();
  });

  it('should disable next button if "isNextButtonDisabled" is "true"', () => {
    render(
      <Pagination
        activePage={1}
        setActivePage={jest.fn()}
        isNextButtonDisabled={true}
      />
    );
    expect(screen.getByRole('button', { name: '<' })).toBeVisible();
    expect(screen.getByRole('button', { name: '<' })).toBeDisabled();
    expect(screen.getByRole('button', { name: '>' })).toBeVisible();
    expect(screen.getByRole('button', { name: '>' })).toBeDisabled();
    expect(screen.getByText(1)).toBeVisible();
  });

  it('should enable back button if "activePage" is "2"', () => {
    render(
      <Pagination
        activePage={2}
        setActivePage={jest.fn()}
        isNextButtonDisabled={false}
      />
    );
    expect(screen.getByRole('button', { name: '<' })).toBeVisible();
    expect(screen.getByRole('button', { name: '<' })).toBeEnabled();
    expect(screen.getByRole('button', { name: '>' })).toBeVisible();
    expect(screen.getByRole('button', { name: '>' })).toBeEnabled();
    expect(screen.getByText(2)).toBeVisible();
  });
});
