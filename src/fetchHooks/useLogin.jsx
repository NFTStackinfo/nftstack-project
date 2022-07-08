import {useQuery} from 'react-query';
import {getDashboardByAddress} from '../services/WeblyApi';

const useDashboard = () => {
  return useQuery(
    ['dashboardData'],
    () => getDashboardByAddress(),
    {
      // enabled: !!address,
      // keepPreviousData: true,
      staleTime: Infinity
    },
  );
};

export { useDashboard };
