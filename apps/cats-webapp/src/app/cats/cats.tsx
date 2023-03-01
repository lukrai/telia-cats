import { Cat } from '@prisma/client';
import axios from 'axios';
import { ChangeEvent, useState } from 'react';
import { useQuery } from 'react-query';
import FilterInput from '../filter-input/filter-input';
import Table from '../table/table';
import styles from './cats.module.scss';

async function fetchCats(nameFilter: string) {
  return axios
    .get<Cat[]>(`http://localhost:3333/api/cats?name=${nameFilter}`)
    .then((response) => response.data);
}

function useCats(nameFilter: string) {
  console.log('useCats called', nameFilter);
  return useQuery({
    queryKey: ['cats', nameFilter],
    queryFn: () => fetchCats(nameFilter),
    keepPreviousData: true,
  });
}

/* eslint-disable-next-line */
export interface CatsProps {}

export function Cats(props: CatsProps) {
  const [nameFilter, setNameFilter] = useState('');
  const { data, isLoading } = useCats(nameFilter);

  const onNameFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNameFilter(event.target.value);
  };

  return (
    <div>
      <FilterInput
        label={'Filter by name'}
        disabled={isLoading}
        onChange={onNameFilterChange}
        placeholder="Eg. Mau"
      />
      <Table
        items={data}
        keysToShow={['name', 'original_id', 'description']}
      ></Table>
    </div>
  );
}

export default Cats;
