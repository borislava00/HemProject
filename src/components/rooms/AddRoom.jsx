import styles from './AddRoom.module.scss';
import Modal from '../modal/Modal';
import dataDevices from '../../../public/data/devices.json';
import dataRooms from '../../../public/data/rooms.json';
import {Dialog , DialogTitle , DialogContent , TextField , Button } from '@mui/material';
import SceneComposer from '../scenes/SceneComposer';

export default function AddRoom({open, handleClose, devices = [...dataDevices.devices], rooms = [...dataRooms.rooms], onScene, onSubmit}){
    const content = 
    <div>
        <TextField
          id="input"
          label="Room Name"
          fullWidth
          margin="normal"
        />
        <SceneComposer devices={devices}  rooms={rooms} onScene={onScene}/>
    </div>

    return(
        <Modal open={open} title="ADD ROOM" buttonText={"ADD NEW ROOM"} handleSubmit={onSubmit} handleClose={handleClose} children={content}/>
    )
}