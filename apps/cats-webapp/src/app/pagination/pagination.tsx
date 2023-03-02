import styles from './pagination.module.scss';

export interface PaginationProps {
  activePage: number;
  setActivePage: (page: number) => void;
}

const Pagination = ({ activePage, setActivePage }: PaginationProps) => {
  return (
    <div className={styles.pagination}>
      <button
        disabled={activePage === 1}
        onClick={() => activePage !== 1 && setActivePage(activePage - 1)}
      >
        {'<'}
      </button>
      <div>{activePage}</div>
      <button onClick={() => setActivePage(activePage + 1)}>{'>'} </button>
    </div>
  );
};

export default Pagination;
