import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function HeaderComponent() {
    const user = localStorage.getItem('USER_STATE')
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar.Brand href="#">Employee Management Application</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {user==='true' ? <Navbar.Text>
            <a href="/" onClick={() => {
                localStorage.removeItem('USER_STATE');
            }}>Logout</a>
          </Navbar.Text>:<></>}
        </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default HeaderComponent;