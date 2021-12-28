import styles from './Register.module.scss';
import { TextField, Button, InputAdornment, Grid } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

export default function Register({ setEmail, setPassword, setRetype, onSubmit }) {

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleRetypeChange(e) {
    setRetype(e.target.value);
  }

  return (
    <div className={styles['register-form']}>
      <Grid container rowSpacing={1} justifyContent='center'>
        <Grid item xs={10}>
          <TextField
            className={styles.input}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <EmailIcon className={styles.icon} />
                </InputAdornment>
              ),
            }}
            required
            fullWidth
            variant='outlined'
            placeholder='Email'
            type='email'
            onChange={handleEmailChange}
          />
        </Grid>
        <Grid item xs={10}>
          <TextField
            className={styles.input}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <LockIcon className={styles.icon} />
                </InputAdornment>
              ),
            }}
            required
            fullWidth
            variant='outlined'
            placeholder='Password'
            type='password'
            onChange={handlePasswordChange}
          />
        </Grid>
        <Grid item xs={10}>
          <TextField
            className={styles.input}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <LockIcon className={styles.icon} />
                </InputAdornment>
              ),
            }}
            required
            fullWidth
            variant='outlined'
            placeholder='Retype Password'
            type='password'
            onChange={handleRetypeChange}
          />
        </Grid>
        <Grid item xs={10}>
          <Button
            fullWidth
            variant="contained"
            className={styles.button}
            onClick={onSubmit}>
            Register
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}
