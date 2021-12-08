import Card from "../card/Card.jsx";
import { Grid } from "@mui/material";
import styles from "./Cameras.module.scss";
import { useEffect, useState , useRef } from "react";

export default function Cameras({ cameras , hasButton }) {
    const [activeCard, setActiveCard] = useState(0);
    const videoRef = useRef();
    const previousUrl = useRef(cameras[activeCard].videoUrl);
  
    useEffect(() => {
      if (previousUrl.current === cameras[activeCard].videoUrl) {
        return;
      } else if (videoRef.current) {
        videoRef.current.load();
      }
  
      previousUrl.current = cameras[activeCard].videoUrl;
    }, [cameras[activeCard].videoUrl]);

    return(
        <div className={styles['cameras-wrapper']}>
            <Grid container>
                <Grid item xs={8}>
                    <video ref={videoRef} autoPlay={true} controls>
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
