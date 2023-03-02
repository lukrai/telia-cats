import { ChangeEvent } from 'react';
import TableHeaderCell from './table-header-cell';

interface TableHeaderRowProps<T> {
  keysToShow: (keyof T)[];
  filters?: {
    key: keyof T;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
  }[];
}

function TableHeaderRow<T>({ keysToShow, filters }: TableHeaderRowProps<T>) {
  return (
    <tr>
      {keysToShow.map((key) => {
        return (
          <TableHeaderCell
            key={key as string}
            filterKey={key}
            filters={filters}
          />
        );
      })}
    </tr>
  );
}

export default TableHeaderRow;
