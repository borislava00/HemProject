import { Grid, Typography } from '@mui/material';
import styles from './SceneComposer.module.scss';
import Scenes from '../scenes/Scenes';
import { useMemo, useState } from 'react';
import data from '../../../public/data/devices.json';

export default function SceneComposer({ devices = [...data.devices], rooms = ['Bedroom', 'Living Room', 'Kitchen'], selected, onScene }) {
  const [variant, setVariant] = useState('off');

  const groupBy = useMemo(() => function(objectArray, property) {
    return objectArray.reduce((acc, obj) => {
      let key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }, [devices])

  let groupedDevices = groupBy(devices, 'roomId');

  return (
    <div className={styles.wrapper}>
      <Grid container direction="column" spacing={4} className={styles.container}>
        {rooms.map((room, index) => {
          if (groupedDevices[index + 1]) {
            return (
              <Grid item key={index}>
                <Typography variant="h4">{room}</Typography>
                <Scenes cards={groupedDevices[index + 1]} />
              </Grid>
            )
          }
        })}
      </Grid>
    </div>
  );
}
