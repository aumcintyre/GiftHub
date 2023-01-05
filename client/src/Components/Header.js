// import TitleImg from "./images/GiftHubTitle.png"
import { Container, Nav, Navbar, Dropdown, DropdownButton } from 'react-bootstrap/';
import React from 'react';
import Auth from '../utils/auth';
// import context from 'react-bootstrap/esm/AccordionContext';
// import image from './path'

function Header({ currentPage, handlePageChange }) {
  return (
    <>
      {/* <div className="nav-bar custom-nav">
        <Navbar>
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
                <><li className='nav-link'><a href='#signup' onClick={() => handlePageChange('signUp')}><button className={currentPage === 'signUp' ? 'btn btn-light' : 'btn btn-secondary'}>Sign Up</button></a></li></>
              )}

              <li className='nav-link'><a href='#createexchange' onClick={() => handlePageChange('createExchange')}><button className={currentPage === 'createExchange' ? 'btn btn-light' : 'btn btn-secondary'}>Create Exchange</button></a></li>

              <li className='nav-link'><a href='#joinexchange' onClick={() => handlePageChange('joinExchange')}><button className={currentPage === 'joinExchange' ? 'btn btn-light' : 'btn btn-secondary'}>Join Exchange</button></a></li>

              <li className='nav-link'><a href='#profile' onClick={() => handlePageChange('profilepage')}><button className={currentPage === 'profilepage' ? 'btn btn-light' : 'btn btn-secondary'}>Profile</button></a></li>

              <li className='nav-link'><a href='#exchange' onClick={() => handlePageChange('exchange')}><button className={currentPage === 'exchange' ? 'btn btn-light' : 'btn btn-secondary'}>Exchange</button></a></li>
              {Auth.loggedIn() ? (
                <><li className='nav-link'><a href='#logout' onClick={() => Auth.logout()}><button className="btn btn-secondary">Logout</button></a></li>
                </>
              ) : (
                <></>
              )}
            </ul>
          </Container>
        </Navbar>

      </div> */}



<div className="custom-nav">
  {/* <img src={process.env.PUBLIC_URL + "./images/GiftHubTitle.png"} /> */}
  {/* <img src={TitleImg} /> */}
  {/* <img className='myPic' src={require("./images/GiftHubTitle.png")} /> */}
        <DropdownButton className='nav-dropdown' title='Menu' variant='success'>
          <Container>
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