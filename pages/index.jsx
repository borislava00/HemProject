import { Container , Grid , Typography } from "@mui/material";
import Navigation from "../src/components/navigation/Navigation";
import Header from "../src/components/header/Header";
import Weather from "../src/components/weather/Weather";
import Time from "../src/components/time/Time";
import User from "../src/components/user/User";
import Thermostat from "../src/components/thermostat/Thermostat";
import Scenes from "../src/components/scenes/Scenes";
import Cameras from "../src/components/cameras/Cameras";
import Rooms from "../src/components/rooms/Rooms";
import Energy from "../src/components/energy/Energy";
import Modal from "../src/components/modal/Modal";

import styles from "./Dashboard.module.scss";

export default function Dashboard() {
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

  const cards=[
    { iconUrl: '../images/alarm-clock.svg', outlined: false },
    { iconUrl: '../images/shower.svg', outlined: false },
    { iconUrl: '../images/morning.svg', outlined: false },
    { iconUrl: '../images/rock.svg', outlined: false },
    { iconUrl: '../images/tea-cup.svg', outlined: false },
    { iconUrl: '../images/plus.svg', outlined: true },
  ]

  const rooms=[
    { iconUrl: '../images/alarm-clock.svg', outlined: false, title: 'Bedroom' },
    { iconUrl: '../images/alarm-clock.svg', outlined: false, title: 'Bedroom' },
    { iconUrl: '../images/alarm-clock.svg', outlined: false, title: 'Bedroom' }
  ]

  return (
    <Container className={styles.container}>
      <Grid container className={styles['grid-container']}>
        <Grid item>
          <Navigation />
        </Grid> 
        <Grid item className={styles['grid-item']}>
          <Header left={<User avatar="../images/avatar.png" name="Jonh Doe" headingSize="h3" hasWelcome={true} />} right={<><Weather degrees={22} type="cloudy" /> <Time /></>} />
        </Grid>
        <Grid container direction="row" justifyContent="space-between">
          <Grid item>
            <Typography variant="h2" color="initial"  paddingLeft="400px">Thermostat</Typography>
            <Thermostat data={data} />
          </Grid>
          <Grid item paddingTop="130px">
            <Scenes cards={cards} />  
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="space-between">
          <Grid item>
            <Cameras cameras={cameras} />
          </Grid>
          <Grid item paddingTop="130px">
            <Energy data={data} /> 
          </Grid>
        </Grid>
        <Grid item paddingLeft="200px"> 
          <Rooms rooms={rooms} />
        </Grid>
      </Grid>
    </Container>
  );
}