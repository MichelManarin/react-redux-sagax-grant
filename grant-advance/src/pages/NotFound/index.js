import { Grid, Typography } from "@mui/material";

export default function NotFound() {
  return (
    <Grid
      alignItems="center"
      justifyContent="center"
      style={{ display: "flex" }}
      marginTop={4}
    >
      <Typography
        variant="h6"
        gutterBottom
        style={{
          fontWeight: 700,
          lineHeight: 1.2,
          color: "rgb(0, 150, 136)",
          fontSize: "1.5rem",
        }}
      >
        <b>404 - Something wrong</b>
      </Typography>
    </Grid>
  );
}
