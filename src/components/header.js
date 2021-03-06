import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import 'fontsource-roboto'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
    textAlign: 'center',
    fontWeight: 600,
    letterSpacing: 1.15,
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className="max-w-full" position="fixed" color="primary">
        <Toolbar>
            <IconButton>
                <Link to="/"><ArrowBackIosIcon /></Link>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {props.pageTitle}
            </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}


