//Idea for including translate button feature
//Also check out https://material-ui.com/components/button-group/ as this might be a better way for
//including the translate button feature


import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import 'fontsource-roboto';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import TranslateIcon from '@material-ui/icons/Translate';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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


