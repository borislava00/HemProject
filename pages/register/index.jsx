import { Container, Paper, Typography } from "@mui/material";
import Register from "../../src/components/register/Register";
import styles from "./RegisterPage.module.scss";
import Link from "../../src/components/link/Link";
import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retype, setRetype] = useState('');

  async function registerUser() {

   const response = await fetch("https://hem-api.herokuapp.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        'email': `${email}`,
        'password': `${password}`,
      }),
    })
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        alert('Registration successful!')
      }
  }

  return (
    <div className={styles.wrapper}>
      <Container maxWidth="xs" className={styles.container}>
        <Paper elevation={24} >
          <Register
            setEmail={setEmail}
            setPassword={setPassword}
            setRetype={setRetype}
            onSubmit={registerUser}
          />
        </Paper>
        <Typography className={styles.text}>
          Already registered? <Link href="/login">Go to login</Link>
        </Typography>
      </Container>
    </div>
  )
}
