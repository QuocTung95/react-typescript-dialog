import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {actions as actionReducers} from '../slice/detailSlice'
import actionThunks from '../thunk/detailThunk'
import {
    getData,
    getDataSingleMovieCredits,
    getLoading
  } from '../selector/detailSelector'
import { useAppDispatch } from '../hooks';


const useDetail = () => {
    const dispatch = useAppDispatch()
    const data: any = useSelector(getData)
    const dataSingleMovieCredits: any = useSelector(getDataSingleMovieCredits)
    const loading = useSelector(getLoading)
    const actions = useMemo(() => bindActionCreators({...actionThunks, ...actionReducers}, dispatch), [])
    return useMemo(() => ({
      actions,
      data,
      dataSingleMovieCredits,
      loading,
    }), [actions, data, loading])
};

export default useDetail;