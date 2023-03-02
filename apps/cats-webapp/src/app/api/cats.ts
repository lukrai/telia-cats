import { Cat } from '@prisma/client';
import axios from 'axios';
import { useQuery } from 'react-query';

export async function fetchCats(
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

export function useCats(
  currentPage: number,
  nameFilter: string,
  temperamentFilter: string
) {
  return useQuery({
    queryKey: ['cats', nameFilter, temperamentFilter, currentPage],
    queryFn: () => fetchCats(nameFilter, temperamentFilter, currentPage),
    keepPreviousData: true,
    retry: false,
  });
}
