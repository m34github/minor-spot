const ERROR = 'ERROR';
const CHECK_AUTH = 'CHECK_AUTH';
const TRY_LOGIN = 'TRY_LOGIN';
const TRY_LOGOUT = 'TRY_LOGOUT';

const checkAuth = (uid) => (dispatch) => {
  if (uid === 'dummy-uid') {
    dispatch({
      type: CHECK_AUTH,
      payload: {
        uid: uid
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
      error: 'check auth error'
    });
  }
};

const tryLogin = (email, password) => (dispatch) => {
  if (email === 'dummy@email.com' && password === 'password') {
    dispatch({
      type: TRY_LOGIN,
      payload: {
        uid: 'dummy-uid'
      },
      meta: {
        isAuthed: true,
        isLoaded: true
      },
      error: null
    });
  } else {
    dispatch({
      type: TRY_LOGIN,
      payload: {},
      meta: {
        isAuthed: false,
        isLoaded: true
      },
      error: 'login error !'
    });
  }
};

const tryLogout = () => (dispatch) => {
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
