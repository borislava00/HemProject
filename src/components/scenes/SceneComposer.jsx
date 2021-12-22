import { Grid, Typography } from '@mui/material';
import styles from './SceneComposer.module.scss';
import Scenes from './Scenes';
import { useMemo, useState } from 'react';

export default function SceneComposer({ devices = [], rooms = [], selected, onScene }) {
  const [status, setStatus] = useState('off');

  const groupBy = useMemo(() => {
    let id = 1;
    const groupedDevices = rooms.map(room => {
      const sortedCards = devices.filter(device => device?.roomId === room?.id);
      const cards = [];
      sortedCards.forEach(device => {
        cards.push(
          {
            ...device,
            "title": device.name,
            "id": id++,
            "status": "on"
          },
          {
            ...device,
            "title": device.name,
            "id": id++,
            "status": "off"
          },
        )
      })

      console.log(cards);
      return {
        "id": room.id,
        "name": room.name,
        "cards": cards,
      }
    });

    return groupedDevices
  }, [devices, rooms]);


  return (
    <div className={styles.wrapper}>
      <Grid container direction="column" spacing={4} className={styles.container}>
        {groupBy.map((item, index) => {
          return (
            <Grid item key={index}>
              <Typography variant="h4">{item.name}</Typography>
              <Scenes cards={item} selected={selected} onScene={onScene} />
            </Grid>
          )
        })}
      </Grid>
    </div>
  );
}
