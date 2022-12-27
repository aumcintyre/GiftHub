
import { Container, Nav, Navbar } from 'react-bootstrap/';

function navBar() {
  return (
    <>
      <div className="nav-bar">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">GiftHub</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Account</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

      </div>
    </>
  );
}

export default navBar;

// function Header({ currentPage, handlePageChange }) {
//   return (
//       <>
//           <header>
//               <ul id='nav' className='nav  header-box'>
//                   <li className='nav-link'><a href='#home' onClick={() => handlePageChange('Home')} ><button className={currentPage === 'Home' ? 'btn btn-light' : 'btn btn-secondary'}>Home</button></a></li>
//                   <li className='nav-link'><a href='#about' onClick={() => handlePageChange('About')}><button className={currentPage === 'About' ? 'btn btn-light' : 'btn btn-secondary'}>About Me</button></a></li>
//                   <li className='nav-link'><a href='#projects' onClick={() => handlePageChange('Projects')}><button className={currentPage === 'Projects' ? 'btn btn-light' : 'btn btn-secondary'}>Projects</button></a></li>
//                   <li className='nav-link'><a href='#contact' onClick={() => handlePageChange('Contact')}><button className={currentPage === 'Contact' ? 'btn btn-light' : 'btn btn-secondary'}>Contact</button></a></li>
//                   <li className='nav-link'><a href='#resume' onClick={() => handlePageChange('Resume')}><button className={currentPage === 'Resume' ? 'btn btn-light' : 'btn btn-secondary'}>Resume</button></a></li>
//               </ul>
//           </header>
//       </>
//   );
// }

// export default Header;
