import axiosClient from './http-common';
import {
  discoverEndPoint
} from '../contants/endPoint';

export default {
  getAll: (payload ={}) => {
    return axiosClient.get(discoverEndPoint.GET_ALL, payload);
  }
}

