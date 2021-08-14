
import SideNavBrand from './GridSideNav/Brand';
import SideNavProfile from './GridSideNav/Profile';
import SideNavLists from './GridSideNav/Lists';
//import GridHeader from './GridHeader';
//import GridHeader from './GridHeader';

const sidenav = (props) => {
  return (
      <aside className="sidenav">
        <SideNavBrand />
        <SideNavProfile />
        <SideNavLists />
      </aside>
    );
};

export default sidenav;