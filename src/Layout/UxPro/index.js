import { useState } from 'react';
import clsx from 'clsx';

import './styles.scss';

import GridHeader from './GridHeader';
import GridSideNav from './GridSideNav';
import GridMain from './GridMain';
import GridFooter from './GridFooter';


const Layout = (props) => {

  const [close, setClose] = useState(false);

  const toggleClose = () => {
    setClose(!close);
  }

  return (
    <div className={ clsx("grid", close && 'closed') }>
      <GridHeader toggleClose={ toggleClose } />
      <GridSideNav />
      <GridMain />
      <GridFooter />
    </div>
  );
};

export default Layout;