import React, {useState} from "react";

export default function Registration({dispatchUser}) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordRepeat: ""
  });

  return (
    <form onSubmit={e => {e.preventDefault(); dispatchUser({type:"REGISTER", username:formData.username})}}>
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
