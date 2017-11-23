import React from 'react';
import { Link } from 'react-router-dom';
import Encyclopedia from '../encyclopedia'
import { Navbar, Nav } from 'react-bootstrap'



class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <h1> Hello from the home component</h1>
        // http://iness.ucoz.net/_ph/14/470178191.jpg
        <div className='overlay'>
          <Navbar collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                {/* <a href='https://github.com/GavinThomas1192/motoMechanic'>About</a> */}
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>

                <Link to='/encyclopedia'>Encyclopedia</Link>


                <Link to='/'>Learning</Link>


                <Link to='/bikes'>Maintenance</Link>

              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <section>
            <h1>motoMechanic</h1>
            <hr className='half-rule' />
            <h3 className='sub-heading'>A Motorcycle Resource</h3>
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
