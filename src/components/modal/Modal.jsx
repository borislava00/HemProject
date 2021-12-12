import { Dialog , DialogTitle , DialogContent , Button , DialogActions }  from "@mui/material";

import styles from "./Modal.module.scss";

export default function Modal({ open , title , buttonText , handleSubmit , handleClose , children}) {
    return(
        <div className={styles['modal-wrapper']}>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle className={styles.title}>{title}</DialogTitle>
                <DialogContent className={styles.content} >
                    {children}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSubmit} fullWidth>{buttonText}</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}