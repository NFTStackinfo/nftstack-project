import axios from 'axios';


class API {
  constructor() {
  this.instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
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

 async get(url) {
  const response = await this.instance.get(url);
  return response.data;
}
 async post(url, data) {
  const response = await this.instance.post(url, data);
  return response.data;
}

 async patch(url, data) {
  const response = await this.instance.patch(url, data);
  return response.data;
}

 async put(url, data) {
  const response = await this.instance.put(url, data);
  return response.data;
}

 async delete(url, data) {
  const response = await this.instance.delete(url, {
    data: { ...data },
  });
  return response.data;
}
}

export { API };
