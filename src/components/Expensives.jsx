import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Expensives extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.expensivesTable = this.expensivesTable.bind(this);
  }

  // Req 5 - Tabela que exibe o valor do estado global + formato exigido pelo requisito

  expensivesTable(element) {
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
          <button type="button">Editar</button>
          <button type="button">Excluir</button>
        </td>
      </tr>
    );
  }

  // Req 5 - tabela de despesas

  render() {
    const { expenses } = this.props;
    return (
      <section>
        <table>
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
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            { expenses.length === 0
              ? null
              : expenses.map((element) => this.expensivesTable(element))}
          </tbody>
        </table>
      </section>
    );
  }
}

Expensives.propTypes = {
  expenses: PropTypes.arrayOf.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Expensives);
