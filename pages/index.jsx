import Example from "../src/components/example/Example";
import Time from "../src/components/time/Time";
import User from "../src/components/user/User";
import Weather from "../src/components/weather/Weather";
import Header from "../src/components/header/Header";

export default function Index() {
  return(
    <>
      <Header left={<User avatar="../images/avatar.png" name="Jonh Doe" />} right={<><Weather degrees={22} type="cloudy" /> <Time /></>}/>
    </>
  )
}