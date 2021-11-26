import styles from './LoginPage.module.scss'
import { Container, Paper } from '@mui/material'
import Login from './Login.jsx'

export default function LoginPage() {
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
