import {useQuery} from 'react-query';
import {getContractById} from 'services/WeblyApi';

const useContractById = (id) => {
  return useQuery(
    ['dashboardData', id],
    () => getContractById(id),
    {
      enabled: !!id,
      // keepPreviousData: true,
      // staleTime: Infinity
    },
  );
};

export { useContractById };
