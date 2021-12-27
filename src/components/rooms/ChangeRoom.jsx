import styles from './AddRoom.module.scss';
import Modal from '../modal/Modal';
import dataDevices from '../../../public/data/devices.json';
import dataRooms from '../../../public/data/rooms.json';
import SceneComposer from '../scenes/SceneComposer';
import Grid from '@mui/material/Grid'
import Card from '../card/Card';

export default function AddRoom({open, handleClose, rooms = [...dataRooms.rooms], onSubmit}){
    console.log(rooms);
    const content = 
    <div>
        <Grid container spacing={2}>
          {
              rooms.map(room => {
                  return(
                      <Grid item>
                          <Card iconUrl={"/images/bed.svg"} outlined={false} onClick={() =>{console.log("room")}} title={room.name}/>
                      </Grid>
                  )
              })
          }
        </Grid>
    </div>

    return(
        <Modal open={open} title="ADD ROOM" buttonText={"ADD NEW ROOM"} handleSubmit={onSubmit} handleClose={handleClose} children={content} buttonProps={{"backgroundColor" : "#e150a6", "color" : "white"}}/>
    )
}