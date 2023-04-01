import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {actions as actionReducers} from '../slice/searchSlice'
import actionThunks from '../thunk/searchThunk'

import {
    getData,
    getLoading
  } from '../selector/searchSelector'
import { useAppDispatch } from '../hooks';


const useSearch = () => {
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

export default useSearch;