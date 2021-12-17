import { CardContent, CardMedia, Typography } from '@mui/material';
import CardWrapper from '@mui/material/Card';
import styles from './Card.module.scss';
import { Chip } from '@mui/material';
import { useState } from 'react';

export default function Card({ iconUrl, outlined = false, onClick, title, variant }){
    const [selected, setSelected] = useState(false);
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
        <div className={styles.card} onClick={() => {setSelected(!selected)}}>
            <CardWrapper variant={selected ? "outlined" : null}>
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
    )
}
