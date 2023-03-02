import { Cat } from '@prisma/client';
import axios from 'axios';
import { ChangeEvent, useState } from 'react';
import { useQuery } from 'react-query';
import FilterInput from '../filter-input/filter-input';
import Pagination from '../pagination/pagination';
import Table from '../table/table';
import styles from './cats.module.scss';

async function fetchCats(
  nameFilter: string,
  temperamentFilter: string,
  currentPage: number
) {
  return axios
    .get<Cat[]>(
      `http://localhost:3333/api/cats?name=${nameFilter}&temperament=${temperamentFilter}&page=${currentPage}`
    )
    .then((response) => response.data);
}

function useCats(
  currentPage: number,
  nameFilter: string,
  temperamentFilter: string
) {
  return useQuery({
    queryKey: ['cats', nameFilter, temperamentFilter, currentPage],
    queryFn: () => fetchCats(nameFilter, temperamentFilter, currentPage),
    keepPreviousData: true,
  });
}

/* eslint-disable-next-line */
export interface CatsProps {}

export function Cats(props: CatsProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [nameFilter, setNameFilter] = useState('');
  const [temperamentFilter, setTemperamentFilter] = useState('');
  const { data, isLoading } = useCats(
    currentPage,
    nameFilter,
    temperamentFilter
  );

  const onNameFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNameFilter(event.target.value);
  };

  const onTemperamentFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTemperamentFilter(event.target.value);
  };

  return (
    <div>
      <FilterInput
        label={'Filter by name'}
        disabled={isLoading}
        onChange={onNameFilterChange}
        placeholder="Eg. Mau"
      />
      <FilterInput
        label={'Filter by temperament'}
        disabled={isLoading}
        onChange={onTemperamentFilterChange}
        placeholder="Eg. Active"
      />
      <Table
        items={data}
        keysToShow={['name', 'original_id', 'temperament', 'description']}
      />
      <Pagination activePage={currentPage} setActivePage={setCurrentPage} />
    </div>
  );
}

export default Cats;
