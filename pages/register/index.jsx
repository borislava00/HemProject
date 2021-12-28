import { Container, Paper } from "@mui/material";
import Register from "../../src/components/register/Register";
import styles from "./RegisterPage.module.scss";

export default function index() {
  return (
    <div className={styles.wrapper}>
      <Paper elevation={24}>
        <Container maxWidth="xs" disableGutters>
          <Register />
        </Container>
      </Paper>
    </div>
  )
}
