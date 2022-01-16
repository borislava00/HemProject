import { Container, Grid, Avatar, Typography } from "@mui/material";

import styles from "./User.module.scss";

export default function User({
  avatar = " ",
  name = " ",
  size = 90,
  headingSize,
  hasWelcome = false,
}) {
  return (
    <div className={styles["user-container"]}>
      <Container disableGutters>
        <Grid container spacing={{ xs: 1, md: 2 }} alignItems="center">
          <Grid item>
            <Avatar
              src={avatar}
              sx={{ width: { md: size, xs: 50 }, height: { md: size, xs: 50 } }}
            />
          </Grid>
          <Grid item>
            {hasWelcome && (
              <Typography color="#7441F3" fontWeight="400" variant="body2">
                Welcome home,
              </Typography>
            )}
            <Typography
              variant={headingSize}
            >
              {name}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
