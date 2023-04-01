import axiosClient from './http-common';
import {
  searchEndPoint
} from '../contants/endPoint';

export default {
  getAll: (payload: any) => {
    return axiosClient.get(searchEndPoint.GET_ALL, {params: payload});
  }
}

