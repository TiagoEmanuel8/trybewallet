import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actionAddEmail from '../actions/actionAddEmail';
import './LoginForm.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkedValidation = this.checkedValidation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  // req 1 - Função que vai enviar o email para a store

  handleSubmit() {
    const { email } = this.state;
    const { addEmailToStore } = this.props;
    addEmailToStore(email);
  }

  // req 1 - Função responsável por fazer a verificação de email e senha

  checkedValidation() {
    const { password, email } = this.state;
    const MIN_PASSWORD = 6;
    if (password.length < MIN_PASSWORD) { return false; }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) { return false; }
    return true;
  }

  // req 1 - Forms de login e rota mudando para alternar na aplicação

  render() {
    const { email, password } = this.state;
    return (
      <form
        autoComplete="off"
        className="form"
      >
        <div className="login-container">
          <input
            type="text"
            name="email"
            value={ email }
            placeholder="email"
            data-testid="email-input"
            onChange={ this.handleChange }
          />
          <input
            type="password"
            name="password"
            value={ password }
            placeholder="password"
            data-testid="password-input"
            onChange={ this.handleChange }
          />
          <Link to="/carteira">
            <button
              type="submit"
              disabled={ !this.checkedValidation() }
              onClick={ this.handleSubmit }
            >
              Entrar
            </button>
          </Link>
        </div>
      </form>
    );
  }
}

Login.propTypes = {
  addEmailToStore: PropTypes.string,
}.isRequired;

// req 1 - Como quero esse parâmetro é justamente o que quero salvar na store

const mapDispatchToProps = (dispatch) => ({
  addEmailToStore: (email) => dispatch(actionAddEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
