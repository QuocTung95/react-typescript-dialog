import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {actions as actionReducers} from '../slice/topRateSlice'
import actionThunks from '../thunk/topRateThunk'
import {
    getData,
    getLoading
  } from '../selector/topRateSelector'
import { useAppDispatch } from '../hooks';


const useTopRate = () => {
    const dispatch = useAppDispatch()
    const data: any = useSelector(getData)
    const loading = useSelector(getLoading)
    const actions = useMemo(() => bindActionCreators({...actionThunks, ...actionReducers}, dispatch), [])
    return useMemo(() => ({
      actions,
      data,
      loading,
    }), [actions, data, loading])
};

export default useTopRate;