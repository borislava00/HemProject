import { CircularProgress, Container, Typography } from "@mui/material";
import { Box } from "@mui/material/node_modules/@mui/system";
import Modal from "../modal/Modal";
import styles from './AddDevice.module.scss';

export default function AddDevice({
  searching = true,
  found,
  failed,
  onDevice,
  handleClose,
  handleSubmit,
  open = true,
}) {
  const buttonProps = {
    color: "primary",
    fontSize: ".95rem",
    display: failed ? "inline-block" : "none",
  }

  return (
    <Modal
      open={open}
      handleClose={handleClose}
      handleSubmit={handleSubmit}
      title={"ADD DEVICE"}
      buttonProps={buttonProps}
      buttonText={'TRY AGAIN'}
    >
      <Container>
        <div className={styles.container}>
          <CircularProgress
            size={"24.6rem"}
            sx={{ opacity: "0.3" }}
            variant={
              failed
                ? "determinate"
                : found
                  ? "determinate"
                  : searching
                    ? "indeterminate"
                    : ""
            }
            value={0}
          />
          <CircularProgress
            size={"24.6rem"}
            sx={{
              opacity: failed ? "0.15" : found && "0.4",
              position: "absolute",
              color:
                failed ? "rgba(24, 28, 36, 1)"
                : found && "primary",
            }}
            value={100}
            variant="determinate"
          />
          <div className={styles['img-container']}>
            <img
              src={
                failed
                  ? "images/no-connection.svg"
                  : "images/search.svg"
              }></img>
          </div>
        </div>
        <Typography
          sx={{
            color: "#7441F3",
            textAlign: "center",
            fontWeight: "700",
            marginTop: "45px",
          }}>
          {failed ? "NO DEVICE FOUND..." : "SEARCHING..."}
        </Typography>
      </Container>
    </Modal>

  )
}
