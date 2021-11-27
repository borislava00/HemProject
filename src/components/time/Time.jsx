import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import styles from './Time.module.scss'

export default function Time() {
  let date = new Date();
	let [hours, setHours] = useState(date.getHours());
	let [mins, setMins] = useState(date.getMinutes());

	const updateTime = () => {
		date = new Date();
		setHours(date.getHours());
		setMins(date.getMinutes());
	}

	useEffect(() => {
    setInterval(updateTime, 1000);
  }, [])

  return (
    <div className={styles['time-wrapper']}>
      <Typography fontWeight="400" color="#7441F3" variant="h5">Time</Typography>
      <Typography fontWeight="900" variant="h1">{hours}:{mins < 10 ? `0${mins}` : mins}</Typography>
    </div>
  )
}
