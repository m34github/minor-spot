import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import { SpotList } from './containers/Spot';
import store from './modules';
import styles from './styles/';

class MinorSpotApp extends React.Component {
  render() {
    const { theme } = styles;

    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route path="/" exact component={SpotList} />
              <Redirect to="/" />
            </Switch>
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default MinorSpotApp;
