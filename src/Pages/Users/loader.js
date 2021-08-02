import { lazy } from 'react';
//import { store } from '../../store/configureStore';

//import { * as vars } from './vars';

// lazy import with reducer
const Products = lazy(() => 
  import('./Users').then(module => module)
//  import('./reducer').then(module => {
//    store.injectReducer('Products', module.default);
//    return import('./Products').then(module => module);
//  })
);

export default Products;
