//import logo from './logo.svg';
//import './App.css';

import { Fragment } from 'react';

import NormalizeStyles from './NormalizeStyles';
import BaseStyles from './BaseStyles';
import Toast from './Toast';
import Routes from './Routes';
import Layout from 'Layout';
//const NormalizeStyles = () => (<>NormalizeStyles</>);
//const BaseStyles = () => (<>BaseStyles</>);
//const Routes = () => (<>Routes</>);

const App = () => (
  <Fragment>
    <NormalizeStyles />
    <BaseStyles />
    <Toast />
    <Layout>
    <Routes />
    </Layout>
  </Fragment>
);

export default App;
