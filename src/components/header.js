import React from 'react'
import { Link,graphql, useStaticQuery } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import 'fontsource-roboto';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

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
      <AppBar className="max-w-full" position="static" color="secondary">
        <Toolbar>
            <IconButton>
                <Link to="/"><ArrowBackIosIcon /></Link>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
            LANSING EMERGENCY SERVICES
            </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}


