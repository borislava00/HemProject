import styles from './Scenes.module.scss'
import Card from '../card/Card'
import { Grid } from '@mui/material'

export default function Scenes({ cards = [] }) {
  return (
    <div className={styles['scenes-container']}>
      <Grid container spacing={2}>
        {cards.map((card, index) => {
          return (
            <Grid xs={12} sm={6} lg={3} item key={index}>
              <Card iconUrl={card?.iconUrl} outlined={card?.outlined} onClick={card?.onClick} />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}
