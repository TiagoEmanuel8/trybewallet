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

  sumValue() {
    const { expenses } = this.props;
    const expensesMap = expenses.map(({ currency, value, exchangeRates }) => {
      const dayCurrency = exchangeRates[currency];
      const sumExpense = Number(value) * Number(dayCurrency.ask);
      return sumExpense;
    });
    const totalValue = expensesMap.reduce((total, expense) => total + expense, 0);
    return Math.round(totalValue);
  }

  render() {
    const { getEmailStore } = this.props;
    return (
      <header className="header">
        <span>
          <span className="emphasisText" data-testid="email-field">{getEmailStore}</span>
          <span> até agora você gastou </span>
          <span className="emphasisText" data-testid="total-field">
            {this.sumValue()}
          </span>
          <span className="emphasisText" data-testid="header-currency-field"> BRL</span>
        </span>
      </header>
    );
  }
}

Header.propTypes = {
  getEmailStore: PropTypes.string,
  expenses: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

const mapStateToProps = (state) => ({
  getEmailStore: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
