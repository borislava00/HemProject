import styles from './AddRoom.module.scss';
import Modal from '../modal/Modal';
import TextField from '@mui/material/TextField'

export default function AddRoom({open, handleClose, devices = [...dataDevices.devices], rooms = [...dataRooms.rooms], onScene, onSubmit}){
    const content = 
    <div>
        <TextField
          id="input"
          label="Room Name"
          fullWidth
          margin="normal"
        />
        <SceneComposer devices={devices} rooms={rooms} onScene={onScene}/>
    </div>

    return(
        <Modal open={open} title="ADD ROOM" buttonText={"ADD NEW ROOM"} handleSubmit={onSubmit} handleClose={handleClose} children={content}/>
    )
}