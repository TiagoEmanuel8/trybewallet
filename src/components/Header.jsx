import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends React.Component {
  constructor() {
    super();
    this.setState();
  }

  render() {
    const { getEmailStore } = this.props;
    return (
      <header className="header">
        <p data-testid="email-field">{ getEmailStore }</p>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

Header.propTypes = {
  getEmailStore: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  getEmailStore: state.user.email,
});

export default connect(mapStateToProps)(Header);
