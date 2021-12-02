import Example from "../src/components/example/Example";
import Time from "../src/components/time/Time";
import User from "../src/components/user/User";
import Weather from "../src/components/weather/Weather";
import Header from "../src/components/header/Header";
import Navigation from "../src/components/navigation/Navigation";
import Thermostat from "../src/components/thermostat/Thermostat";
import Card from "../src/components/card/Card";

export default function Index() {
  const data = [
    { temperature: 25, hour: 12 },
    { temperature: 13, hour: 13 },
    { temperature: 14, hour: 14 },
    { temperature: 15, hour: 15 },
    { temperature: 15, hour: 16 },
    { temperature: 16, hour: 17 },
  ]
  return(
    <>
      <Header left={<User avatar="../images/avatar.png" name="Jonh Doe" headingSize="h3" />} right={<><Weather degrees={22} type="cloudy" /> <Time /></>}/>
      <Card iconUrl={"../images/alarm-clock.svg"} outlined={false} onClick={() => {}}/>
      <Navigation/>
      <Thermostat data={data}/>
    </>
  )
}
