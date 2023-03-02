/* eslint-disable @typescript-eslint/no-explicit-any */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import * as catsApi from '../api/cats';

import Cats from './cats';

const queryClient = new QueryClient();

function QueryClientWrapper({ children }: { children: JSX.Element }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

describe('Cats', () => {
  const catItems = [
    {
      id: 35,
      weight_imperial: '8 - 15',
      weight_metric: '8 - 15',
      name: 'TestName',
      original_id: 'testId',
      description: 'testDescription',
      temperament: 'testTemperament',
    },
  ];

  it('should render successfully', () => {
    const { baseElement } = render(
      <QueryClientWrapper>
        <Cats />
      </QueryClientWrapper>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render table with data correctly', () => {
    jest.spyOn(catsApi, 'useCats').mockReturnValue({
      data: catItems,
    } as any);
    render(
      <QueryClientWrapper>
        <Cats />
      </QueryClientWrapper>
    );

    expect(screen.getByText('TestName')).toBeVisible();
    expect(screen.getByText('testDescription')).toBeVisible();

    expect(screen.getAllByText('Filter').length).toBe(2);
    expect(screen.getByRole('button', { name: '>' })).toBeVisible();
    expect(screen.getByRole('button', { name: '>' })).toBeDisabled();

    expect(screen.getByRole('button', { name: '<' })).toBeVisible();
    expect(screen.getByRole('button', { name: '<' })).toBeDisabled();
  });

  it('should show loading message', () => {
    jest.spyOn(catsApi, 'useCats').mockReturnValue({
      data: catItems,
      isFetching: true,
    } as any);
    render(
      <QueryClientWrapper>
        <Cats />
      </QueryClientWrapper>
    );

    expect(screen.getByText('Loading...')).toBeVisible();
    expect(screen.getByText('TestName')).toBeVisible();
    expect(screen.getByText('testDescription')).toBeVisible();
  });
});
