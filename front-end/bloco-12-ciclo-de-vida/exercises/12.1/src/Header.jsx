import React from "react";
import Loading from '../pages/Loading';
import { Link } from 'react-router-dom';




class Header extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      user: '',
    }
  }

  componentDidMount() {
    getUser().then((request) => this.setState({ user: request.name }));
  }

  render() {
    const { user } = this.state;

    return (
      <header data-testid="header-component">
        <div>
          {
            (user.length
              ? (
                <div>
                  <p data-testid="header-user-name"> Welcome, {user}</p>
                </div>
              )
              : <Loading />
            )
          }
        </div>
        <div>
          <nav>
            <Link to="/search" data-testid="link-to-search">Pesquisa</Link>
            <Link to="/favorites" data-testid="link-to-favorites">Favoritos</Link>
            <Link to="/profile" data-testid="link-to-profile">Perfil</Link>
          </nav>
        </div>

      </header>
    )
  }
}

export default Header;