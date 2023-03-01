import TableRow from '../table-row/table-row';
import styles from './table.module.scss';

export interface TableProps<T> {
  items: T[];
  keysToShow: (keyof T)[];
}

export function Table<T extends { id: number | string }>({
  items,
  keysToShow,
}: TableProps<T>) {
  return (
    <table className={`${styles.rounded} ${styles.shadow} ${styles.container}`}>
      <thead className={styles.columns}>
        <tr>
          {keysToShow.map((key) => {
            return <th key={key as string}>{key as string}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {items.length ? (
          items.map((item) => {
            return (
              <TableRow key={item.id} rowItem={item} keysToShow={keysToShow} />
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
  );
}

export default Table;
