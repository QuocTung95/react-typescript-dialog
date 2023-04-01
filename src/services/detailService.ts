import axiosClient from './http-common';
import {
  detailEndPoint
} from '../contants/endPoint';

export default {
  getDetail: (id: number | string | undefined) => {
    return axiosClient.get(`${detailEndPoint.GET_ALL}/${id}?${process.env.REACT_APP_MY_API_KEY}`);
  },
  getSingleMovieCredits: (id: number | string | undefined) => {
    return axiosClient.get(`${detailEndPoint.GET_ALL}/${id}/credits?${process.env.REACT_APP_MY_API_KEY}`);
  },
}

