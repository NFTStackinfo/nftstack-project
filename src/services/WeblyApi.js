import {API} from './api';
import {Endpoints} from '../helpers/endpoints';

export const login = async () => {
  try {
    const api = new API();

    const response = await api.get(Endpoints.GET_LOGIN_MESSAGE)
    return response.nonce
  } catch (e) {
    console.error(e)
  }
};

export const logout = async () => {
  const api = new API();

  try {
    await api.get(Endpoints.GET_LOGOUT)
  } catch (e) {
    console.log(e);
  }

};

export const verifyLogin = async (data) => {
  const api = new API();
  try {
    return await api.post(Endpoints.GET_LOGIN_VERIFY, data)
  } catch (e) {
    console.log(e)
  }

};

export const createContract = async (data) => {
  const api = new API();

  return await api.post(Endpoints.CREATE_CONTRACT, data)

};

export const editContract = async (data) => {
  const api = new API();
  return await api.put(Endpoints.EDIT_CONTRACT, data)
};

export const updateContract = async (data) => {
  const api = new API();

  return await api.put(Endpoints.UPDATE_CONTRACT, data)

};

export const getAllContracts = async () => {
  const api = new API();

  return await api.get(Endpoints.GET_ALL_CONTRACTS)

};

export const getContractById = async (id) => {
  const api = new API();

  return await api.get(`${Endpoints.GET_CONTRACTS_BY_ID}/${id}`)

};

