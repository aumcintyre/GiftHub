
import { Container, Nav, Navbar } from 'react-bootstrap/';
import React from 'react';
import Auth from '../utils/auth';
// import context from 'react-bootstrap/esm/AccordionContext';

function Header({ currentPage, handlePageChange }) {
  return (
    <>
      <div className="nav-bar">
        <Navbar bg="dark" variant="dark">
          <Container>
            <ul id='nav' className='nav  header-box'>
              <li className='nav-link'><a href='#home' onClick={() => handlePageChange('Home')} ><button className={currentPage === 'Home' ? 'btn btn-light' : 'btn btn-secondary'}>Home</button></a></li>
              {Auth.loggedIn() ? (
                <>
                </>
              ) : (
              <li className='nav-link'><a href='#login' onClick={() => handlePageChange('Login')}><button className={currentPage === 'Login' ? 'btn btn-light' : 'btn btn-secondary'}>Login</button></a></li>
              )}
              {Auth.loggedIn() ? (
                <>
                </>
              ) : (
                <>                  <li className='nav-link'><a href='#signup' onClick={() => handlePageChange('signUp')}><button className={currentPage === 'signUp' ? 'btn btn-light' : 'btn btn-secondary'}>Sign Up</button></a></li></>
              )}
              <li className='nav-link'><a href='#createexchange' onClick={() => handlePageChange('createExchange')}><button className={currentPage === 'createExchange' ? 'btn btn-light' : 'btn btn-secondary'}>Create Exchange</button></a></li>
              <li className='nav-link'><a href='#joinexchange' onClick={() => handlePageChange('joinExchange')}><button className={currentPage === 'joinExchange' ? 'btn btn-light' : 'btn btn-secondary'}>Join Exchange</button></a></li>
              <li className='nav-link'><a href='#profile' onClick={() => handlePageChange('profilepage')}><button className={currentPage === 'profilepage' ? 'btn btn-light' : 'btn btn-secondary'}>Profile</button></a></li>

              {Auth.loggedIn() ? (
                <><li className='nav-link'><a href='#logout' onClick={() => Auth.logout()}><button className="btn btn-secondary">Logout</button></a></li>
                </>
              ) : (
                <></>
              )}
            </ul>
          </Container>
        </Navbar>

      </div>
    </>
  );
}

export default Header;

// {
//   Auth.loggedIn() ? (
//     <>
//       <li className='nav-link'><a href='#signup' onClick={() => handlePageChange('signUp')}><button className={currentPage === 'signUp' ? 'btn btn-light' : 'btn btn-secondary'}>Sign Up</button></a></li>
//     </>
//   ) : (
//   <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
// )
// }