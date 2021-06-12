import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


 
    const useStyles = makeStyles((theme) => ({
        container: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        textField: {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          width: 200,
        },
      }));
      
      export default function DatePickers() {
        const classes = useStyles();


  return (
      <div>

     
      <h1 className="booking-header">
We Would Like To Know A Little Bit
About Your Vacation
      </h1>
    <form className={classes.container} noValidate>
    <TextField
      id="date"
      label="Dates"
      type="date"
      defaultValue="2017-05-24"
      className={classes.textField}
      InputLabelProps={{
        shrink: true,
      }}
    />
  </form>
  </div>
  );
};

// export default Booking;
