import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actionRemoveExpense from '../actions/actionRemoveCoin';
import actionBotao from '../actions/actionBotao';
import './Expensives.css';

class Expensives extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.expensivesTable = this.expensivesTable.bind(this);
    this.editExpense = this.editExpense.bind(this);
  }

  editExpense(id) {
    const { editarfuncao, expenses } = this.props;
    const filterId = expenses.find((element) => element.id === id);
    editarfuncao(true, filterId);
  }

  expensivesTable(element) {
    const { removeData } = this.props;
    const { currency, description, method, tag, value, exchangeRates, id } = element;
    const currencyCoin = exchangeRates[currency];
    const exchangeCoin = Number(value) * Number(currencyCoin.ask);
    return (
      <tr key={ id }>
        <td>{ description }</td>
        <td>{ tag }</td>
        <td>{ method }</td>
        <td>{ value }</td>
        <td>{ currencyCoin.name }</td>
        <td>{ (Math.round(currencyCoin.ask * 100) / 100).toFixed(2) }</td>
        <td>{ (Math.round(exchangeCoin * 100) / 100).toFixed(2) }</td>
        <td>Real</td>
        <td>
          <button
            className="deleteButton"
            type="button"
            data-testid="delete-btn"
            onClick={ () => removeData(id) }
          >
            Excluir
          </button>
          <button
            className="editButton"
            type="button"
            data-testid="edit-btn"
            onClick={ () => this.editExpense(id) }
          >
            Editar
          </button>
        </td>
      </tr>
    );
  }

  render() {
    const { expenses } = this.props;
    return (
      <section>
        {
          expenses.length === 0 ? ''
            : <table>
              <thead>
                <tr>
                  <th>Descrição</th>
                  <th>Tag</th>
                  <th>Método de pagamento</th>
                  <th>Valor</th>
                  <th>Moeda</th>
                  <th>Câmbio utilizado</th>
                  <th>Valor convertido</th>
                  <th>Moeda de conversão</th>
                  <th>Ação</th>
                </tr>
              </thead>
              <tbody>
                { expenses.length === 0
                  ? ''
                  : expenses.map((element) => this.expensivesTable(element))}
              </tbody>
            </table>
        }
      </section>
    );
  }
}

Expensives.propTypes = {
  expenses: PropTypes.arrayOf,
  removeData: PropTypes.func,
  editarfuncao: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeData: (id) => dispatch(actionRemoveExpense(id)),
  editarfuncao: (bool, id) => dispatch(actionBotao(bool, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expensives);
