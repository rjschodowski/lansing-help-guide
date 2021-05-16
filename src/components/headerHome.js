import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import 'fontsource-roboto';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
    fontWeight: 600,
    letterSpacing: 1.15,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className="max-w-full" position="fixed" color="primary">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
          LANSING COMMUNITY RESOURCES 
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
