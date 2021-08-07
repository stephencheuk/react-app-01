
const main = (props) => {
  return (
      <main className="main">
        <div className="main-header">
          <div className="main-header__intro-wrapper">
            <div className="main-header__welcome">
              <div className="main-header__welcome-title text-light">Welcome, <strong>Matthew</strong></div>
              <div className="main-header__welcome-subtitle text-light">How are you today?</div>
            </div>
            <div className="quickview">
              <div className="quickview__item">
                <div className="quickview__item-total">41</div>
                <div className="quickview__item-description">
                  <i className="far fa-calendar-alt"></i>
                  <span className="text-light">Events</span>
                </div>
              </div>
              <div className="quickview__item">
                <div className="quickview__item-total">64</div>
                <div className="quickview__item-description">
                  <i className="far fa-comment"></i>
                  <span className="text-light">Messages</span>
                </div>
              </div>
              <div className="quickview__item">
                <div className="quickview__item-total">27&deg;</div>
                <div className="quickview__item-description">
                  <i className="fas fa-map-marker-alt"></i>
                  <span className="text-light">Austin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-overview">
          <div className="overviewCard">
            <div className="overviewCard-icon overviewCard-icon--document">
               <i className="far fa-file-alt"></i>
            </div>
            <div className="overviewCard-description">
              <h3 className="overviewCard-title text-light">New <strong>Document</strong></h3>
              <p className="overviewCard-subtitle">Europe Trip</p>
            </div>
          </div>
          <div className="overviewCard">
            <div className="overviewCard-icon overviewCard-icon--calendar">
               <i className="far fa-calendar-check"></i>
            </div>
            <div className="overviewCard-description">
              <h3 className="overviewCard-title text-light">Upcoming <strong>Event</strong></h3>
              <p className="overviewCard-subtitle">Chili Cookoff</p>
            </div>
          </div>
          <div className="overviewCard">
            <div className="overviewCard-icon overviewCard-icon--mail">
               <i className="far fa-envelope"></i>
            </div>
            <div className="overviewCard-description">
              <h3 className="overviewCard-title text-light">Recent <strong>Emails</strong></h3>
              <p className="overviewCard-subtitle">+10</p>
            </div>
          </div>
          <div className="overviewCard">
            <div className="overviewCard-icon overviewCard-icon--photo">
               <i className="far fa-file-image"></i>
            </div>
            <div className="overviewCard-description">
              <h3 className="overviewCard-title text-light">New <strong>Album</strong></h3>
              <p className="overviewCard-subtitle">House Concert</p>
            </div>
          </div>
        </div> { /*<!-- /.main__overview -->*/ }
        <div className="main__cards">
          <div className="card">
            <div className="card__header">
              <div className="card__header-title text-light">Your <strong>Events</strong>
                <a href="#" className="card__header-link text-bold">View All</a>
              </div>
              <div className="settings">
                <div className="settings__block"><i className="fas fa-edit"></i></div>
                <div className="settings__block"><i className="fas fa-cog"></i></div>
              </div>
            </div>
            <div className="card__main">
              <div className="card__row">
                <div className="card__icon"><i className="fas fa-gift"></i></div>
                <div className="card__time">
                  <div>today</div>
                </div>
                <div className="card__detail">
                  <div className="card__source text-bold">Jonathan G</div>
                  <div className="card__description">Going away party at 8:30pm. Bring a friend!</div>
                  <div className="card__note">1404 Gibson St</div>
                </div>
              </div>
              <div className="card__row">
                <div className="card__icon"><i className="fas fa-plane"></i></div>
                <div className="card__time">
                  <div>Tuesday</div>
                </div>
                <div className="card__detail">
                  <div className="card__source text-bold">Matthew H</div>
                  <div className="card__description">Flying to Bora Bora at 4:30pm</div>
                  <div className="card__note">Delta, Gate 27B</div>
                </div>
              </div>
              <div className="card__row">
                <div className="card__icon"><i className="fas fa-book"></i></div>
                <div className="card__time">
                  <div>Thursday</div>
                </div>
                <div className="card__detail">
                  <div className="card__source text-bold">National Institute of Science</div>
                  <div className="card__description">Join the institute for an in-depth look at Stephen Hawking</div>
                  <div className="card__note">7:30pm, Carnegie Center for Science</div>
                </div>
              </div>
              <div className="card__row">
                <div className="card__icon"><i className="fas fa-heart"></i></div>
                <div className="card__time">
                  <div>Friday</div>
                </div>
                <div className="card__detail">
                  <div className="card__source text-bold">24th Annual Heart Ball</div>
                  <div className="card__description">Join us and contribute to your favorite local charity.</div>
                  <div className="card__note">6:45pm, Austin Convention Ctr</div>
                </div>
              </div>
              <div className="card__row">
                <div className="card__icon"><i className="fas fa-heart"></i></div>
                <div className="card__time">
                  <div>Saturday</div>
                </div>
                <div className="card__detail">
                  <div className="card__source text-bold">Little Rock Air Show</div>
                  <div className="card__description">See the Blue Angels fly with roaring thunder</div>
                  <div className="card__note">11:00pm, Jacksonville Airforce Base</div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__header">
              <div className="card__header-title text-light">Recent <strong>Documents</strong>
                <a href="#" className="card__header-link text-bold">View All</a>
              </div>
              <div className="settings">
                <div className="settings__block"><i className="fas fa-edit"></i></div>
                <div className="settings__block"><i className="fas fa-cog"></i></div>
              </div>
            </div>
            <div className="card">
              <div className="documents">
                <div className="document">
                  <div className="document__img"></div>
                  <div className="document__title">tesla-patents</div>
                  <div className="document__date">07/16/2018</div>
                </div>
                <div className="document">
                  <div className="document__img"></div>
                  <div className="document__title">yearly-budget</div>
                  <div className="document__date">09/04/2018</div>
                </div>
                <div className="document">
                  <div className="document__img"></div>
                  <div className="document__title">top-movies</div>
                  <div className="document__date">10/10/2018</div>
                </div>
                <div className="document">
                  <div className="document__img"></div>
                  <div className="document__title">trip-itinerary</div>
                  <div className="document__date">11/01/2018</div>
                </div>
              </div>
            </div>
          </div>
          <div className="card card--finance">
            <div className="card__header">
              <div className="card__header-title text-light">Monthly <strong>Spending</strong>
                <a href="#" className="card__header-link text-bold">View All</a>
              </div>
              <div className="settings">
                <div className="settings__block"><i className="fas fa-edit"></i></div>
                <div className="settings__block"><i className="fas fa-cog"></i></div>
              </div>
            </div>
            <div id="chartdiv"></div>
          </div>
        </div> { /* <!-- /.main-cards --> */ }
      </main>
    );
}

export default main;