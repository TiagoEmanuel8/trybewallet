import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Expensives from '../components/Expensives';
import { fetchApi, fetchExpense } from '../actions/actionFetchCoin';
import actionEditExpenses from '../actions/actionEditExpenses';
import actionBotao from '../actions/actionBotao';

const INITIAL_STATE = {
  currency: 'USD',
  description: '',
  value: 0,
  tag: 'Alimentação',
  method: 'Dinheiro',
};
// === !== <=
class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE,
    };
    this.valueInput = this.valueInput.bind(this);
    this.descriptionInput = this.descriptionInput.bind(this);
    this.currencyInput = this.currencyInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.inputCurrencies = this.inputCurrencies.bind(this);
    this.payInput = this.payInput.bind(this);
    this.expense = this.expense.bind(this);
    this.AddExpense = this.AddExpense.bind(this);
    this.EditExpense = this.EditExpense.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    return getCurrencies();
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  // Req 4 - Pegando os tipos das moedas da store e jogando dentro das options

  inputCurrencies() {
    const { typeCurrencies } = this.props;
    console.log(typeCurrencies);
    return (
      typeCurrencies.map((element) => (
        <option key={ element } value={ element } data-testid={ element }>
          {element}
        </option>
      ))
    );
  }

  valueInput() {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor da despesa:
        <input
          id="value"
          name="value"
          type="number"
          data-testid="value-input"
          value={ value }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  descriptionInput() {
    const { description } = this.state;
    return (
      <label htmlFor="description">
        Descrição:
        <input
          id="description"
          name="description"
          type="text"
          data-testid="description-input"
          placeholder="digite a descrição da despesa"
          value={ description }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  currencyInput() {
    const { currency } = this.state;
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          id="currency"
          name="currency"
          data-testid="currency-input"
          onChange={ this.handleChange }
          value={ currency }
        >
          { this.inputCurrencies() }
        </select>
      </label>
    );
  }

  payInput() {
    const { method } = this.state;
    return (
      <label htmlFor="method">
        Forma de pagamento
        <select
          id="method"
          name="method"
          data-testid="method-input"
          onChange={ this.handleChange }
          value={ method }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  expense() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Despesa
        <select
          id="tag"
          name="tag"
          data-testid="tag-input"
          onChange={ this.handleChange }
          value={ tag }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  AddExpense() {
    const { addExpense } = this.props;
    addExpense(this.state);
    this.setState({
      ...INITIAL_STATE,
    });
  }

  EditExpense() {
    const { expenses, filteredExpense, newExpense, editarfuncao } = this.props;
    const { id, exchangeRates } = filteredExpense;
    const editMode = expenses.map((dataExpense) => (dataExpense === filteredExpense ? {
      ...this.state, id, exchangeRates,
    } : dataExpense));
    newExpense(editMode);
    editarfuncao(false, 0);
  }

  render() {
    return (
      <main>
        <Header />
        <form>
          { this.valueInput() }
          { this.descriptionInput() }
          { this.currencyInput() }
          { this.payInput() }
          { this.expense() }
          <button type="button" onClick={ () => this.EditExpense() }>
            Editar despesa
          </button>
          <button type="button" onClick={ () => this.AddExpense() }>
            Adicionar despesa
          </button>
          )
        </form>
        <Expensives />
      </main>
    );
  }
}

Wallet.propTypes = {
  getCurrencies: PropTypes.func,
  typeCurrencies: PropTypes.arrayOf,
  addExpense: PropTypes.func,
  edit: PropTypes.bool,
}.isRequired;

const mapStateToProps = (state) => ({
  typeCurrencies: state.wallet.currencies,
  edit: state.wallet.editOn,
  expenses: state.wallet.expenses,
  dataEdit: state.wallet.editExpense,
  filteredExpense: state.wallet.editExpense,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchApi()),
  addExpense: (expense) => dispatch(fetchExpense(expense)),
  newExpense: (newExpense) => dispatch(actionEditExpenses(newExpense)),
  editarfuncao: (bool, id) => dispatch(actionBotao(bool, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
