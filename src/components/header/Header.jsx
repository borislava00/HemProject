import { Paper } from "@mui/material";

import styles from "./Header.module.scss";

export default function Header({ left , right }) {
    return(
        <div className={styles['header-wrapper']}>
            <Paper className={styles['paper-wrapper']}>
                <div className={styles.left}>{left}</div>
                <div className={styles.right}>{right}</div>
            </Paper>
        </div>
    );
}