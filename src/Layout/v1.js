import { useState, useEffect } from 'react';
import clsx from 'clsx';
import './style.css';

const LayoutHeader = ({ Nav, ...props }) => {

  useEffect(()=>{
    console.log('LayoutHeader Rendered')
  }, []);

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

const LayoutNav = ({ Nav, ...props }) => {

  useEffect(()=>{
    console.log('LayoutNav Rendered')
  }, []);

  return (
    <>
      <div className='LayoutNav'>LayoutNav</div>
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

//

const Layout = (props) => {

  const [NavOpen, setNavOpen] = useState(true);
  const [NavMin, setNavMin] = useState(false);

  return (
    <div className={ clsx('LayoutWrapper', NavOpen || 'NavHide', NavMin && 'NavMin') }>
      <LayoutHeader Nav={ { NavOpen, setNavOpen, NavMin, setNavMin } }/>
      <LayoutNav/>
      <LayoutBody>{ props.children }</LayoutBody>
    </div>
  )
};

export default Layout;