
const header = (props) => {
  return (
      <header className="header">
        <i className="fas fa-bars header__menu"></i>
        <div className="header__search">
          <input className="header__input" placeholder="Search..." />
        </div>
        <div className="header__avatar">
          <div className="dropdown">
            <ul className="dropdown__list">
              <li className="dropdown__list-item">
                <span className="dropdown__icon"><i className="far fa-user"></i></span>
                <span className="dropdown__title">my profile</span>
              </li>
              <li className="dropdown__list-item">
                <span className="dropdown__icon"><i className="fas fa-clipboard-list"></i></span>
                <span className="dropdown__title">my account</span>
              </li>
              <li className="dropdown__list-item">
                <span className="dropdown__icon"><i className="fas fa-sign-out-alt"></i></span>
                <span className="dropdown__title">log out</span>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
}

export default header;