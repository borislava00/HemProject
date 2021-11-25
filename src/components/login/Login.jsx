import { Button, Grid, InputAdornment, TextField } from '@mui/material';
import styles from './Login.module.scss';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

export default function Login(){
    return(
        <div className={styles["login-form"]}>
            <Grid container rowSpacing={1} justifyContent="center">
                <Grid item xs={10}>
                    <TextField fullWidth className={styles.input}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><EmailIcon/></InputAdornment>,
                                }}>
                                    
                    </TextField>
                </Grid>
                <Grid item xs = {10}>
                    <TextField fullWidth className={styles.input}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><LockIcon/></InputAdornment>,
                                }}>
                    </TextField>
                </Grid>
                <Grid item xs={10}>
                    <Button fullWidth variant="contained">
                        Login
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}