import Card from "../card/Card.jsx";
import { Grid } from "@mui/material";
import styles from "./Cameras.module.scss";
import { useEffect, useState } from "react";

export default function Cameras({ cameras , hasButton }) {
    const [activeCard, setActiveCard] = useState(0);

    return(
        <div className={styles['cameras-wrapper']}>
            <Grid container>
                <Grid item xs={8}>
                    <video autoPlay controls>
                        <source src={cameras[activeCard].videoUrl} />
                    </video>
                </Grid>
                <Grid item xs={4}>
                    <Grid container className={styles.scroll}>
                        <div className={styles['items-wrapper']}>
                        {
                        cameras.map((camera, index) => {
                            return(
                                 <video className={styles.item} key={index} onClick={() =>  {setActiveCard(index)}}>
                                    <source  className={styles['cameras-views']} src={camera.videoUrl} type="video/mp4"  />
                                </video>
                                );
                            })
                        }
                        </div>
                        <Grid item xs={12}>
                            {hasButton ? <div className={styles.add}><Card iconUrl={'/images/plus.svg'} outlined={true} /></div> : null}
                        </Grid> 
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
