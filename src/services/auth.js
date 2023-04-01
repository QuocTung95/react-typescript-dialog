import axiosClient from './http-common';
// import {
//   API_URL_REGISTER,
//   API_URL_ACTIVE_ACCOUNT,
//   API_URL_LOGIN
// } from '../contants';

// class UserService {
//   register(data) {
//     return axiosClient.post(API_URL_REGISTER, data);
//   }

//   activeAccount(token) {
//     return axiosClient.post(API_URL_ACTIVE_ACCOUNT, token);
//   }

//   isLoggedIn() {
//     return false;
//   }

//   login(account) {
//     return axiosClient.get(API_URL_LOGIN, account);
//   }

//   getToken() {
//     return '';
//   }
// }

export const login = (account) => {
        return axiosClient.get('API_URL_LOGIN', account);
      }




// export default new UserService();

