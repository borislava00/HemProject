import { CardContent, CardMedia } from '@mui/material';
import CardWrapper from '@mui/material/Card';
import styles from './Card.module.scss';

export default function Card({iconUrl, outlined = false}){
    return(
        <div className={styles.card}>
            <CardWrapper variant={outlined ? "outlined" : null}>
                <CardContent className={styles.content}>
                    {iconUrl ? 
                    <CardMedia>
                        <img src={iconUrl} className={styles.image}/>
                    </CardMedia>    
                    :
                    null
                    }
                </CardContent>
            </CardWrapper>

        </div>
    )
}