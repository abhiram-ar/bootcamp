import CakeView from "./features/cake/CakeView";
import IcecreamView from "./features/icecream/IcecreamView";
import UserView from "./features/users/UserView";

export default function App() {
    return <div style={{width:"40em" , marginLeft: "40em", textAlign:"center" }} >
      <CakeView/>
      <IcecreamView/>
      <UserView/>
    </div>;
}
