import axios from 'axios';
import uuidv4 from 'uuid/v4';

const ERROR = 'ERROR';
const LOAD_SPOTS = 'LOAD_SPOTS';
const LOAD_USERS = 'LOAD_USERS';

const loadSpots = (url) => (dispatch) => {
  axios.get(url)
    .then(result => {
      dispatch({
        type: LOAD_SPOTS,
        payload: {
          spots: result.data
        },
        meta: {
          spotsIsLoaded: true
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

const loadUsers = (url) => (dispatch) => {
  axios.get(url)
    .then(result => {
      dispatch({
        type: LOAD_USERS,
        payload: {
          users: result.data
        },
        meta: {
          usersIsLoaded: true
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
    id: uuidv4(),
    register: '35a592ea4820ca88832842b3b64f95bc'
  }));
};

const initialState = {
  payload: {
    spots: {},
    users: {}
  },
  meta: {
    spotsIsLoaded: false,
    usersIsLoaded: false
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
    case LOAD_SPOTS: {
      return Object.assign({}, state, {
        payload: Object.assign({}, state.payload, {
          spots: action.payload.spots
        }),
        meta: Object.assign({}, state.meta, {
          spotsIsLoaded: action.meta.spotsIsLoaded
        }),
        error: action.error
      });
    }
    case LOAD_USERS: {
      return Object.assign({}, state, {
        payload: Object.assign({}, state.payload, {
          users: action.payload.users
        }),
        meta: Object.assign({}, state.meta, {
          usersIsLoaded: action.meta.usersIsLoaded
        }),
        error: action.error
      });
    }
    default: {
      return state;
    }
  }
};

export { loadSpots, loadUsers, registSpot };
export default reducer;
