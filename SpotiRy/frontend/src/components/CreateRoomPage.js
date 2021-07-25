import React, { Component } from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";


export default class CreateRoomPage extends Component {
    defaultVotes = 2;
    constructor(props) {
        super(props);
  }

  render() {
    return <Grid container spacing={1}>
       <Grid item xs={12} align="center">
        <Typography component="h4" variant="h4">
            Create YOUR Room
        </Typography>
       </Grid>
       <Grid item xs={12} align="center">
        <FormControl component="fieldset">
            <FormHelperText>
                <div align="center">
                    Guest Control of Playback State
                </div>
            </FormHelperText>
            <RadioGroup row defaultValue="true">
                <FormControlLabel
                    value="true"
                    control={<Radio color="primary" />}
                    label="Play/Pause"
                    labelPlacement="bottom"
                />
                <FormControlLabel
                    value="false"
                    control={<Radio color="secondary" />}
                    label="No Control"
                    labelPlacement="bottom"
                />
            </RadioGroup>
        </FormControl>
       </Grid>
       <Grid item xs={12} align="center">
           <FormControl>
               <TextField
                   required={true}
                   type="number"
                   defaultValue={this.defaultVotes}
                   inputProps={{min: 1, style: { textAlign: "center"},}}
               />
               <FormHelperText>
                   <div align="center">
                       Votes Required to Skip the Song
                   </div>
               </FormHelperText>
           </FormControl>
       </Grid>
       <Grid item xs={12} align="center">
           <Button color="primary" variant="contained">
            Create a Room
           </Button>
       </Grid>
       <Grid item xs={12} align="center">
           <Button color="secondary" variant="contained" to="/" component={Link}>
            Go Back
           </Button>
       </Grid>
    </Grid>;
  }
}