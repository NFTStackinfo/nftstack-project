import {API} from './api';
import {Endpoints} from '../helpers/endpoints';
import LocalStorage from './localStorage';
import {userActions} from '../context/UserContext';

export const login = async () => {
  const api = new API();

  const response = await api.get(Endpoints.GET_LOGIN_MESSAGE)
  return response.nonce
};

export const logout = async () => {
  const api = new API();

  try {
    await api.get(Endpoints.GET_LOGOUT)
    LocalStorage.clear()
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

export const setAccount = async () => {
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const account = accounts[0]
  return userActions.addUser(account)
}
