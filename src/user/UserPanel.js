import React, {useState} from 'react'
import Login from "./Login";
import Logout from "./Logout";
import Registration from "./Registration";

export default function UserPanel({user, dispatchUser}) {
  if (user) {
    return <Logout user={user} dispatchUser={dispatchUser}/>
  } else {
    return (
      <>
        <Login dispatchUser={dispatchUser} />,
        <Registration dispatchUser={dispatchUser}/>
      </>
    )
  }
}
