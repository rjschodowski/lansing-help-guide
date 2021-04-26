import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import 'fontsource-roboto';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <IconButton>
                <Link to="/"><HomeIcon /></Link>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
            SOS LANSING
            </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}


