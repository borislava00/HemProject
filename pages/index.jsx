import Time from "../src/components/time/Time";
import User from "../src/components/user/User";
import Weather from "../src/components/weather/Weather";
import Header from "../src/components/header/Header";
import Navigation from "../src/components/navigation/Navigation";
import Thermostat from "../src/components/thermostat/Thermostat";
import Scenes from "../src/components/scenes/Scenes";
import Rooms from "../src/components/rooms/Rooms";

export default function Index() {
  const data = [
    { temperature: 25, hour: 12 },
    { temperature: 13, hour: 13 },
    { temperature: 14, hour: 14 },
    { temperature: 15, hour: 15 },
    { temperature: 15, hour: 16 },
    { temperature: 16, hour: 17 },
  ]
  return (
    <>
      <Header left={<User avatar="../images/avatar.png" name="Jonh Doe" headingSize="h3" />} right={<><Weather degrees={22} type="cloudy" /> <Time /></>} />
      <Navigation />
      <Thermostat data={data} />
      {/* <Scenes cards={[
        { iconUrl: '../images/alarm-clock.svg', outlined: false },
        { iconUrl: '../images/alarm-clock.svg', outlined: false },
        { iconUrl: '../images/alarm-clock.svg', outlined: false },
      ]} /> */}
      <Rooms rooms={[
        { iconUrl: '../images/alarm-clock.svg', outlined: false, title: 'Bedroom' },
        { iconUrl: '../images/alarm-clock.svg', outlined: false, title: 'Bedroom' },
        { iconUrl: '../images/alarm-clock.svg', outlined: false, title: 'Bedroom' }
      ]}/>
    </>
  )
}
