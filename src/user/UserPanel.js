import React, {useContext} from 'react'

import Login from "./Login";
import Logout from "./Logout";
import Registration from "./Registration";

import {StateContext} from '../Contexts';

export default function UserPanel() {

  const {state} = useContext(StateContext);

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
