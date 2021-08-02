import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const Index = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          '& > * + *': {
            marginLeft: theme.spacing(2),
          },
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '5rem',
          flexDirection: 'column'
        },
      }));
      const classes = useStyles();
    return (
        <div className={classes.root}>
          <CircularProgress color="secondary"/>
          <p>Sorry, this will take some time ...</p>
        </div>
    );
};

export default Index;