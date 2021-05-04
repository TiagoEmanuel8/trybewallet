import { TYPE_COIN, ADD_EXPENSE } from './actionTypes';
import fetchAPIWallet from '../services/walletAPI';

export const requestTypeCoin = (currencies) => ({
  type: TYPE_COIN,
  currencies,
});

const addExpense = (expenses) => ({
  type: ADD_EXPENSE,
  expenses,
});

// Nessa lógica do fetchAPI tive ajuda do Lucas Neves

// Req 4 - Thunk responsável por tratar a API, pegar as chaves e excluir 'USDT' - ligar as Options

export const fetchApi = () => async (dispatch) => {
  const fetchCoin = await fetchAPIWallet();
  const resultFetchCoin = Object.keys(fetchCoin);
  const filteredCoin = resultFetchCoin.filter((element) => element !== 'USDT');
  dispatch(requestTypeCoin(filteredCoin));
};

// Req 4 - Thunk responsável por salvar uma parte do formato na store do jeito que o requisito pede
// Req 4 - Esse Thunk adiciona todas as moedas da API que está chave exchangeRates ao objeto vindo da função addExpense

export const fetchExpense = (expense) => async (dispatch) => {
  const currentCurrency = await fetchAPIWallet();
  const expenseCurrency = {
    ...expense,
    exchangeRates: currentCurrency,
  };
  dispatch(addExpense(expenseCurrency));
};
