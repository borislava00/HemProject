import styles from './Register.module.scss';
import { TextField, Button, InputAdornment, Grid } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

export default function Register() {
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
          />
        </Grid>
        <Grid item xs={10}>
          <Button fullWidth variant="contained" className={styles.button}>
            Register
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}
