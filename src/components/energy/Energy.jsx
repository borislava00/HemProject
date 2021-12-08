import styles from './Energy.module.scss';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { Area} from 'recharts';
import { CartesianGrid} from 'recharts';
import {ComposedChart} from 'recharts';
import {Line} from 'recharts';
import {XAxis } from 'recharts';


export default function Energy({data}){
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return(
        <div>
            <Grid container>
                <Grid item xs={12}>
                     <Grid container justifyContent="space-between" alignItems="center">
                            <Grid item xs={10}>
                                <Typography variant="h2" color="initial">
                                        Energy
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Select
                                    label="Select"
                                    onChange={handleChange}
                                    value={value}
                                    className={styles["select-wrapper"]}>
                                        <MenuItem label="This week" value={1}>This week</MenuItem>
                                        <MenuItem label="This year" value={2}>This year</MenuItem>
                                        <MenuItem label="This century" value={3}>This century</MenuItem>
                                </Select>
                            </Grid>
                     </Grid>   
                </Grid>
                <Grid item>
                    <ComposedChart
                        width={803}
                        height={186}
                        data={data}
                        >
                        <XAxis dataKey="hour" />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Line type="monotone" dataKey="temperature" stroke="#c33c8c" strokeWidth={3} dot={true} />
                        <Area type="monotone" dataKey="temperature" stroke="#c33c8c" fill="#e150a6" />
                    </ComposedChart>
                </Grid>
            </Grid>
        </div>
    );
}