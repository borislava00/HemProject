import { CardContent, CardMedia } from '@mui/material';
import CardWrapper from '@mui/material/Card';
import styles from './Card.module.scss';

export default function Card({iconUrl, outlined = false, onClick }){

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
        <div className={styles.card} onClick={onClick}>
            <CardWrapper variant={outlined ? "outlined" : null}>
                <CardContent className={styles.content}>
                    {iconUrl ? 
                    <CardMedia className={styles.image} src={iconUrl} component={getComponent()} autoPlay controls /> 
                    :
                    null
                    }
                </CardContent>
            </CardWrapper>

        </div>
    )
}
