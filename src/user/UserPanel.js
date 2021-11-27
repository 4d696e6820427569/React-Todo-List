import React, {useContext, useState} from 'react'

import Login from "./Login";
import Registration from "./Registration";

import {StateContext} from '../Contexts';
import {Button} from 'react-bootstrap'

export default function UserPanel() {

  const Logout = React.lazy(() => import('./Logout'));
  const {state} = useContext(StateContext);

  const [showLogin, setShowLogin] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);

  if (state.user.username) {
    return <Logout />
  } else {
    return (
        <div className="justify-content-end">
          <Button variant="link" onClick={(e) => setShowLogin(true)}>
            Login
          </Button>
          <Login show={showLogin} handleClose={()=> setShowLogin(false)} />
          <Button variant="link" onClick={(e) => setShowRegistration(true)}>
            Register
          </Button>
          <Registration show={showRegistration} handleClose={() => setShowRegistration(false)} />
        </div>
    )
  }
}
