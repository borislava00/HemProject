import { CircularProgress , Stack , Box , Typography , Paper , IconButton } from '@mui/material';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutline';
import { LineChart , Line } from 'recharts';
import { useState , useEffect } from 'react';

import styles from "./Thermostat.module.scss";

export default function Thermostat({ data }) {
    const [progress, setProgress] = useState(0);

    const onIncrease = () => {
        let next = progress + 1;
        setProgress(next);
    }

    const onDecrease = () => {
        let prev = progress - 1;
        setProgress(prev);
    }

    useEffect(() => {
        setProgress(25);
    }, []);

    return(
        <div className={styles['thermostat-container']}>
            <Paper className={styles['paper-wrapper']}>
                <Stack className={styles['stack-wrapper']}>
                    <CircularProgress style={{ color: 'lightgrey' }} variant="determinate" value={100} size={375} thickness={2} />
                    <CircularProgress style={{ color: 'white' , position: 'absolute' , transform: 'rotate(180deg)' }} variant="determinate" value={progress} size={375} thickness={2}/>
                </Stack>
                <Box className={styles['temperature-box']}>
                    <IconButton disabled={progress == 0 ? true : false } onClick={() => onDecrease() }>
                        <RemoveCircleOutlinedIcon style={{ fontSize: '2rem' , color : 'white' , marginRight: '15px'}} />
                    </IconButton>
                    <Typography style={{ color: 'white' , fontSize: '5em' , fontWeight: 'bold' }}>{progress}&deg;</Typography>
                    <IconButton disabled={progress == 50 ? true : false } onClick={() => onIncrease() } >
                        <AddCircleOutlinedIcon style={{ fontSize: '2rem' , color: 'white' }} />
                    </IconButton>
                </Box>
            </Paper>
            <Paper className={styles['graph-wrapper']}>
                <Typography style={{ color: 'white' , marginTop: '15px' , marginLeft: '15px' , fontSize: '11px' , fontWeight: '500' , fontFamily: 'Roboto' }}>TEMPERATURE GRAPH</Typography>
                <LineChart
                    width={803}
                    height={186}
                    data={data}
                    >
                    <Line type="monotone" dataKey="temperature" stroke="#ffffff" strokeWidth={3} dot={true} />
                </LineChart>
            </Paper>
        </div>
    );
}