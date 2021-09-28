import Login from "./Login";
import Logout from "./Logout";
import Registration from "./Registration";

export default function UserPanel() {
  const user = 'Minh';
  if (user) {
    return <Logout user={user}/>
  } else {
    return (
        <Login />,
        <Registration />
    )
  }  
}