import styles from './AddScene.module.scss';
import Modal from '../modal/Modal';
import SceneComposer from './SceneComposer';
import dataDevices from '../../../public/data/devices.json';
import dataRooms from '../../../public/data/rooms.json';
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'

export default function AddScene({open, handleClose, devices = [...dataDevices.devices], rooms = [...dataRooms.rooms], onScene, onSubmit}){

    const content = 
    <div>
        <TextField
          id="input"
          label="Scene Name"
          fullWidth
          margin="normal"
        />
        <SceneComposer devices={devices} rooms={rooms} onScene={onScene}/>
    </div>

    return(
        <Modal open={open} title="ADD SCENE" buttonText={"ADD NEW SCENE"} handleSubmit={onSubmit} handleClose={handleClose} children={content}/>
    )
}