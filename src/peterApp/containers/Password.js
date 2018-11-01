import { connect } from 'react-redux';

import * as module from '../modules/password';
import PwdComp from '../components/Password.jsx';
import PwdRegComp from '../components/PasswordRegister.jsx';
import PwdGenComp from '../components/PasswordGenerator.jsx';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  loadPasswordData: () => {
    dispatch(module.loadPasswordData());
  },
  updateNewPasswordData: (params) => {
    dispatch(module.updateNewPasswordData(params));
  },
  saveNewPasswordData: (params) => {
    dispatch(module.saveNewPasswordData(params));
  },
  generatePassword: (params) => {
    dispatch(module.generatePassword(params));
  }
});

export const Password = connect(mapStateToProps, mapDispatchToProps)(PwdComp);
export const PasswordRegister = connect(mapStateToProps, mapDispatchToProps)(PwdRegComp);
export const PasswordGenerator = connect(mapStateToProps, mapDispatchToProps)(PwdGenComp);
