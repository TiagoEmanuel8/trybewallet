import {
  TYPE_COIN,
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  BOTAO_EDITAR_SALVAR,
  EDIT_EXPENSE,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  idCount: 0,
  editOn: false,
  editExpense: {},
};

const addExpense = (state = INITIAL_STATE, action) => {
  const { idCount, expenses } = state;
  const expense = {
    id: idCount,
    ...action.expenses,
  };
  return {
    ...state,
    expenses: [
      ...expenses,
      expense,
    ],
    idCount: idCount + 1,
  };
};

const removeExpense = (state = INITIAL_STATE, action) => ({
  ...state,
  expenses: state.expenses.filter((expense) => expense.id !== action.id),
});

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case TYPE_COIN:
    return {
      ...state,
      currencies: action.currencies,
    };
  case ADD_EXPENSE:
    return addExpense(state, action);
  case REMOVE_EXPENSE:
    return removeExpense(state, action);
  case BOTAO_EDITAR_SALVAR:
    return {
      ...state,
      editOn: action.bool,
      editExpense: action.expense,
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      expenses: action.newExpense,
    };
  default:
    return state;
  }
};

export default wallet;
