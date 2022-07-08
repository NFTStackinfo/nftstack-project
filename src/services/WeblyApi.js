import {API} from './api';
import {Endpoints} from '../helpers/endpoints';
import LocalStorage from './localStorage';

export const getDashboardByAddress = async () => {
  const api = new API();

  return await api.get(Endpoints.GET_ALBUMS)
};

export const loginByAddress = async (address) => {
  console.log(address);
  const api = new API();

  const response = await api.get(`${Endpoints.GET_LOGIN_MESSAGE}/${address}`)
  console.log(response.nonce);
  return response.nonce
};

export const logout = async (address) => {
  const api = new API();

  try {
    await api.get(`${Endpoints.GET_LOGOUT}/${address}`)
    LocalStorage.clear()
  } catch (e) {
    console.log(e);
  }

};

export const verifyLogin = async (address, signature) => {
  console.log(address);
  const api = new API();
  const data = {
    address: address,
    signature: signature
  }
  try {
    const response = api.post(Endpoints.GET_LOGIN_VERIFY, data )
    return response
  } catch (e) {
    console.log(e)
  }

};
