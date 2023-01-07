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
          <img src={TitleImg} />
        </div>
        {/* <img className='myPic' src={require("./images/GiftHubTitle.png")} /> */}
        <div className='nav-dropdown'>
          <DropdownButton title='Menu' variant='success' size='lg'>
            <Container >
              <div className={currentPage === 'Home' ? 'nav-active' : 'nav-inactive'}>
                <Dropdown.Item ><a href='#home' onClick={() => handlePageChange('Home')} >Home</a></Dropdown.Item>
              </div>
              {Auth.loggedIn() ? (
                <>
                </>
              ) : (
                <div className={currentPage === 'Login' ? 'nav-active' : 'nav-inactive'}>
                  <Dropdown.Item><a href='#login' onClick={() => handlePageChange('Login')}>Login</a></Dropdown.Item>
                </div>
              )}

              {Auth.loggedIn() ? (
                <>
                </>
              ) : (
                <>
                  <div className={currentPage === 'signUp' ? 'nav-active' : 'nav-inactive'}>
                    <Dropdown.Item ><a href='#signup' onClick={() => handlePageChange('signUp')}>Sign Up</a></Dropdown.Item>
                  </div>
                </>
              )}

              <div className={currentPage === 'createExchange' ? 'nav-active' : 'nav-inactive'}>
                <Dropdown.Item ><a href='#createexchange' onClick={() => handlePageChange('createExchange')}>Create Exchange</a></Dropdown.Item>
              </div>

              <div className={currentPage === 'joinExchange' ? 'nav-active' : 'nav-inactive'}>
                <Dropdown.Item ><a href='#joinexchange' onClick={() => handlePageChange('joinExchange')}>Join Exchange</a></Dropdown.Item>
              </div>

              <div className={currentPage === 'profilepage' ? 'nav-active' : 'nav-inactive'}>
                <Dropdown.Item ><a href='#profile' onClick={() => handlePageChange('profilepage')}>Profile</a></Dropdown.Item>
              </div>
              <Dropdown.Item className={currentPage === 'exchange' ? 'nav-active' : 'nav-inactive'}><a href='#exchange' onClick={() => handlePageChange('exchange')}>Exchange</a></Dropdown.Item>
              {Auth.loggedIn() ? (
                <>
                  <div>
                    <Dropdown.Item className='nav-inactive'><a href='#logout' onClick={() => Auth.logout()}>Logout</a></Dropdown.Item>
                  </div>
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