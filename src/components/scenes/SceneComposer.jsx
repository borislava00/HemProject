import { Grid, Typography } from '@mui/material';
import styles from './SceneComposer.module.scss';
import Scenes from './Scenes';
import { useMemo, useState } from 'react';

export default function SceneComposer({ devices = [], rooms = [], selected, onScene }) {
  const [status, setStatus] = useState('off');

  let cards = [];
  let id = 0;
  devices.map(dvc => {
    cards.push(
      {
        ...dvc,
        title: dvc.name,
        state: 'on',
        id: id,
      },
      {
        ...dvc,
        title: dvc.name,
        state: 'off',
        id: id + 1,
      }
    );
    id += 2;
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
                <Scenes cards={groupedDevices[room.id]} selected={selected?.roomId == room.id && selected} onScene={onScene} />
              </Grid>
            )
          }
        })}
      </Grid>
    </div>
  );
}
