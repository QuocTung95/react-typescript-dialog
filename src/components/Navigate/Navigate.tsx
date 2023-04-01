import { Menu } from 'antd'
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'

const Navigate = () => {
  let location = useLocation();
  const [current, setCurrent] = useState(location.pathname);

  const items = [
    {
      label: <Link to='/'>Home</Link>,
      key: '/home',
    },
    {
      label: <Link to='/toprate'>Top Rated</Link>,
      key: '/toprate',
    },
  ];
  const onClick = (e: any) => {
    setCurrent(e.key);
  };
  return (
    <Menu mode="horizontal" onClick={onClick} items={items} selectedKeys={[current]} />
  );
};

export default Navigate;