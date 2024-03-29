import {useQuery} from 'react-query';
import {getAllContracts} from 'services/WeblyApi';

const useDashboard = () => {
  return useQuery(
    ['dashboardData'],
    () => getAllContracts(),
    {
      // enabled: !!address,
      // keepPreviousData: true,
      // staleTime: Infinity
    },
  );
};

export { useDashboard };
