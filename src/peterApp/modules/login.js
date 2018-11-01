import { auth } from '../.env/firebase.config';

const ERROR = 'ERROR';
const CHECK_AUTH = 'CHECK_AUTH';
const TRY_LOGIN = 'TRY_LOGIN';
const TRY_LOGOUT = 'TRY_LOGOUT';

const checkAuth = () => (dispatch) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      dispatch({
        type: CHECK_AUTH,
        payload: {
          uid: user.uid
        },
        meta: {
          isAuthed: true,
          isLoaded: true
        },
        error: null
      });
    } else {
      dispatch({
        type: CHECK_AUTH,
        payload: {},
        meta: {
          isAuthed: false,
          isLoaded: true
        },
        error: null
      });
    }
  });
};

const tryLogin = (email, password) => (dispatch) => {
  auth.signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch({
        type: TRY_LOGIN,
        payload: {
          uid: user.uid
        },
        meta: {
          isAuthed: true,
          isLoaded: true
        },
        error: null
      });
    })
    .catch(err => {
      dispatch({
        type: TRY_LOGIN,
        payload: {},
        meta: {
          isAuthed: false,
          isLoaded: true
        },
        error: err
      });
    });
};

const tryLogout = () => (dispatch) => {
  auth.signOut()
    .then(() => {
      dispatch({
        type: TRY_LOGOUT,
        payload: {
          uid: null
        },
        meta: {
          isAuthed: false
        },
        error: null
      });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        error: err
      });
    })
};

const initialState = {
  payload: {
    uid: null
  },
  meta: {
    isAuthed: false,
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
    case CHECK_AUTH: {
      return Object.assign({}, state, {
        payload: action.payload,
        meta: action.meta,
        error: action.error
      });
    }
    case TRY_LOGIN: {
      return Object.assign({}, state, {
        payload: action.payload,
        meta: action.meta,
        error: action.error
      });
    }
    case TRY_LOGOUT: {
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

export { checkAuth, tryLogin, tryLogout };
export default reducer;
