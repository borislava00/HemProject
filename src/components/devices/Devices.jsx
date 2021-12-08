import styles from './Devices.module.scss'
import Card from '../card/Card'
import { Grid } from '@mui/material'

export default function Devices({ devices = [] }) {
  return (
    <div className={styles['devices-wrapper']}>
      <Grid container spacing={2}>
        {devices.map((device, index) => {
          return (
            <Grid xs={12} sm={6} lg={4} item key={index}>
              <Card {...device} variant={(device?.title).toLowerCase()} />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}
