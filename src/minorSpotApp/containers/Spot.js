import { connect } from 'react-redux';

import * as module from '../modules/spot';
import SpotListComp from '../components/SpotList.jsx';
import SpotDetailComp from '../components/SpotDetail.jsx';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  loadSpotList: () => {
    dispatch(module.loadSpotList());
  }
});

export const SpotList = connect(mapStateToProps, mapDispatchToProps)(SpotListComp);
export const SpotDetail = connect(mapStateToProps, mapDispatchToProps)(SpotDetailComp);
