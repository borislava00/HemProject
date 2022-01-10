import styles from './LoginPage.module.scss';
import { Container, Paper } from '@mui/material';
import Login from '../../src/components/login/Login';
import { useContext, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import { AppContext } from '../../src/components/common/AppProvider';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [refresh] = useContext(AppContext);

  async function loginUser() {

    const response = await fetch('https://hem-api.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'email': email,
        'password': password,
      }),
    })
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('accessToken', data['accessToken']);
        refresh()
        router.push('/');
        refresh()
      } else {
        alert(`The email ${email} is not registered!`);
        router.push('/register');
      }
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
