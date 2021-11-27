import styles from './Weather.module.scss';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


export default function Weather({degrees, type}){
    return(
        <div className={styles["weather-wrapper"]}>
            <Grid container>
                <Grid item xs = {5}>
                    <img src={type} />
                </Grid>
                <Grid item xs = {7}>
                    <Typography variant="h4" style={{color:"#4e24f2"}}>Weather</Typography>
                    <Typography variant="h1" color="initial">{degrees}&#186;</Typography>
                </Grid>
            </Grid>
        
        </div>
    );
}