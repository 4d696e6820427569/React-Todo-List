import React, { useContext } from 'react'

import CreatePost from '../main/CreateTodo'
import UserPanel from '../user/UserPanel'
import Header from '../Header'
import ChangeTheme from '../ChangeTheme'

import { Link } from 'react-navi'

import { Navbar, Nav, Container } from 'react-bootstrap'

import { ThemeContext, StateContext } from '../Contexts'

export default function HeaderBar ({setTheme }) {
    const theme = useContext(ThemeContext)
    const {state} = useContext(StateContext)
    const {user} = state;

    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/"><Header text="Todo List" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {user.username && <Nav.Link><Link href="/todo/create">Create New Todo</Link></Nav.Link>}
            </Nav>
            <React.Suspense fallback={"Loading..."}>
              <UserPanel />
            </React.Suspense>
          </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}