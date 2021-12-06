import { Navbar, NavDropdown,  } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

function Header(){
    let user = JSON.parse(localStorage.getItem("user-info")) 
    console.warn(user);
    const navigate = useNavigate()
    function logOut(){
        localStorage.clear()
        navigate("/register")
    }
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">e-Commerce</Navbar.Brand>
                    <Nav className="me-auto navbar-wrapper">
                        {
                            localStorage.getItem("user-info") ? (
                                <>
                                    <Link to="/add">Add Products</Link> 
                                    <Link to="/update">Update Products</Link>
                                </>
                            ) : (
                                <>
                                    <Link to="/login">Login</Link>
                                    <Link to="/register">Register</Link>
                                </>
                            )
                        }
                    </Nav>
                    {localStorage.getItem("user-info") ? (
                    <Nav>
                        <NavDropdown title={user && user.name}>
                            <NavDropdown.ItemText onClick={logOut}>Logout</NavDropdown.ItemText>
                        </NavDropdown>
                        {/* Versi sekarang tidak bisa menggunakan function dalam toggle, 
                        makanya tinggal buat keluar bukan keluar() */}
                    </Nav>
                    ) : null }
                </Container>
            </Navbar>
        </div>
    )
}

export default Header