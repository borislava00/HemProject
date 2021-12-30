import { Button, Grid, InputAdornment, TextField } from '@mui/material';
import styles from './Login.module.scss';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

export default function Login({ setEmail, setPassword, onSubmit }) {
    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    return (
        <div className={styles["login-form"]}>
            <Grid container rowSpacing={1} justifyContent="center">
                <Grid item xs={10}>
                    <TextField
                        fullWidth
                        className={styles.input}
                        type="email"
                        onChange={handleEmailChange}
                        InputProps={{
                            startAdornment:
                                <InputAdornment
                                    position="start"
                                    sx={{ color: 'black' }}><EmailIcon />
                                </InputAdornment>,
                        }} />
                </Grid>
                <Grid item xs={10}>
                    <TextField
                        fullWidth
                        className={styles.input}
                        type="password"
                        onChange={handlePasswordChange}
                        InputProps={{
                            startAdornment:
                                <InputAdornment
                                    position="start"
                                    sx={{ color: 'black' }}><LockIcon />
                                </InputAdornment>,
                        }} />
                </Grid>
                <Grid item xs={10}>
                    <Button
                        fullWidth
                        variant="contained"
                        className={styles.button}
                        onClick={onSubmit}>
                        Login
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}
