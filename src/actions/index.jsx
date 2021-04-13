import { ADD_EMAIL } from './actionTypes';

const actionAddEmail = (email) => ({
  type: ADD_EMAIL,
  email,
});

export default actionAddEmail;
