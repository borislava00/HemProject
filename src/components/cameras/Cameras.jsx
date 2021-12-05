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
                                    <Card iconUrl={camera.videoUrl} outlined={index == activeCard} key={index}
                                    className={styles['cameras-views']} onClick={() => {setActiveCard(index)}}/>
                                )
                                {/*<div className={styles.item} onClick={() => {setActiveCard(index)}}>
                                    <Card iconUrl={camera.videoUrl} outlined={index == activeCard} key={index}
                                    className={styles['cameras-views']}/>
                            </div>
                            )*/}
                            })
                        }
                        </div>
                        <Grid item xs={12}>
                            {hasButton && <Card iconUrl={'/images/plus.svg'} outlined={true} />}
                            { /*{hasButton ? <div className={styles.add}><Card iconUrl={'/images/plus.svg'} outlined={true}/></div> : null} */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
