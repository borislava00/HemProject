import styles from './LoginPage.module.scss'
import { Container, Paper } from '@mui/material'
import Login from './Login.jsx'

export default function LoginPage() {
  return (
    <div className={styles.wrapper}>
      <Container maxWidth="xs">
        <Paper elevation={24}>
          <Login />
        </Paper>
      </Container>
    </div>
  )
}
