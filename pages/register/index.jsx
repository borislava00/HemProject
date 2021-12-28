import { Container, Paper, Typography } from "@mui/material";
import Register from "../../src/components/register/Register";
import styles from "./RegisterPage.module.scss";
import Link from '../../src/components/link/Link';

export default function RegisterPage() {
  return (
    <div className={styles.wrapper}>
      <Container maxWidth="xs" className={styles.container}>
        <Paper elevation={24} >
          <Register />
        </Paper>
        <Typography className={styles.text}>
          Already registered? <Link href="/login">Go to login</Link>
        </Typography>
      </Container>
    </div>
  )
}
