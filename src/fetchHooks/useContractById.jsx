import {useQuery} from 'react-query';
import {getContractById} from 'services/WeblyApi';

const useContractById = (id) => {
  return useQuery(
    ['dashboardData'],
    () => getContractById(id),
    {
      enabled: !!id,
      // keepPreviousData: true,
      // staleTime: Infinity
    },
  );
};

export { useContractById };
