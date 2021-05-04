import { REMOVE_EXPENSE } from './actionTypes';

const actionRemoveExpense = (id) => ({
  type: REMOVE_EXPENSE,
  id,
});

export default actionRemoveExpense;
