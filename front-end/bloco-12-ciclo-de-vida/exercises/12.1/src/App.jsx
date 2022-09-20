// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Search from './Search';


class App extends React.Component {
  constructor(props) {
    super(props);


  }

  render() {

    return (
      <BrowserRouter>
        <Route path="/" component={Login, Header}>
          <div data-testid="page-login" />
        </Route>
        <Route path="/search" component={Search}>
          <div data-testid="page-search" />
        </Route>
        <Route path="/album/:id" render={(props) => {
          <div>
            <Album />
            <Header />
          </div>
        }}>
          <div data-testid="page-album" />
        </Route>
        <Route path="/favorites" component={Favorites, Header}>
          <div data-testid="page-favorites" />
        </Route>
        <Route path="/profile" component={Profile, Header}>
          <div data-testid="page-profile" />
        </Route>
        <Route path="/profile/edit" component={ProfileEdit, Header}>
          <div data-testid="page-profile-edit" />
        </Route>
        <Route path="*" component={NotFound, Header}>
          <div data-testid="page-page-not-found" />
        </Route>



      </BrowserRouter>

    );
  }
}

export default App;
