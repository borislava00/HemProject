import Time from "../src/components/time/Time";
import User from "../src/components/user/User";
import Weather from "../src/components/weather/Weather";
import Header from "../src/components/header/Header";
import Navigation from "../src/components/navigation/Navigation";
import Thermostat from "../src/components/thermostat/Thermostat";
import Scenes from "../src/components/scenes/Scenes";
import Cameras from "../src/components/cameras/Cameras";
import Energy from "../src/components/energy/Energy";

export default function Index() {
  const data = [
    { temperature: 25, hour: 12 },
    { temperature: 13, hour: 13 },
    { temperature: 14, hour: 14 },
    { temperature: 15, hour: 15 },
    { temperature: 15, hour: 16 },
    { temperature: 16, hour: 17 },
  ]
  const cameras = [
    {videoUrl : "../videos/balcony.mp4"},
    {videoUrl : "../videos/bathroom.mp4"},
    {videoUrl : "../videos/front-door.mp4"},
    {videoUrl : "../videos/living room 2.mp4"},
    {videoUrl : "../videos/garden.mp4"},
    {videoUrl : "../videos/kitchen.mp4"},
  ]
  return (
    <>
      {/* <Header left={<User avatar="../images/avatar.png" name="Jonh Doe" headingSize="h3" />} right={<><Weather degrees={22} type="cloudy" /> <Time /></>} />
      <Navigation />
     {/* <Thermostat data={data} /> */}
      {/* <Scenes cards={[
        { iconUrl: '../images/alarm-clock.svg', outlined: false },
        { iconUrl: '../images/alarm-clock.svg', outlined: false },
        { iconUrl: '../images/alarm-clock.svg', outlined: false }
      ]} />
      <Cameras cameras={cameras} hasButton={true} /> */}
      <Energy data={data}/>
    </>
  )
}
