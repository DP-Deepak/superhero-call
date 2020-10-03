import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { nameAndNumber } from '../../utils/constants';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

export default function Types() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h4" gutterBottom>
        Phone number Directory:(Use code 0#)
          </Typography>
        {
          nameAndNumber.map(({ name, number }) => {
            return <Typography variant="h5" component="h5" gutterBottom>
              {`${name} : ${number}`}
            </Typography>
          })
        }

    </div>
  );
}
