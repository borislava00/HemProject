import styles from './Rooms.module.scss'
import Card from '../card/Card'
import { Grid } from '@mui/material'

export default function Rooms({ rooms = [] }) {
  return (
    <div className={styles['rooms-wrapper']}>
      <Grid container spacing={2}>
        {rooms.map((room, index) => {
          return (
            <Grid xs={12} sm={6} lg={2} item key={index}>
              <Card {...room}/>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}
