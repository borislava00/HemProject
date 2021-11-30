import { Container , Grid , Avatar , Typography } from '@mui/material';

import styles from "./User.module.scss"

export default function User({ avatar = " " , name = " " , size = 90, headingSize, hasWelcome = false }) {
    return (
        <div className={styles['user-container']}>
            <Container disableGutters>
                <Grid container spacing={2} alignItems="center">
                    <Grid item>
                        <Avatar src={avatar} sx={{ width: size , height: size }}/>
                    </Grid>
                    <Grid item>
                        {hasWelcome && <Typography variant="h6">Welcome back,</Typography>}
                        <Typography variant={headingSize}>{name}</Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
