import React, { useEffect } from 'react';
import { lazy } from "react";
import useSearch from "../../redux/useHook/useSearch";
import useDidMountEffect from "../useDidMountEffect";
import { Input } from 'antd';
import _ from 'lodash'
interface Props {
}

const SearchBox: React.FC<Props> = ({ }) => {
  const {actions} = useSearch();

  useDidMountEffect(() => {
    return () => {
      actions.resetData()
    }
  }, [])
  

  var onSearch = _.debounce(function (e: any) {
    actions.fetchList({query: e.target.value})
    }, 1000);

  return (
    <div style={{marginTop: 10}}>
      <Input onChange={onSearch} placeholder="Search movie by name" />
    </div>
  );
}

export default SearchBox;
