// import { Auth } from 'aws-amplify';
"use strict";
import axios from 'axios';


class API {
  instance;
  constructor(private config) {
  this.config.headers;
  this.instance = axios.create({
    baseURL: this.config.baseURL || process.env.REACT_APP_BASE_URL,
    headers: this.config.headers || {
      'Content-Type': 'application/json',
      ...(localStorage?.getItem('X-current-user-id') && {
        'X-current-user-id': localStorage?.getItem('X-current-user-id'),
      }),
    },
  });

  // this.instance.interceptors.request.use(async (config: IApiConfig = {}) => {
  //     const session = await Auth.currentSession();
  //     const jwtToken = session.getIdToken().getJwtToken();
  //     config.headers.Authorization =
  //         (this.config && this.config.headers && this.config.headers.Authorization) ||
  //         jwtToken
  //             ? `Bearer ${jwtToken}`
  //             : '';
  //     return config;
  // });

  this.instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error.response?.data);
  },
);
}

public async get(url) {
  const response = await this.instance.get(url);
  return response.data;
}
public async post(url, data) {
  const response = await this.instance.post(url, data);
  return response.data;
}

public async patch(url, data) {
  const response = await this.instance.patch(url, data);
  return response.data;
}

public async put(url, data) {
  const response = await this.instance.put(url, data);
  return response.data;
}

public async delete(url, data) {
  const response = await this.instance.delete(url, {
    data: { ...data },
  });
  return response.data;
}
}

export { API };
