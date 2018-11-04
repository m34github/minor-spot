import { connect } from 'react-redux';

import * as module from '../modules/spot';
import SpotListComp from '../components/SpotList.jsx';
import SpotRegistComp from '../components/SpotRegist.jsx';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  loadSpots: (url) => {
    dispatch(module.loadSpots(url));
  },
  loadUsers: (url) => {
    dispatch(module.loadUsers(url));
  },
  registSpot: (spot) => {
    dispatch(module.registSpot(spot));
  }
});

export const SpotList = connect(mapStateToProps, mapDispatchToProps)(SpotListComp);
export const SpotRegist = connect(mapStateToProps, mapDispatchToProps)(SpotRegistComp);
