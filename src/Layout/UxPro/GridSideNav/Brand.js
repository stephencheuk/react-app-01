
const Brand = (props) => {

  return (
      <div className="sidenav__brand">
        <i className="fas fa-feather-alt sidenav__brand-icon"></i>
        <a className="sidenav__brand-link" href="//www.google.com">Ux<span className="text-light">Pro</span></a>
        <i className="fas fa-times sidenav__brand-close"></i>
      </div>
    );
}

export default Brand;