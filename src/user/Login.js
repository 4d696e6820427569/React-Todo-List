import React, {useState} from "react";
import {useContext, useEffect} from 'react/cjs/react.development';
import { StateContext } from "../Contexts";
import {useResource} from 'react-request-hook';

// export default function Login({user}) {
//   return (
//     <form onSubmit={e => e.preventDefault()}>
//       <label htmlFor="login-username">Username: </label>
//       <input type="text" name="login-username" id="login-username"/>
//       <label htmlFor="login-password">Password: </label>
//       <input type="password" name="login-password" id="login-password"/>
//       <input type="submit" value="Login"/>
//     </form>
//   );
// }

export default function Login() {

  const {dispatch} = useContext(StateContext)

  const [username, setUsername] = useState('');

  const [loginFailed, setLoginFailed] = useState(false);
  const [password, setPassword] = useState('');

  const [user, login] = useResource((username, password) => ({
    url:`/login/${encodeURI(username)}/${encodeURI(password)}}`,
    method: 'get'
  }));

  useEffect(() => {
    if (user && user.data) {
      if (user.data.length > 0) {
        setLoginFailed(false)
        dispatch({type: 'LOGIN', username: user.data[0].username})
      } else {
        setLoginFailed(true);
      }
    }
  })

  function handleUsername(evt) { setUsername(evt.target.value); }
  function handlePassword(evt) { setPassword(evt.target.value);}

  return (
    <form onSubmit={e => {e.preventDefault(); login(username, password)}} >
    <label htmlFor="login-username">Username: </label>
    <input type="text" name="login-username" id="login-username" value={username} onChange={handleUsername}/>
    <label htmlFor="login-password">Password: </label>
    <input type="password" name="login-password" id="login-password" onChange={handlePassword} />
    <input type="submit" value="Login"/>
    {loginFailed && <span style={{color: 'red'}}>Invalid username or password</span>}
    </form>
  );
}
