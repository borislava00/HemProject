import styles from './AddScene.module.scss';
import Modal from '../modal/Modal';
import SceneComposer from '../scenes/SceneComposer';
import dataDevices from '../../../public/data/devices.json';
import dataRooms from '../../../public/data/rooms.json';
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

export default function AddScene({devices = [...dataDevices.devices], rooms = [...dataRooms.rooms], onScene, onSubmit}){

    const content = 
    <div>
        <TextField
          id="input"
          label="Scene Name"
        />
        <SceneComposer/>
    </div>

    return(
        <Modal open={true} title="ADD SCENE" buttonText={"ADD NEW SCENE"} handleSubmit={onSubmit} handleClose={() => {}} children={content}/>
    )
}