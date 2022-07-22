import React from 'react';
import {Navbar,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar variant="light" bg="light" class="nav_bar" >
                <Container>
                    <Navbar.Brand href="#home" ><Link to="/"><img class="page_header"  src='../assect/logo.png'/></Link></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text class="careerTitle">
                            <a href="#">... Career Opportunity</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header