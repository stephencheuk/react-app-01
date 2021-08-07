import './styles.scss';

import header from './header';
import sidenav from './sidenav';
import main from './main';
import footer from './footer';


const Layout = (props) => {

  return (
    <div class="grid">
      <header />
      <sidenav />
      <main />
      <footer />
    </div>
  );
};

export default Layout;