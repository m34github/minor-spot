import { connect } from 'react-redux';

import * as module from '../modules/spot';
import SpotListComp from '../components/SpotList.jsx';
import SpotDetailComp from '../components/SpotDetail.jsx';
import SpotRegistComp from '../components/SpotRegist.jsx';
import RouteSelectComp from '../components/RouteSelect.jsx';

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
  },
  selectRoute: (route) => {
    dispatch(module.selectRoute(route));
  }
});

export const SpotList = connect(mapStateToProps, mapDispatchToProps)(SpotListComp);
export const SpotDetail = connect(mapStateToProps, mapDispatchToProps)(SpotDetailComp);
export const SpotRegist = connect(mapStateToProps, mapDispatchToProps)(SpotRegistComp);
export const RouteSelect = connect(mapStateToProps, mapDispatchToProps)(RouteSelectComp);
