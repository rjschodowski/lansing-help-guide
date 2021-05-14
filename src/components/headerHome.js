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
    letterSpacing: -0.5,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className="max-w-full" position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          LANSING EMERGENCY SERVICES 
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
