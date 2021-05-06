import { EDIT_EXPENSE } from './actionTypes';

const actionEditExpense = (newExpense) => ({
  type: EDIT_EXPENSE,
  newExpense,
});

export default actionEditExpense;
