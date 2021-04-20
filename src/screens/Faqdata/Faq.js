
  import React, { useState } from "react";
  import { makeStyles } from "@material-ui/core/styles";
  import TextField from "@material-ui/core/TextField";
  import Button from "@material-ui/core/Button";
  import SaveIcon from "@material-ui/icons/Save";


  
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "70ch",
    },
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#F7CD2E",
  },
}));

function Faq() {
  
  const classes = useStyles();
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };


  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Privacy Policy"
          multiline
          rows={20}
          variant="outlined"
          value={value}
          onChange={handleChange}
        />
        <TextField
          id="outlined-multiline-static"
          label="Terma & Condition"
          multiline
          rows={20}
          variant="outlined"
          value={value}
          onChange={handleChange}
        />
      </div>
      
      <div style={{ marginTop: 20 }}>
        <Button
          variant="contained"
          size="large"
          className={classes.button}
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      </div>
    </form>
  );

  }

  export default Faq;

