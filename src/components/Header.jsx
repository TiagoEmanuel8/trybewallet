import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.sumValue = this.sumValue.bind(this);
  }

  // nessa lógica de somar os valores de um array com o câmbio atual fui ajudado pela Rosiele e do Rafa Reis
  sumValue() {
    const { expenses } = this.props;
    const expensesMap = expenses.map(({ currency, value, exchangeRates }) => {
      const dayCurrency = exchangeRates[currency];
      const sumExpense = Number(value) * Number(dayCurrency.ask);
      return sumExpense;
    });
    return expensesMap.reduce((total, expense) => total + expense, 0);
  }

  render() {
    const { getEmailStore } = this.props;
    return (
      <header className="header">
        <p data-testid="email-field">{ getEmailStore }</p>
        <p data-testid="total-field">{ this.sumValue() }</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

Header.propTypes = {
  getEmailStore: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  getEmailStore: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
