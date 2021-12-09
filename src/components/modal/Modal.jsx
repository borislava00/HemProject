import { Dialog , DialogTitle , DialogContent , Button  , DialogContentText , DialogActions }  from "@mui/material";
import { useState } from "react";

import styles from "./Modal.module.scss";

export default function Modal({ open , title , buttonText , handleSubmit , handleClose }) {
    const [isOpen, setIsOpen] = useState(open);
  

    return(
        <div className={styles['modal-wrapper']}>
             <Button variant="outlined" onClick={() => setIsOpen(true)}>
                {buttonText}
            </Button>
            <Dialog
                open={isOpen}
                onClose={handleClose}
            >
            <DialogTitle className={styles.title}>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText className={styles.content}>
                    Modal Content
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setIsOpen(false)}>Modal Action</Button>
            </DialogActions>
            </Dialog>
        </div>
    );
}