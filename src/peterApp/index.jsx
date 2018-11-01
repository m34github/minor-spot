import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import { Authed, Login } from './containers/Login';
import Personal from './containers/Personal';
import { Password, PasswordRegister, PasswordGenerator } from './containers/Password';
import store from './modules';
import styles from './styles/';

class SimpleApp extends React.Component {
  render() {
    const { theme } = styles;

    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route path="/login" exact component={Login} />

              <Authed>
                <Switch>
                  <Route path="/" exact component={Personal} />
                  <Route path="/password" exact component={Password} />
                  <Route path="/password/regist" component={PasswordRegister} />
                  <Route path="/password/generate" component={PasswordGenerator} />
                  <Redirect to="/" />
                </Switch>
              </Authed>

              <Redirect to="/login" />
            </Switch>
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default SimpleApp;
