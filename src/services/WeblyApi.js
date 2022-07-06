import {API} from './api';
import {Endpoints} from '../helpers/endpoints';

export const getDashboardByAddress = async () => {
  const api = new API();

  return await api.get(Endpoints.Get_Albums)
};
