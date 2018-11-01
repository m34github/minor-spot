import axios from 'axios';

const ERROR = 'ERROR';
const LOAD_PERSONAL_DATA = 'LOAD_PERSONAL_DATA';

const loadPersonalData = () => (dispatch) => {
  axios({
    method: 'get',
    url: '/assets/data/sample.json',
  })
    .then((res) => {
      dispatch({
        type: LOAD_PERSONAL_DATA,
        payload: {
          data: res.data
        },
        meta: {
          isLoaded: true
        },
        error: null
      });
    })
    .catch((err) => {
      dispatch({
        type: ERROR,
        error: err
      });
    });
};

const initialState = {
  payload: {
    data: null
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
      });
    }
    case LOAD_PERSONAL_DATA: {
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

export { loadPersonalData };
export default reducer;
