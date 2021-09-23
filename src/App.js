import Login from "./user/Login"; 
import Registration from "./user/Registration";

function App() {
  let logIn = false;
  if (!logIn) {
    return (<Registration/>)
  }
  return (
    <Login />
  );
}

export default App;
