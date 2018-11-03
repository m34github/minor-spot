import { connect } from 'react-redux';

import * as module from '../modules/spot';
import SpotListComp from '../components/SpotList.jsx';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  loadSpotList: (url) => {
    dispatch(module.loadSpotList(url));
  }
});

export const SpotList = connect(mapStateToProps, mapDispatchToProps)(SpotListComp);
