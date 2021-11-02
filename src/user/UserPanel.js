import React, {useContext, useState} from 'react'

import Login from "./Login";
import Logout from "./Logout";
import Registration from "./Registration";

import {StateContext} from '../Contexts';

export default function UserPanel() {

  const Logout = React.lazy(() => import('./Logout'))
  const {state} = useContext(StateContext);

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  if (state.test) {
    return <Logout />
  } else {
    return (
      <>
        <Login />,
        <Registration />
      </>
    )
  }
}
