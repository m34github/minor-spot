import { database } from '../.env/firebase.config';
import axios from 'axios';

const ERROR = 'ERROR';
const LOAD_SPOTS = 'LOAD_SPOTS';
const LOAD_FB_SPOTS = 'LOAD_FB_SPOTS';
const LOAD_USERS = 'LOAD_USERS';
const REGIST_SPOT = 'REGIST_SPOT';
const SELECT_ROUTE = 'SELECT_ROUTE';

const loadSpots = (url) => (dispatch) => {
  database.ref('user-id-01/spot').once('value')
    .then(snapshot => {
      dispatch({
        type: LOAD_FB_SPOTS,
        payload: {
          fbSpots: snapshot.val()
        },
        meta: {
          fbIsLoaded: true
        },
        error: null
      });
    });

  axios.get(url)
    .then(result => {
      dispatch({
        type: LOAD_SPOTS,
        payload: {
          spots: [result.data[0]]
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
  database.ref('user-id-01/spot')
    .push(Object.assign({}, spot, {
      register: {
        name: 'Z6zE3FYZxSX61fxTv7ZIT8fkter2',
        gender: 'male'
      }
    }))
    .then(() => {
      dispatch({
        type: REGIST_SPOT,
        payload: {
          spots: {},
          route: []
        }
      });
    });
};

const selectRoute = (route) => (dispatch) => {
  dispatch({
    type: SELECT_ROUTE,
    payload: {
      route
    }
  });
};

const initialState = {
  payload: {
    spots: {},
    fbSpots: {},
    users: {},
    route: []
  },
  meta: {
    spotsIsLoaded: false,
    usersIsLoaded: false,
    fbIsLoaded: false
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
    case LOAD_FB_SPOTS: {
      return Object.assign({}, state, {
        payload: Object.assign({}, state.payload, {
          fbSpots: action.payload.fbSpots
        }),
        meta: Object.assign({}, state.meta, {
          fbIsLoaded: action.meta.fbIsLoaded
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
    case REGIST_SPOT: {
      return Object.assign({}, state, {
        payload: Object.assign({}, state.payload, {
          spots: action.payload.spots,
          route: action.payload.route
        })
      });
    }
    case SELECT_ROUTE: {
      return Object.assign({}, state, {
        payload: Object.assign({}, state.payload, {
          route: action.payload.route
        })
      });
    }
    default: {
      return state;
    }
  }
};

export { loadSpots, loadUsers, registSpot, selectRoute };
export default reducer;
