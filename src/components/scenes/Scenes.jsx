import styles from './Scenes.module.scss'
import Card from '../card/Card'
import { Grid } from '@mui/material'
import { useState } from 'react'

export default function Scenes({ cards = [], onScene, selected }) {
  return (
    <div className={styles['scenes-container']}>
      <Grid container spacing={2}>
        {cards.cards.map((card, index) => {
          return (
            <Grid xs={12} sm={6} lg={4} key={index} item>
              <Card
                {...card}
                onClick={onScene(card)}
                outlined={selected?.id == card.id}
              />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}
