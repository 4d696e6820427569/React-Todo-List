import React from "react";

export default function Registration() {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <label htmlFor="registration-username">Username: </label>
      <input type="text" name="registration-username" id="registration-username"/>
      <label htmlFor="registration-password">Password: </label>
      <input type="password" name="registration-password" id="registration-password"/>
      <label htmlFor="registration-repeat-password">Repeat password: </label>
      <input type="submit" value="Register"/>
    </form>
  );
}