import { Grid, Typography } from '@mui/material';
import styles from './SceneComposer.module.scss';
import Scenes from './Scenes';
import { useMemo, useState } from 'react';
import dataDevices from '../../../public/data/devices.json';
import dataRooms from '../../../public/data/rooms.json';

export default function SceneComposer({ devices = [...dataDevices.devices], rooms = [...dataRooms.rooms], selected, onScene }) {
  const [status, setStatus] = useState('off');

  let cards = [];
  devices.map((dvc, index) => {
    cards.push(
      {
        ...dvc,
        state: 'on',
      },
      {
        ...dvc,
        state: 'off',
      }
    );
  });

  const groupBy = useMemo(() => function (objectArray, property) {
    return objectArray.reduce((acc, obj) => {
      let key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, []);
  }, [devices])

  let groupedDevices = groupBy(cards, 'roomId');

  return (
    <div className={styles.wrapper}>
      <Grid container direction="column" spacing={4} className={styles.container}>
        {rooms.map((room, index) => {
          if (groupedDevices[room.id]) {
            return (
              <Grid item key={index}>
                <Typography variant="h4">{room.name}</Typography>
                <Scenes cards={groupedDevices[room.id]} />
              </Grid>
            )
          }
        })}
      </Grid>
    </div>
  );
}
