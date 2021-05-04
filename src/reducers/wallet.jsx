import { TYPE_COIN, ADD_EXPENSE } from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  idCount: 0,
};

// Req 4 - Função responsável por adicionar o contador de id na chave expense e materializar todo o formato do estado pedido no requisito na chave expenses e de brinde ainda temos um 2º contador
// Obs: Essa função vai servir como base para ser chamada dentro do reducer Wallet

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

// Req 4 - Esse Reducer vai gerenciar o tipo de moeda e despachar a despesa já com o formato desejado pelo requisito

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case TYPE_COIN:
    return {
      ...state,
      currencies: action.currencies,
    };
  case ADD_EXPENSE:
    return addExpense(state, action);
  default:
    return state;
  }
};

export default wallet;
