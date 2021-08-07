
const sidenav = (props) => {
  return (
      <aside className="sidenav">
        <div className="sidenav__brand">
          <i className="fas fa-feather-alt sidenav__brand-icon"></i>
          <a className="sidenav__brand-link" href="#">Ux<span className="text-light">Pro</span></a>
          <i className="fas fa-times sidenav__brand-close"></i>
        </div>
        <div className="sidenav__profile">
          <div className="sidenav__profile-avatar"></div>
          <div className="sidenav__profile-title text-light">Matthew H</div>
        </div>
        <div className="row row--align-v-center row--align-h-center">
          <ul className="navList">
            <li className="navList__heading">documents<i className="far fa-file-alt"></i></li>
              <li>
              <div className="navList__subheading row row--align-v-center">
                <span className="navList__subheading-icon"><i className="fas fa-briefcase-medical"></i></span>
                <span className="navList__subheading-title">insurance</span>
              </div>
              <ul className="subList subList--hidden">
                <li className="subList__item">medical</li>
                <li className="subList__item">vision</li>
                <li className="subList__item">dental</li>
              </ul>
            </li>
            <li>
              <div className="navList__subheading row row--align-v-center">
                <span className="navList__subheading-icon"><i className="fas fa-plane-departure"></i></span>
                <span className="navList__subheading-title">travel</span>
              </div>
              <ul className="subList subList--hidden">
                <li className="subList__item">domestic</li>
                <li className="subList__item">foreign</li>
                <li className="subList__item">misc</li>
              </ul>
            </li>
            <li>
              <div className="navList__subheading row row--align-v-center">
                <span className="navList__subheading-icon"><i className="far fa-angry"></i></span>
                <span className="navList__subheading-title">taxes</span>
              </div>
              <ul className="subList subList--hidden">
                <li className="subList__item">current</li>
                <li className="subList__item">archives</li>
              </ul>
            </li>

            <li className="navList__heading">messages<i className="far fa-envelope"></i></li>
            <li>
              <div className="navList__subheading row row--align-v-center">
                <span className="navList__subheading-icon"><i className="fas fa-envelope"></i></span>
                <span className="navList__subheading-title">inbox</span>
              </div>
              <ul className="subList subList--hidden">
                <li className="subList__item">primary</li>
                <li className="subList__item">social</li>
                <li className="subList__item">promotional</li>
              </ul>
            </li>
            <li>
              <div className="navList__subheading row row--align-v-center">
                <span className="navList__subheading-icon"><i className="fas fa-eye"></i></span>
                <span className="navList__subheading-title">unread</span>
              </div>
              <ul className="subList subList--hidden">
                <li className="subList__item">primary</li>
                <li className="subList__item">social</li>
                <li className="subList__item">promotional</li>
              </ul>
            </li>
             <li>
              <div className="navList__subheading row row--align-v-center">
                <span className="navList__subheading-icon"><i className="fas fa-book-open"></i></span>
                <span className="navList__subheading-title">archives</span>
              </div>
              <ul className="subList subList--hidden">
                <li className="subList__item">primary</li>
                <li className="subList__item">social</li>
                <li className="subList__item">promotional</li>
              </ul>
            </li>

            <li className="navList__heading">photo album<i className="far fa-image"></i></li>
            <li>
              <div className="navList__subheading row row--align-v-center">
                <span className="navList__subheading-icon"><i className="fas fa-mountain"></i></span>
                <span className="navList__subheading-title">vacation</span>
              </div>
              <ul className="subList subList--hidden">
                <li className="subList__item">cambodia</li>
                <li className="subList__item">new york</li>
              </ul>
            </li>
            <li>
              <div className="navList__subheading row row--align-v-center">
                <span className="navList__subheading-icon"><i className="fas fa-wine-glass-alt"></i></span>
                <span className="navList__subheading-title">anniversary</span>
              </div>
              <ul className="subList subList--hidden">
                <li className="subList__item">dive trip</li>
                <li className="subList__item">hikathon</li>
                <li className="subList__item">buffalo river</li>
              </ul>
            </li>
            <li>
              <div className="navList__subheading row row--align-v-center">
                <span className="navList__subheading-icon"><i className="fas fa-graduation-cap"></i></span>
                <span className="navList__subheading-title">university</span>
              </div>
              <ul className="subList subList--hidden">
                <li className="subList__item">wild horse saloon</li>
                <li className="subList__item">service corps</li>
                <li className="subList__item">graduation</li>
                <li className="subList__item">internships</li>
              </ul>
            </li>

            <li className="navList__heading">statistics<i className="fas fa-chart-bar"></i></li>
            <li>
              <div className="navList__subheading row row--align-v-center">
                <span className="navList__subheading-icon"><i className="fas fa-credit-card"></i></span>
                <span className="navList__subheading-title">finances</span>
              </div>
              <ul className="subList subList--hidden">
                <li className="subList__item">mortgage</li>
                <li className="subList__item">investments</li>
                <li className="subList__item">spend log</li>
                <li className="subList__item">owed</li>
              </ul>
            </li>
            <li>
              <div className="navList__subheading row row--align-v-center">
                <span className="navList__subheading-icon"><i className="fas fa-phone"></i></span>
                <span className="navList__subheading-title">call stats</span>
              </div>
              <ul className="subList subList--hidden">
                <li className="subList__item">last month</li>
                <li className="subList__item">bi-weekly</li>
                <li className="subList__item">yesterday</li>
                <li className="subList__item">today</li>
              </ul>
            </li>
            <li>
              <div className="navList__subheading row row--align-v-center">
                <span className="navList__subheading-icon"><i className="fas fa-plane"></i></span>
                <span className="navList__subheading-title">trip logs</span>
              </div>
              <ul className="subList subList--hidden">
                <li className="subList__item">amsterdam</li>
                <li className="subList__item">buenos aires</li>
                <li className="subList__item">cambodia</li>
                <li className="subList__item">greenland</li>
              </ul>
            </li>
            
            <li className="navList__heading">Events<i className="fas fa-calendar-alt"></i></li>
            <li>
              <div className="navList__subheading row row--align-v-center">
                <span className="navList__subheading-icon"><i className="fas fa-wine-glass-alt"></i></span>
                <span className="navList__subheading-title">weddings</span>
              </div>
              <ul className="subList subList--hidden">
                <li className="subList__item">past</li>
                <li className="subList__item">present</li>
                <li className="subList__item">future</li>
              </ul>
            </li>
            <li>
              <div className="navList__subheading row row--align-v-center">
                <span className="navList__subheading-icon"><i className="fas fa-school"></i></span>
                <span className="navList__subheading-title">playdates</span>
              </div>
              <ul className="subList subList--hidden">
                <li className="subList__item">weirdos</li>
                <li className="subList__item">smarties</li>
                <li className="subList__item">nerds</li>
              </ul>
            </li>
            <li>
                  <div className="navList__subheading row row--align-v-center">
                    <span className="navList__subheading-icon"><i className="fas fa-users"></i></span>
                    <span className="navList__subheading-title">networking</span>
                  </div>
                  <ul className="subList subList--hidden">
                    <li className="subList__item">tech</li>
                    <li className="subList__item">automotive</li>
                    <li className="subList__item">UX research</li>
                    <li className="subList__item">development</li>
                  </ul>
                </li>
          </ul>
        </div>
      </aside>
    );
}

export default sidenav;