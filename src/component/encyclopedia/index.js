import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';


class EncycloNavbar extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Hello from the encyclopedia</h1>

          <Navbar collapseOnSelect>
            <Navbar.Header>

              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <li>
                  <Link to='/encyclopedia'>Encyclopedia</Link>
                </li>
                <li>
                  <Link to='/encyclopedia/race'>Race</Link>
                </li>
                <li>
                  <Link to='/encyclopedia/commute'>Commute</Link>
                </li>
                <li>
                  <Link to='/encyclopedia/naked'>Naked</Link>
                </li>
                <li>
                  <Link to='/encyclopedia/'>Cruiser</Link>
                </li>
                <li>
                  <Link to='/encyclopedia/'>Standard</Link>
                </li>
                <li>
                  <Link to='/encyclopedia/'>Tourer</Link>
                </li>
              </Nav>
              <h1>Hello from the encyclopedia</h1>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </BrowserRouter >
    );
  }
}

export default EncycloNavbar;
