import { CardContent, CardMedia, Typography } from '@mui/material';
import CardWrapper from '@mui/material/Card';
import styles from './Card.module.scss';

export default function Card({iconUrl, outlined = false, onClick, title}){
    return(
        <div className={styles.card} onClick={onClick}>
            <CardWrapper variant={outlined ? "outlined" : null}>
                <CardContent className={styles.content}>
                    {iconUrl ? 
                    <CardMedia>
                        <img src={iconUrl} className={styles.image}/>
                    </CardMedia>    
                    :
                    null
                    }
                    {title ? <Typography className={styles.title}>{title}</Typography> : null}
                </CardContent>
            </CardWrapper>

        </div>
    )
}
