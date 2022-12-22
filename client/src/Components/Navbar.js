
import { Container , Nav , Navbar } from 'react-bootstrap/';

function navBar() {
  return (
    <>
    <div className = "nav-bar">
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