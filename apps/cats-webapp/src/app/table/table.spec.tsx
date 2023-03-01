import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Table from './table';

describe('Table', () => {
  it('should render successfully', () => {
    render(
      <Table
        items={[
          {
            id: 1,
            name: 'CatTest',
            description: 'CatDescription',
          },
          { id: 2, name: 'CatTest2', description: 'CatDescription2' },
        ]}
        keysToShow={['name', 'description']}
      />
    );
    expect(screen.getByText('name')).toBeVisible();
    expect(screen.getByText('description')).toBeVisible();
    expect(screen.getByText('CatTest')).toBeVisible();
    expect(screen.getByText('CatDescription')).toBeVisible();
    expect(screen.getByText('CatTest2')).toBeVisible();
    expect(screen.getByText('CatDescription2')).toBeVisible();
  });

  it('should not show properties which are not provided with "keysToShow"', () => {
    render(
      <Table
        items={[
          {
            id: 1,
            name: 'CatTest',
            description: 'CatDescription',
          },
          { id: 2, name: 'CatTest2', description: 'CatDescription2' },
        ]}
        keysToShow={['name']}
      />
    );
    expect(screen.getByText('name')).toBeVisible();
    expect(screen.queryByText('description')).not.toBeInTheDocument();
    expect(screen.getByText('CatTest')).toBeVisible();
    expect(screen.queryByText('CatDescription')).not.toBeInTheDocument();
    expect(screen.getByText('CatTest2')).toBeVisible();
    expect(screen.queryByText('CatDescription2')).not.toBeInTheDocument();
  });

  it('should render "No Data" if there are no items', () => {
    render(<Table items={[]} keysToShow={['name']} />);
    expect(screen.getByText('name')).toBeVisible();
    expect(screen.getByText('No Data.')).toBeVisible();
  });
});
