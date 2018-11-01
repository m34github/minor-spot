import generator from 'generate-password';

import { database } from '../.env/firebase.config';

const ERROR = 'ERROR';
const LOAD_PASSWORD_DATA = 'LOAD_PASSWORD_DATA';
const UPDATE_NEW_PASSWORD_DATA = 'UPDATE_NEW_PASSWORD_DATA';
const SAVE_NEW_PASSWORD_DATA = 'SAVE_NEW_PASSWORD_DATA';
const GENERATE_PASSWORD = 'GENERATE_PASSWORD';

const loadPasswordData = () => (dispatch) => {
  database.ref('userid01/password').once('value')
    .then(snapshot => {
      dispatch({
        type: LOAD_PASSWORD_DATA,
        payload: {
          passwords: snapshot.val()
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

const updateNewPasswordData = (params) => (dispatch) => {
  dispatch({
    type: UPDATE_NEW_PASSWORD_DATA,
    payload: {
      newPasswordData: params
    }
  });
};

const saveNewPasswordData = (params) => (dispatch) => {
  database.ref('userid01/password').push(params)
    .then(ref => {
      dispatch({
        type: SAVE_NEW_PASSWORD_DATA,
        payload: {
          newPasswordData: {
            title: '',
            username: '',
            password: '',
            url: '',
            comment: ''
          }
        },
        meta: {
          saveKey: ref
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

const generatePassword = (params) => (dispatch) => {
  const generatedPassword = generator.generate(params);
  dispatch({
    type: GENERATE_PASSWORD,
    payload: {
      newPasswordData: {
        password: generatedPassword
      }
    }
  });
};

const initialState = {
  payload: {
    passwords: {},
    newPasswordData: {
      title: '',
      username: '',
      password: '',
      url: '',
      comment: ''
    }
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
    case LOAD_PASSWORD_DATA: {
      return Object.assign({}, state, {
        payload: Object.assign({}, state.payload, {
          passwords: action.payload.passwords
        }),
        meta: action.meta,
        error: action.error
      });
    }
    case UPDATE_NEW_PASSWORD_DATA: {
      return Object.assign({}, state, {
        payload: Object.assign({}, state.payload, {
          newPasswordData: action.payload.newPasswordData
        })
      });
    }
    case SAVE_NEW_PASSWORD_DATA: {
      return Object.assign({}, state, {
        payload: Object.assign({}, state.payload, {
          newPasswordData: action.payload.newPasswordData
        }),
        meta: action.meta,
        error: action.error
      })
    }
    case GENERATE_PASSWORD: {
      return Object.assign({}, state, {
        payload: Object.assign({}, state.payload, {
          newPasswordData: Object.assign({}, state.payload.newPasswordData, {
            password: action.payload.newPasswordData.password
          })
        })
      });
    }
    default: {
      return state;
    }
  }
};

export { loadPasswordData, updateNewPasswordData, saveNewPasswordData, generatePassword };
export default reducer;
