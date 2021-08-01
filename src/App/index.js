//import logo from './logo.svg';
//import './App.css';

import { Fragment } from 'react';

import NormalizeStyles from './NormalizeStyles';
import BaseStyles from './BaseStyles';
import Toast from './Toast';
//import Routes from './Routes';
//const NormalizeStyles = () => (<>NormalizeStyles</>);
//const BaseStyles = () => (<>BaseStyles</>);
const Routes = () => (<>Routes</>);

const App = () => (
  <Fragment>
    <NormalizeStyles />
    <BaseStyles />
    <Toast />
    <Routes />
  </Fragment>
);

export default App;
