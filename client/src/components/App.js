import React, { Component, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import routes from '../routes';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              {routes.map(route => (
                <Route key={route.path} {...route} />
              ))}
            </Switch>
          </Suspense>
        </Layout>
      </BrowserRouter>
    );
  }
}
