import { connect } from 'react-redux';

import * as module from '../modules/personal';
import Personal from '../components/Personal.jsx';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  loadPersonalData: () => {
    dispatch(module.loadPersonalData());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Personal);
