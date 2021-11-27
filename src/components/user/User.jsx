import { Container , Grid , Avatar , Typography } from '@mui/material';

import styles from "./User.module.scss"

export default function User({ avatar = " " , name = " " , size = 90 }) {
    return (
        <div className={styles['user-container']}>
            <Container>
                <Grid container spacing={2} alignItems="center">
                    <Grid item>
                        <Avatar src={avatar} sx={{ width: size , height: size }}/>
                    </Grid>
                    <Grid item>
                        <Typography variant="h3">{name}</Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}