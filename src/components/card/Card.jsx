import { CardContent, CardMedia, Typography } from '@mui/material';
import CardWrapper from '@mui/material/Card';
import styles from './Card.module.scss';
import { Chip } from '@mui/material';

export default function Card({ iconUrl, outlined = false, onClick, title, variant }){
    const getComponent = () => {
        let extention = iconUrl.split('.').pop();
        if ( extention == 'svg' || extention == 'png' ) {
            return 'img';
        } else if ( extention == 'mp4' ) {
            return 'video';
        } else {
            return null;
        }
    }
    return(
        <div>
            <div>
        <div className={styles.card} onClick={onClick}>
            <CardWrapper variant={outlined ? "outlined" : null}>
                <CardContent className={styles.content}>
                    {iconUrl ? 
                    <CardMedia>
                        <img src={iconUrl} className={styles.image}/>
                        {variant == 'offline' && <Chip className={styles.chip} label="!"/>}
                    </CardMedia>    
                    :
                    null
                }
                    {title ? <Typography className={styles.title}>{title}</Typography> : null}
                </CardContent>
            </CardWrapper>

        </div>
        </div>
            </div>
    )
}
