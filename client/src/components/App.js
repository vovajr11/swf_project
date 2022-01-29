import React, { Component, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import Layout from './Layout';
import PrivateRoute from './PrivateRouter';
import PublicRoute from './PublicRouter';
import routes from '../routes';

class App extends Component {
    componentDidMount() {
        this.props.onGetCurrentUser();
    }
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        {routes.map(route =>
                            route.private ? (
                                <PrivateRoute key={route.label} {...route} />
                            ) : (
                                <PublicRoute key={route.label} {...route} />
                            ),
                        )}
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default connect(null, {
    onGetCurrentUser: authOperations.getCurrentUser,
})(App);
