import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import 'fontsource-roboto'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    appBar: {
        top: 'auto',
        bottom: 0,
        paddingTop: 2,
        paddingBottom: 2,
    },

    grow: {
        flexGrow: 1,
    },

    textSpacing: {
        marginRight: 8,
    },

    btn: {
      width: '2.5rem',
      height: '2.5rem',
      borderRadius: '50%',
    },
    
    btn911: {
      width: '5rem',
      height: '2.5rem',
      fontWeight: '900',
      fontSize: '1.25rem',
      borderWidth: 1.5,
    },
  }));
  
  export default function BottomAppBar() {
    const classes = useStyles();
  
    return (
      <div className={classes.grow}>
        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar>
                <div style={{ width: '100%' }}>
                    <Box display="flex" justifyContent="center" alignItems="baseline">
                        <Box>
                            <Typography className={classes.textSpacing}>
                            In case of emergency dial
                            </Typography>
                        </Box>
                        <Box>
                            <Button className={classes.btn911} size="small" variant="contained" color="secondary"><a href="tel:911" alt="call" target="_blank" rel="noreferrer">911</a>
                            </Button>
                        </Box>
                    </Box>
                </div>  
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  