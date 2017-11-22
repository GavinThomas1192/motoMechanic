import React from 'react';
import { Link } from 'react-router-dom';


class Home extends React.Component {
  render() {
    return (
      <div className='home'>
      // http://iness.ucoz.net/_ph/14/470178191.jpg
        <div className='overlay'>
          <Navbar collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href='https://github.com/GavinThomas1192/motoMechanic'>About</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <li>
                  <Link to='/encyclopedia'>Encyclopedia</Link>
                </li>
                <li>
                  <Link to='/'>Learning</Link>
                </li>
                <li>
                  <Link to='/'>Maintenance</Link>
                </li>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <section>
            <h1>motoMechanic</h1>
            <hr className='half-rule'/>
            <h3 className='sub-heading'>A Motorcycle Resource</h3>
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
