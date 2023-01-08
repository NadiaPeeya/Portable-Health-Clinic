import {useState} from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import AppBar from 'material-ui/AppBar'
// import TextField from 'material-ui/TextField'
// import RaisedButton from 'material-ui/RaisedButton'
import '../styles/form-style.css';
import React, { useRef } from 'react';

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/button';
import TextField from '@material-ui/core/TextField';
import { Box } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { Label } from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
    textField: {
        margin: '10px',
        width: '75%',
    },
    buttonColor: {
        width: '100px',
        borderRadius: '30px',
        background: 'linear-gradient(to right, #ff105f, #ffad06)',
        fontWeight: 'bold',
    }
  }))

  


export default function FormUserDetails({nextStep, handleChange, values}) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const classes = useStyles();

    const onSubmit = data => console.log(data);
    
    const next = (e) =>  {
        e.preventDefault();
        nextStep();
    }
    const imgFileInput = useRef(null);
    const [imgPreview, setimgPreview] = useState(null);
    const pdfFileInput = useRef(null);
    const [pdfPreview, setpdfPreview] = useState(null);
  
    const handleChange1 = (event) => {
      const imgFile = event.target.files[0];
      if (imgFile) {
        const reader = new FileReader();
        reader.onload = (e) => setimgPreview(e.target.result);
        reader.readAsDataURL(imgFile);
      }
      const handleChange = (event)=> {
        const pdfFile = event.target.files[0];
        if(pdfFile) {
            const pdfReader = new FileReader();
            pdfReader.onload = (e) => setpdfPreview(e.target.result);
            pdfReader.readAsDataURL(pdfFile);
        }
      }

      
    };
 
    return(
            <Grid container >
                {/* <div className="App-header"> */}
                    <Grid item xs={12}>
                        <TextField id="outlined-basic" label="First Name" 
                                    onChange= {handleChange('firstName')} 
                                    variant="outlined"
                                    className={classes.textField} 
                                    />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="outlined-basic" label="Last Name" 
                                    onChange= {handleChange('lastName')} 
                                    variant="outlined" 
                                    className={classes.textField} />
                    </Grid>

                  

                    <Grid container item xs={12} style={{paddingLeft: 45, paddingRight: 45,}} >
                        <Grid item xs={6}>
                            <TextField id="outlined-basic" label="Birthdate" 
                                        onChange= {handleChange('birthdate')} 
                                        variant="outlined" 
                                        className={classes.textField} />
                        </Grid>
                
                        <Grid item xs={6}>
                            <TextField id="outlined-basic" label="Gender" 
                                        onChange= {handleChange('gender')} 
                                        variant="outlined" 
                                        className={classes.textField} />
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} style={{paddingLeft: 45, paddingRight: 45,}} >
                        <Grid item xs={6}>
                            <TextField id="outlined-basic" label="Occupation" 
                                        onChange= {handleChange('Occupation')} 
                                        variant="outlined" 
                                        className={classes.textField} />
                        </Grid>
                
                        <Grid item xs={6}>
                            <TextField id="outlined-basic" label="Highest Education" 
                                        onChange= {handleChange('Highest Education')} 
                                        variant="outlined" 
                                        className={classes.textField} />
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} style={{paddingLeft: 45, paddingRight: 45,}} >
                        <Grid item xs={6}>
                            <TextField id="outlined-basic" label="Race" 
                                        onChange= {handleChange('Race')} 
                                        variant="outlined" 
                                        className={classes.textField} />
                        </Grid>
                
                        <Grid item xs={6}>
                            <TextField id="outlined-basic" label="Hobbies" 
                                        onChange= {handleChange('Hobbies')} 
                                        variant="outlined" 
                                        className={classes.textField} />
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="outlined-basic" label="Married Status" 
                                    onChange= {handleChange('marriedStatus')} 
                                    variant="outlined" 
                                    className={classes.textField} />
                    </Grid>
                    <Grid container item xs={12} style={{paddingLeft: 48, paddingRight: 48, marginRight: 5, marginLeft: 5}} >
                        <Grid item xs={6}>
             
                        <TextField style={{margin: 20, padding: 20}} label="Choose photo"  type="file" inputRef={imgFileInput} onChange={handleChange1} />
      {imgPreview && <img src={imgPreview} alt="imgPreview" />}
                        </Grid>
                
                        <Grid item xs={6}>
                       
                        <TextField style={{margin: 20, padding: 20}} type="file" label="Choose PDF" inputRef={pdfFileInput} onChange={handleChange} accept="application/pdf" />
      {pdfPreview && <iframe src={pdfPreview} title="Preview" />}
                                       
                        </Grid>
                    </Grid>
              
                   
                <Grid item xs={12}>
                    <Button variant="contained" 
                    color="primary" className={classes.buttonColor} 
                    onClick={next}> Next</Button>
                </Grid>
                
            {/* </div> */}


        </Grid>

    )
}