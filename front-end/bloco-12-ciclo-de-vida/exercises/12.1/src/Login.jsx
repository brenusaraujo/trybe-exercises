import React from "react";
import Loading from "./Loading";
import { createUser } from '../services/userAPI';


class Login extends React.Component {
  constructor(props) {
    super(props);

    this.setState({
      name: 0,
      disabled: true,
      renderLoading: false,
      renderSearch: false,
    })
  }

  handleChange = ({ target }) => {
    const { value } = target;
    if (value.length >= 3) {
      return this.setState({ name: value, disabled: false });
    }
    return this.setState({ name: '', disabled: true });
  }

  handleLoading = (event) => {
    const { name } = this.state;
    event.preventDefault();
    this.setState({ renderLoading: true });
    const promise = createUser({ name });
    promise.then(() => this.setState({ renderLoading: false, renderSearch: true }));
  }
  render() {
    const { renderLoading, disabled } = this.props
    return (
      <div data-testid="page-login">
        {
          (renderLoading
            ? <Loading />
            : (
              <form>
                <input
                  type="text"
                  name="name"
                  data-testid="login-name-input"
                  onChange={this.handleChange}
                  placeholder="nome de usuário"
                />
                <button
                  type="submit"
                  data-testid="login-submit-button"
                  disabled={disabled}
                  onClick={this.handleLoading}
                >
                  Entrar
                </button>
              </form>
            )
          )
        }
      </div>
    );
  }
}

export default Login

