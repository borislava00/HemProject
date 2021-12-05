import Card from "../card/Card.jsx";
import { Grid } from "@mui/material";
import styles from "./Cameras.module.scss";
import { useState } from "react";

export default function Cameras({ cameras , hasButton }) {
    const [activeCard, setActiveCard] = useState(0);

    return(
        <div className={styles['cameras-wrapper']}>
            <Grid container>
                <Grid item xs={8}>
                    <Card iconUrl={cameras[activeCard].videoUrl} />
                </Grid>
                <Grid item xs={4}>
                    <Grid container className={styles.scroll}>
                        <div className={styles['items-wrapper']}>

                        {
                        cameras.map((camera, index) => {
                            return(
                                <div className={styles.item} onClick={() => {setActiveCard(index)}}>
                                    <Card iconUrl={camera.videoUrl} outlined={index == activeCard} 
                                    className={styles['cameras-views']}/>
                                </div>
                                )
                            })
                        }
                        </div>
                        <Grid item xs={12}>
                            {hasButton ? <div className={styles.add}><Card iconUrl={'/images/plus.svg'} outlined={true}/></div> : null}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/* <Grid container spacing={3}>
                <Grid item xs={6} container>
                    <Grid item xs container direction="column" spacing={3}>
                        <Grid item xs={2}>
                            <Card iconUrl={cameras[0].videoUrl} />
                        </Grid>
                        <Grid item xs={4}>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs={6}>
                                    <Grid item xs container direction="row" spacing={1}>
                                        <Grid item xs={3}>
                                            <Card iconUrl={cameras[1].videoUrl} />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Card iconUrl={cameras[2].videoUrl} />  
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid item xs container direction="row" spacing={1}>
                                        <Grid item xs={3}>
                                            <Card iconUrl={cameras[3].videoUrl} />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Card iconUrl={cameras[4].videoUrl} /> 
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid item xs container direction="row" spacing={1}>
                                        <Grid item xs={3}>
                                            <Card iconUrl={cameras[5].videoUrl} />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Card iconUrl={cameras[0].videoUrl} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid> */}
        </div>
    );
}
