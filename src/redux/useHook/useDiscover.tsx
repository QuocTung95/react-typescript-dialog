import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {actions as actionReducers} from '../slice/discoverSlice'
import actionThunks from '../thunk/discoverThunk'
import {
    getData,
    getLoading
  } from '../selector/discoverSelector'
import { useAppDispatch } from '../hooks';


const useDiscover = () => {
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

export default useDiscover;