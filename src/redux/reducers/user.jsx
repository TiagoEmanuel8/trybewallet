import { ADD_EMAIL } from '../actions/actionTypes';

const INITIAL_STATE = {
  email: '',
};

const user = (defaultEmail = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EMAIL:
    return {
      ...defaultEmail,
      email: action.email,
    };
  default:
    return defaultEmail;
  }
};

export default user;
