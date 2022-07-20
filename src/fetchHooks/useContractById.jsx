import {useQuery} from 'react-query';
import {getContractById} from 'services/WeblyApi';

const useContractById = (id) => {
  return useQuery(
    ['contractById', id],
    () => getContractById(id),
    {
      enabled: !!id,
      // cacheTime: 0,
      // keepPreviousData: true,
      // staleTime: 0,
    },
  );
};

export { useContractById };
