import axios from 'axios';
import uuidv4 from 'uuid/v4';

const ERROR = 'ERROR';
const LOAD_SPOT_LIST = 'LOAD_SPOT_LIST';

const loadSpotList = (url) => (dispatch) => {
  axios.get(url)
    .then(result => {
      dispatch({
        type: LOAD_SPOT_LIST,
        payload: {
          data: result.data
        },
        meta: {
          isLoaded: true
        },
        error: null
      });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        error: err
      });
    });
};

const registSpot = (spot) => (dispatch) => {
  console.log(Object.assign({}, spot, {
    id: uuidv4()
  }));
};

const initialState = {
  payload: {
    data: {}
  },
  meta: {
    isLoaded: false
  },
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR: {
      return Object.assign({}, state, {
        error: action.error
      })
    }
    case LOAD_SPOT_LIST: {
      return Object.assign({}, state, {
        payload: action.payload,
        meta: action.meta,
        error: action.error
      });
    }
    default: {
      return state;
    }
  }
};

export { loadSpotList, registSpot };
export default reducer;
