import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import 'fontsource-roboto'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
    btn: {
      width: '3.5rem',
      height: '3.5rem',
      borderRadius: '50%',
    },
    
    btn911: {
      width: '5rem',
      height: '2.5rem',
      fontWeight: '900',
      fontSize: '1.5rem',
      borderWidth: 1.5,
    },
  });
  
  export default function ButtonAppBar() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar className="max-w-full" position="static" color="primary">
          <Toolbar>
            <Button className={classes.btn911} size="medium" variant="contained" color="secondary"><a href="tel:911" alt="call" target="_blank" rel="noreferrer">911</a>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  