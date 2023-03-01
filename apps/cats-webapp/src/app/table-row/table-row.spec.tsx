import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';

import TableRow from './table-row';

const TableWrapper = (props: any) => (
  <table>
    <tbody>{props.children}</tbody>
  </table>
);

describe('TableRow', () => {
  it('should render successfully', () => {
    render(
      <TableWrapper>
        <TableRow
          rowItem={{
            id: 'cat1',
            name: 'CatTest',
            description: 'CatDescription',
          }}
          keysToShow={['name', 'description']}
        />
      </TableWrapper>
    );
    expect(screen.getByText('CatTest')).toBeVisible();
    expect(screen.getByText('CatDescription')).toBeVisible();
  });

  it('should not render properties which are missing from "keysToShow"', () => {
    render(
      <TableWrapper>
        <TableRow
          rowItem={{
            id: 'cat1',
            name: 'CatTest',
            description: 'CatDescription',
          }}
          keysToShow={['name']}
        />
      </TableWrapper>
    );
    expect(screen.getByText('CatTest')).toBeVisible();
    expect(screen.queryByText('CatDescription')).not.toBeInTheDocument();
  });
});
