import { Grid, Link, Paper, Typography } from "@mui/material";
import React from "react";

// const useStyles = makeStyles((theme) => ({
//   sidebarAboutBox: {
//     padding: theme.spacing(2),
//   },
//   sidebarSection: {
//     marginTop: theme.spacing(3),
//   },
// }));

const Sidebar = ({ sidebar }) => {
  //   const classes = useStyles();
  const { archives, description, social, title } = sidebar;

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} style={{ padding: 2, marginBottom: 10 }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>

      <Typography variant="h6" gutterBottom style={{ marginTop: 3 }}>
        Archives
      </Typography>
      {archives.map((archive) => (
        <Link
          display="block"
          variant="body1"
          href={archive.url}
          key={archive.title}
        >
          {archive.title}
        </Link>
      ))}

      <Typography variant="h6" gutterBottom style={{ marginTop: 3 }}>
        Social
      </Typography>
      {social?.map((network) => (
        <Link display="block" variant="body1" href="#" key={network.name}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>{<network.icon />}</Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
};

export default Sidebar;
