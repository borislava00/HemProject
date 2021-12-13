import styles from './EditScene.module.scss';
import Modal from '../modal/Modal';
import { TextField } from '@mui/material';
import SceneComposer from './SceneComposer';
import dataDevices from '../../../public/data/devices.json';
import dataRooms from '../../../public/data/rooms.json';

export default function EditScene({ devices = [...dataDevices.devices], rooms = [...dataRooms.rooms], selected, onScene, onSubmit, open, handleClose }) {
  const children = 
  <div><TextField id="input" label="Scene Name" margin="normal" fullWidth/>
    <SceneComposer devices={devices} rooms={rooms} onScene={onScene} />
  </div>
  
  return (
    <div>
      <Modal open={open} title="EDIT SCENE" buttonText="SAVE CHANGES" handleSubmit={onSubmit} handleClose={handleClose} children={children}></Modal>
    </div>
  );
}
