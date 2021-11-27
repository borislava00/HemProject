import styles from './Weather.module.scss';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


export default function Weather({degrees, type}){
    const types = {
        'cloudy' : '/images/cloudy.svg',
        'rainy' : '/images/rainy.svg',
        'snowy' : '/images/snowy.svg',
        'stormy' : '/images/stormy.svg',
        'sunny' : "/images/sunny.svg"
    }
    return(
        <div className={styles["weather-wrapper"]}>
            <Grid container>
                <Grid item xs = {5} >
                    <img src={types[type]} className={styles.image}/>
                </Grid>
                <Grid item xs = {7}>
                    <Typography variant="h4" style={{color:"#4e24f2"}} className={styles["text-container"]}>Weather</Typography>
                    <Typography variant="h1" color="initial" className={styles["text-container"]}>{degrees}&deg;</Typography>
                </Grid>
            </Grid>
        
        </div>
    );
}