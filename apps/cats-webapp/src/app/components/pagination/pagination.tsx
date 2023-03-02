import styles from './pagination.module.scss';

export interface PaginationProps {
  activePage: number;
  setActivePage: (page: number) => void;
  isNextButtonDisabled: boolean;
}

const Pagination = ({
  activePage,
  setActivePage,
  isNextButtonDisabled,
}: PaginationProps) => {
  return (
    <div className={styles.pagination}>
      <button
        disabled={activePage === 1}
        onClick={() => activePage !== 1 && setActivePage(activePage - 1)}
      >
        {'<'}
      </button>
      <div>{activePage}</div>
      <button
        disabled={isNextButtonDisabled}
        onClick={() => setActivePage(activePage + 1)}
      >
        {'>'}{' '}
      </button>
    </div>
  );
};

export default Pagination;
