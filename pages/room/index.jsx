import Navigation from '../../src/components/navigation/Navigation';
import Header from '../../src/components/header/Header';
import Cameras from '../../src/components/cameras/Cameras';
import Devices from '../../src/components/devices/Devices';
import {Container} from '@mui/material';
import {Grid} from '@mui/material';
import {Typography} from '@mui/material';



export default function Index(){
    const devices = [
        {"title" : "Test",
        "iconUrl" : '../images/alarm-clock.svg'},
        {"title" : "OFFLINE",
        "iconUrl" : '../images/alarm-clock.svg'},
        {"title" : "Test",
        "iconUrl" : '../images/alarm-clock.svg'},
        {"title" : "Test",
        "iconUrl" : '../images/alarm-clock.svg'}
    ]
    
    const onlineDevices = devices.filter(device => device.title.toLowerCase() != "offline").length;
    const leftHeader = <Typography variant="h2" color="initial">Living Room</Typography>

    const rightHeader = 
    <Grid container style={{"justify-content": "right"}}>
        <Grid item xs={7}>
            <Typography variant="h6" color="initial">
                Devices
            </Typography>
        </Grid>
        <Grid xs={7}>
            <Typography variant="h2" color="initial">
                {onlineDevices}
            </Typography>
        </Grid>
    </Grid>

    const cameras = [
        {videoUrl : "../videos/balcony.mp4"},
        {videoUrl : "../videos/bathroom.mp4"},
        {videoUrl : "../videos/front-door.mp4"},
        {videoUrl : "../videos/living room 2.mp4"},
        {videoUrl : "../videos/garden.mp4"},
        {videoUrl : "../videos/kitchen.mp4"},
    ]

    return(
        <Container maxWidth="xl">
            <Navigation/>
            <Header left={leftHeader} right={rightHeader}/>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Devices devices={devices}/>
              </Grid>
              <Grid item xs={6}>
                <Cameras cameras={cameras} />
              </Grid>
            </Grid>
        </Container>
    )
}