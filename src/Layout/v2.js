import { useState, useEffect } from 'react';
import clsx from 'clsx';
import './style.css';

const LayoutHeader = ({ Nav, ...props }) => {
  return (
    <>
      <div className={ clsx('LayoutHeader', Nav.NavOpen || 'NavHide', Nav.NavMin && 'NavMin') }>
        <button onClick={ () => Nav.setNavOpen(!Nav.NavOpen) }>Hide</button>
        <button onClick={ () => Nav.setNavMin(!Nav.NavMin) }>Min</button>
        <span>LayoutHeader</span>
      </div>
    </>
  )
};

const LayoutNav = (props) => {

  const [NavOpen, setNavOpen] = useState(true);
  const [NavMin, setNavMin] = useState(false);

  return (
    <>
      <LayoutHeader Nav={ { NavOpen, setNavOpen, NavMin, setNavMin } }/>
      <div className={ clsx('LayoutNav', NavOpen || 'NavHide', NavMin && 'NavMin') }>LayoutNav</div>
    </>
  )
};

const LayoutBody = (props) => {
  
  useEffect(()=>{
    console.log('LayoutBody Rendered')
  }, []);

  return (
    <div className='LayoutBody'>
      <div>{ props.children }</div>
    </div>
  )
};

//{ clsx('', NavOpen || 'NavHide', NavMin && 'NavMin') }

const Layout = (props) => {

  return (
    <div className='LayoutWrapper'>
      <LayoutNav/>
      <LayoutBody>{ props.children }</LayoutBody>
    </div>
  )
};

export default Layout;