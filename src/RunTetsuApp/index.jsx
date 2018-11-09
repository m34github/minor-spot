import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Top from './components/Top.jsx';
import { SpotList, SpotRegist } from './containers/';
import SpotDetail from './components/SpotDetail.jsx';
import RouteSelect from './components/RouteSelect.jsx';
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
              <Route path="/" exact component={Top} />
              <Route path="/spot/list" component={SpotList} />
              <Route path="/spot/detail/:id" component={SpotDetail} />
              <Route path="/spot/regist/" component={SpotRegist} />
              <Route path="/route/select/" component={RouteSelect} />
              <Redirect to="/" />
            </Switch>
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default MinorSpotApp;
