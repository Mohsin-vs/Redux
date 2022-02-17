import React, { useState } from 'react'
import { Container, Form, Nav, Navbar } from 'react-bootstrap'
import { BiSearchAlt } from "react-icons/bi"
import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
import { fetchAsyncMovies } from '../../features/movies/movieSlice'
function Header() {
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const handleSubmit = (e) => {
        // navigate("/");
        e.preventDefault()
        dispatch(fetchAsyncMovies(name))
    }
    return (<>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/" className='text-warning fw-bolder'>Movies.com</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                <Form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input type="text" class="form-control" onChange={(e) => { setName(e.target.value) }} />
                        <span className="input-group-text"><BiSearchAlt /></span>
                    </div>
                </Form>
            </Container>
        </Navbar>
    </>
    )
}

export default Header