import { Container, Paper } from '@mui/material'
import Login from '../../src/components/login/Login'
import styles from './LoginPage.module.scss'

export default function index() {
  return (
    <div className={styles.wrapper}>
      <Paper elevation={24}>
      <Container maxWidth="xs" disableGutters>
        <Login />
      </Container>
      </Paper>

    </div>
  )
}
