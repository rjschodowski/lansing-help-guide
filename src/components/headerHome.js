import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import 'fontsource-roboto';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TranslateIcon from '@material-ui/icons/Translate';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
          <Typography variant="h6" className={classes.title}>
            SOS LANSING
          </Typography>
          <IconButton edge="start" className={classes.menuButton} color="inherit">
            <TranslateIcon aria-label="translate button" />
            <Button color="inherit">English</Button>
            <ExpandMoreIcon aria-label="expand more button" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
