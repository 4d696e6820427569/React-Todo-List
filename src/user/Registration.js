import React, {useState} from "react";
import {useContext, useEffect} from 'react/cjs/react.development';
import {useResource} from 'react-request-hook';
import { StateContext} from '../Contexts';

export default function Registration() {

  const {dispatch} = useContext(StateContext);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordRepeat: ""
  });

  const [user, register] = useResource((username, password) => ({
    url: '/users',
    method: 'post',
    data: {username, password}
  }));

  useEffect((user, dispatch) => {
    if (user && user.data) {
      dispatch({type: 'REGISTER', username: user.data.username});
    }
  }, [user]);

  return (
    <form onSubmit={e => {e.preventDefault(); register(formData.username, formData.password)}}>
      <label htmlFor="registration-username">Username: </label>
      <input type="text" name="registration-username" id="registration-username" value={formData.username}
    onChange={e => setFormData({...formData, username: e.target.value})}/>

      <label htmlFor="registration-password">Password: </label>
      <input type="password" name="registration-password" id="registration-password"
    onChange={e => setFormData({...formData, password: e.target.value})}/>

      <label htmlFor="registration-repeat-password">Repeat password: </label>
      <input type="password" name="registration-repeat-password" id="registration-repeat-password"
    onChange={e => setFormData({...formData, passwordRepeat: e.target.value})}/>
      <input type="submit" value="Register"
    disabled={formData.username.length === 0 || formData.password.length === 0 || formData.password !== formData.passwordRepeat}/>
    </form>
  );
}
