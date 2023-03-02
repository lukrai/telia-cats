import { ChangeEvent } from 'react';
import FilterInput from '../filter-input';

export interface TableHeaderCellProps<T> {
  filterKey: keyof T;
  filters?: {
    key: keyof T;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
  }[];
}

function TableHeaderCell<T>({ filterKey, filters }: TableHeaderCellProps<T>) {
  const filter = filters?.find((filter) => filter.key === filterKey);
  return (
    <th>
      {filterKey as string}
      {filter && (
        <FilterInput
          label={'Filter'}
          onChange={filter.onChange}
          placeholder={filter.placeholder}
        />
      )}
    </th>
  );
}

export default TableHeaderCell;
