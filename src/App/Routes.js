import React, { Suspense } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import history from 'browserHistory';
//import Project from 'Project';
//import Authenticate from 'Auth/Authenticate';
//import PageError from 'shared/components/PageError';

import Users from 'Pages/Users';

const Project = () => <>Project</>;
const Authenticate = () => <>Authenticate</>;
const PageError = () => <>404 Page Not Found</>;

const Routes = () => (
  <Router history={history}>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Redirect exact from="/" to="/project" />
        <Route path="/authenticate" component={Authenticate} />
        <Route path="/project" component={Project} />
        <Route path="/users" component={Users} />
        <Route component={PageError} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
