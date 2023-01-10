import { Container, Nav, Navbar, Dropdown, DropdownButton } from 'react-bootstrap/';
import React from 'react';
import Auth from '../utils/auth';
import TitleImg from "../images/GiftHubTitle.png"

// import context from 'react-bootstrap/esm/AccordionContext';
// import image from './path'

function Header({ currentPage, handlePageChange }) {
  return (
    <>
      <div className="custom-nav">
        {/* <img src={process.env.PUBLIC_URL + "./images/GiftHubTitle.png"} /> */}
        <div className='title-image'>
          <a href='#home' onClick={() => handlePageChange('Home')}>
            <img src={TitleImg} />
          </a>
        </div>
        {/* <img className='myPic' src={require("./images/GiftHubTitle.png")} /> */}
        <div className='nav-dropdown'>
          <DropdownButton title='Menu' variant='success' size='lg'>
            <Container >
              <a href='#home' onClick={() => handlePageChange('Home')} >
                <div className={currentPage === 'Home' ? 'nav-active' : 'nav-inactive'}>
                  <Dropdown.Item >Home</Dropdown.Item>
                </div></a>
              {Auth.loggedIn() ? (
                <>
                </>
              ) : (
                <a href='#login' onClick={() => handlePageChange('Login')}>
                  <div className={currentPage === 'Login' ? 'nav-active' : 'nav-inactive'}>
                    <Dropdown.Item>Login</Dropdown.Item>
                  </div>
                </a>
              )}

              {Auth.loggedIn() ? (
                <>
                </>
              ) : (
                <>
                  <a href='#signup' onClick={() => handlePageChange('signUp')}>
                    <div className={currentPage === 'signUp' ? 'nav-active' : 'nav-inactive'}>
                      <Dropdown.Item >Sign Up</Dropdown.Item>
                    </div>
                  </a>
                </>
              )}
              <a href='#createexchange' onClick={() => handlePageChange('createExchange')}>
                <div className={currentPage === 'createExchange' ? 'nav-active' : 'nav-inactive'}>
                  <Dropdown.Item >Create Exchange</Dropdown.Item>
                </div>
              </a>

              <a href='#joinexchange' onClick={() => handlePageChange('joinExchange')}>
                <div className={currentPage === 'joinExchange' ? 'nav-active' : 'nav-inactive'}>
                  <Dropdown.Item >Join Exchange</Dropdown.Item>
                </div>
              </a>

              <a href='#profile' onClick={() => handlePageChange('profilepage')}>
                <div className={currentPage === 'profilepage' ? 'nav-active' : 'nav-inactive'}>
                  <Dropdown.Item >Profile</Dropdown.Item>
                </div>
              </a>

              <a href='#exchange' onClick={() => handlePageChange('exchange')}>
                <div className={currentPage === 'exchange' ? 'nav-active' : 'nav-inactive'}>
                  <Dropdown.Item >Exchange</Dropdown.Item>
                </div>
              </a>
              {Auth.loggedIn() ? (
                <>
                  <a href='#logout' onClick={() => Auth.logout()}>
                    <div className='nav-inactive'>
                      <Dropdown.Item >Logout</Dropdown.Item>
                    </div>
                  </a>
                </>
              ) : (
                <></>
              )}
            </Container>
          </DropdownButton>
        </div>
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