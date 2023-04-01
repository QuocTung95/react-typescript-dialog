import axiosClient from './http-common';
import {
  topRateEndPoint
} from '../contants/endPoint';

export default {
  getAll: (payload ={}) => {
    return axiosClient.get(topRateEndPoint.GET_ALL, payload);
  }
}

