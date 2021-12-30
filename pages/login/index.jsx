import styles from './LoginPage.module.scss';
import { Container, Paper } from '@mui/material';
import Login from '../../src/components/login/Login';
import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function loginUser() {

    await fetch('https://hem-api.herokuapp.com/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'email': email,
        'password': password,
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        localStorage.setItem('accessToken', data['accessToken']);
        router.push('/');
      })
      .catch(error => {
        console.log('Error:', error);
      })
  }

  return (
    <div className={styles.wrapper}>
      <Container maxWidth='xs'>
        <Paper elevation={24}>
          <Login 
            setEmail={setEmail}
            setPassword={setPassword}
            onSubmit={loginUser}
          />
        </Paper>
      </Container>
    </div>
  )
}
