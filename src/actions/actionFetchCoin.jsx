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

export const fetchApi = () => async (dispatch) => {
  const fetchCoin = await fetchAPIWallet();
  const resultFetchCoin = Object.keys(fetchCoin);
  const filteredCoin = resultFetchCoin.filter((element) => element !== 'USDT');
  dispatch(requestTypeCoin(filteredCoin));
};

export const fetchExpense = (expense) => async (dispatch) => {
  const currentCurrency = await fetchAPIWallet();
  const expenseCurrency = {
    ...expense,
    exchangeRates: currentCurrency,
  };
  dispatch(addExpense(expenseCurrency));
};
