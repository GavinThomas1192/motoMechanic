import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'


class Encyclopedia extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello from the encyclopedia</h1>

        <Navbar collapseOnSelect>
          <Navbar.Header>

            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>

              <Link to='/encyclopedia'>Encyclopedia</Link>


              <Link to='/encyclopedia/race'>Race</Link>


              <Link to='/encyclopedia/commute'>Commute</Link>


              <Link to='/encyclopedia/naked'>Naked</Link>


              <Link to='/encyclopedia/'>Cruiser</Link>


              <Link to='/encyclopedia/'>Standard</Link>


              <Link to='/encyclopedia/'>Tourer</Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Encyclopedia;
