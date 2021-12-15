import styles from './EditScene.module.scss';
import Modal from '../modal/Modal';
import { TextField } from '@mui/material';
import SceneComposer from './SceneComposer';

export default function EditScene({ devices, rooms, selected, onScene, onSubmit, open, handleClose }) {
  const children = 
  <div><TextField id="input" label="Scene Name" margin="normal" fullWidth/>
    <SceneComposer devices={devices} rooms={rooms} selected={selected} onScene={onScene} />
  </div>
  
  return (
    <div>
      <Modal open={open} title="EDIT SCENE" buttonText="SAVE CHANGES" handleSubmit={onSubmit} handleClose={handleClose} children={children}></Modal>
    </div>
  );
}
