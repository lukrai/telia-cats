import { ChangeEvent } from 'react';
import FilterInput from '../filter-input/filter-input';
import TableRow from '../table-row/table-row';
import styles from './table.module.scss';

export interface TableProps<T> {
  items: T[] | undefined;
  keysToShow: (keyof T)[];
  keysToFilter?: (keyof T)[];
  isLoading?: boolean;
  filters?: {
    key: keyof T;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
  }[];
}

export function Table<T extends { id: number | string }>({
  items,
  keysToShow,
  keysToFilter,
  filters,
  isLoading = false,
}: TableProps<T>) {
  const getColumnFilter = (filterKey: string) => {
    const filter = filters?.find((filter) => filter.key === filterKey);
    if (filter) {
      return (
        <FilterInput
          label={'Filter'}
          onChange={filter.onChange}
          placeholder={filter.placeholder}
        />
      );
    }
    return null;
  };

  return (
    <>
      <div className={styles.loader}>{isLoading && 'Loading...'}</div>
      <table
        className={`${styles.rounded} ${styles.shadow} ${styles.container}`}
      >
        <thead className={styles.columns}>
          <tr>
            {keysToShow.map((key) => {
              return (
                <th key={key as string}>
                  {key as string}
                  {keysToFilter?.includes(key) &&
                    getColumnFilter(key as string)}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {items?.length ? (
            items.map((item) => {
              return (
                <TableRow
                  key={item.id}
                  rowItem={item}
                  keysToShow={keysToShow}
                />
              );
            })
          ) : (
            <TableRow
              rowItem={{ message: 'No Data.' }}
              keysToShow={['message']}
            />
          )}
        </tbody>
      </table>
    </>
  );
}

export default Table;
