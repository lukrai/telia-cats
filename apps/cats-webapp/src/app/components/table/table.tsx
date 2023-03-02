import { ChangeEvent } from 'react';
import TableRow from './table-row/table-row';
import TableHeaderRow from './table-header-row';
import styles from './table.module.scss';

export interface TableProps<T> {
  items: T[] | undefined;
  keysToShow: (keyof T)[];
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
  filters,
  isLoading = false,
}: TableProps<T>) {
  return (
    <>
      <div className={styles.loader}>{isLoading && 'Loading...'}</div>
      <table
        className={`${styles.rounded} ${styles.shadow} ${styles.container}`}
      >
        <thead className={styles.columns}>
          <TableHeaderRow keysToShow={keysToShow} filters={filters} />
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
