import { ChangeEvent, useState } from 'react';
import { useCats } from '../api/cats';
import Pagination from '../pagination/pagination';
import Table from '../table/table';

export function Cats() {
  const [currentPage, setCurrentPage] = useState(1);
  const [nameFilter, setNameFilter] = useState('');
  const [temperamentFilter, setTemperamentFilter] = useState('');
  const { data, isFetching } = useCats(
    currentPage,
    nameFilter,
    temperamentFilter
  );
  const isNextButtonDisabled = data === undefined || Number(data?.length) < 10;

  const onNameFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNameFilter(event.target.value);
  };

  const onTemperamentFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTemperamentFilter(event.target.value);
  };

  return (
    <div>
      <Table
        items={data}
        keysToShow={['name', 'original_id', 'temperament', 'description']}
        keysToFilter={['name', 'temperament']}
        isLoading={isFetching}
        filters={[
          {
            key: 'name',
            onChange: onNameFilterChange,
            placeholder: 'Eg. Mau',
          },
          {
            key: 'temperament',
            onChange: onTemperamentFilterChange,
            placeholder: 'Eg. Active',
          },
        ]}
      />
      <Pagination
        activePage={currentPage}
        setActivePage={setCurrentPage}
        isNextButtonDisabled={isNextButtonDisabled}
      />
    </div>
  );
}

export default Cats;
