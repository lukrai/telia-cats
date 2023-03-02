import { ReactNode } from 'react';
import styles from './table-row.module.scss';

export interface TableRowProps<T> {
  rowItem: T;
  keysToShow: (keyof T)[];
}

export function TableRow<T>({ rowItem, keysToShow }: TableRowProps<T>) {
  return (
    <tr className={styles.row}>
      {keysToShow.map((rowKey) => {
        if (!rowItem[rowKey]) {
          return null;
        }
        return (
          <td key={rowKey as string} title={rowItem[rowKey] as string}>
            {rowItem[rowKey] as ReactNode}
          </td>
        );
      })}
    </tr>
  );
}

export default TableRow;
