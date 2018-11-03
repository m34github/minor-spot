import { connect } from 'react-redux';

import * as module from '../modules/login';
import AuthedComp from '../components/Authed.jsx';
import HeaderComp from '../components/Header.jsx';
import LoginComp from '../components/Login.jsx';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  checkAuth: (uid) => {
    dispatch(module.checkAuth(uid));
  },
  tryLogin: (email, password) => {
    dispatch(module.tryLogin(email, password));
  },
  tryLogout: () => {
    dispatch(module.tryLogout());
  }
});

export const Authed = connect(mapStateToProps, mapDispatchToProps)(AuthedComp);
export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComp);
export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComp);
