import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from  '@fortawesome/react-fontawesome';
import { faFireAlt, faGamepad, faHome, faTag, faThumbsUp } from  '@fortawesome/free-solid-svg-icons';
import { LinkContainer } from 'react-router-bootstrap';


function Menu(props) {
    return (
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <LinkContainer to="/">
                        <Navbar.Brand> Eagle Store</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <LinkContainer to="/"><Navbar.Brand>Início</Navbar.Brand></LinkContainer>
                            <LinkContainer to="/categorias"><Navbar.Brand>Categorias</Navbar.Brand></LinkContainer>
                            <LinkContainer to="/popular"><Navbar.Brand>Populares</Navbar.Brand></LinkContainer>
                            <LinkContainer to="/escolha"><Navbar.Brand>Escolha dos Editores</Navbar.Brand></LinkContainer>
                            <LinkContainer to="/jogos"><Navbar.Brand>Jogos</Navbar.Brand></LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
    );
}

export default Menu;

