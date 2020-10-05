import React from "react";
import {Button, TextField} from '@material-ui/core';

function Login(){
    return (
        <form>
            <div>
                <TextField label="Enter username"></TextField>
            </div>
            <div>
                <TextField label="Password"></TextField>
            </div>
            <div style={{marginTop:"10px"}}>
                <Button size="large" variant="contained" color="primary" style={{backgroundColor:'#ee4888'}}>Click Here!</Button>
            </div>
        </form>
    );
} 

export default Login;