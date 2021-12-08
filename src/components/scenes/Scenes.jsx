import styles from './Scenes.module.scss'
import Card from '../card/Card'
import { Grid } from '@mui/material'

export default function Scenes({ cards = [] }) {
  return (
    <div className={styles['scenes-container']}>
      <Grid container spacing={2}>
        {cards.map((card, index) => {
          return (
            <Grid xs={12} sm={6} lg={4} item key={index}>
              <Card {...card} />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}
