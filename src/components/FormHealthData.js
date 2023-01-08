import React, {useState} from 'react';
import Confirm from './Confirm';
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/button';
import TextField from '@material-ui/core/TextField';
import { Box } from '@material-ui/core';
import { Grid } from '@material-ui/core';



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
    },
    spaceBetweenBtn: {
        width: '75%',
        display: 'flex',
        justifyContent: 'space-between',
    },

    
  }))


  export default function FormHealthData({ previousStep, handleChange}) {
    const [openDialog, setOpenDialog] = useState(false);
    
    const classes = useStyles();
  

    const prev = (e) =>  {
        e.preventDefault();
        previousStep();
    }

    const handleBtnClick = () => {
        setOpenDialog(true);
        console.log("the first open:", openDialog)
    };


    const [value1, setValue1] = React.useState('yes');
    const [value2, setValue2] = React.useState('yes');
    const [value3, setValue3] = React.useState('yes');
    const [value4, setValue4] = React.useState('yes');

    const handleChange1 = (event) => {
      setValue1(event.target.value);
    };
    const handleChange2 = (event) => {
      setValue2(event.target.value);
    };
    const handleChange3 = (event) => {
      setValue3(event.target.value);
    };
    const handleChange4 = (event) => {
      setValue4(event.target.value);
    };
    return(
        <>
            <form>
                <TextField id="outlined-basic" label="Blood Group" 
                                onChange= {handleChange('bloodGroup')} 
                                variant="outlined"
                                className={classes.textField} 
                                />
                
                <TextField id="outlined-basic" label="Health Insurance" 
                                onChange= {handleChange('healthInsurance')} 
                                variant="outlined"
                                className={classes.textField} 
                                />

                <TextField id="outlined-basic" label="Birth Delivery" 
                                onChange= {handleChange('birthDelivery')} 
                                variant="outlined"
                                className={classes.textField} 
                                />
              
                <TextField id="outlined-basic" label="Birth Weight" 
                                onChange= {handleChange('birthWeight')} 
                                variant="outlined"
                                className={classes.textField} 
                                />
                <TextField id="outlined-basic" label="Family Health Background" 
                                onChange= {handleChange('FamilyHealth')} 
                                variant="outlined"
                                className={classes.textField} 
                                />
                <TextField id="outlined-basic" label="Father" 
                                onChange= {handleChange('father')} 
                                variant="outlined"
                                className={classes.textField} 
                                />
                <TextField id="outlined-basic" label="Mother" 
                                onChange= {handleChange('mother')} 
                                variant="outlined"
                                className={classes.textField} 
                                />
                <TextField id="outlined-basic" label="Smoking" 
                                onChange= {handleChange('smoking')} 
                                variant="outlined"
                                className={classes.textField} 
                                />
                <TextField id="outlined-basic" label="Alcohol" 
                                onChange= {handleChange('alcohol')} 
                                variant="outlined"
                                className={classes.textField} 
                                />
                <TextField id="outlined-basic" label="Allergy" 
                                onChange= {handleChange('Allergy')} 
                                variant="outlined"
                                className={classes.textField} 
             
             />
                <Grid container item xs={12} style={{paddingLeft: 50, paddingRight: 50, margin: '20px'}} >
                        <Grid item xs={3}>
                        <div style={{}}>
               <span  style={{color: '#37373F'}}> Insomnia</span>
                <br />
             <label >
        <input
          type="radio"
          value="yes"
          checked={value1 === 'yes'}
          onChange={handleChange1}
        
        />
        <span style={{color: '#37373F', fontSize: '14px'}} >  Yes</span>
      
      </label>
      <br />
      <label >
        <input
          type="radio"
          value="no"
          checked={value1 === 'no'}
          onChange={handleChange1}
        
        />
        <span style={{color: '#37373F', fontSize: '14px'}}>  No</span>
    
      </label>
             </div>
                        </Grid>
                
                        <Grid item xs={3}>
                        <div style={{textAlign: 'left'}}>
                      <span  style={{color: '#37373F'}}>    Exercise</span> 
                <br />
             <label >
        <input
          type="radio"
          value="yes"
          checked={value2 === 'yes'}
          onChange={handleChange2}
        
        />
        <span style={{color: '#37373F', fontSize: '14px'}}>  Yes</span>
      
      </label>
      <br />
      <label >
        <input
          type="radio"
          value="no"
          checked={value2 === 'no'}
          onChange={handleChange2}
        
        />
        <span style={{color: '#37373F', fontSize: '14px'}}>   No</span>
     
      </label>
             </div>
                        </Grid>
                        <Grid item xs={3}>
                        <div style={{textAlign: 'left'}}>
              <span style={{color: '#37373F'}}>  Diet</span>
                <br />
             <label >
        <input
          type="radio"
          value="yes"
          checked={value3 === 'yes'}
          onChange={handleChange3}
        
        />
        <span style={{color: '#37373F', fontSize: '14px'}}>   Yes</span>
     
      </label>
      <br />
      <label >
        <input
          type="radio"
          value="no"
          checked={value3 === 'no'}
          onChange={handleChange3}
        
        />
        <span style={{color: '#37373F', fontSize: '14px'}}>   No</span>
     
      </label>
             </div>
                        </Grid>
                        <Grid item xs={3}>
                        <div style={{textAlign: 'left'}}>
              <span style={{color: '#37373F'}}> Sports</span>
                <br />
             <label >
        <input
          type="radio"
          value="yes"
          checked={value4 === 'yes'}
          onChange={handleChange4}
        
        />
        <span style={{color: '#37373F', fontSize: '14px'}}>   Yes</span>
     
      </label>
      <br />
      <label >
        <input
          type="radio"
          value="no"
          checked={value4 === 'no'}
          onChange={handleChange4}
        
        />
        <span style={{color: '#37373F', fontSize: '14px'}}>   No</span>
     
      </label>
             </div>
                        </Grid>
                    </Grid>

         
        
          

            </form>
            <Box className={classes.spaceBetweenBtn}>
                <Button variant="contained" color="primary" className={classes.buttonColor} onClick={prev}> Prev </Button>
                <Button variant="contained" color="primary" className={classes.buttonColor} 
                onClick={() => handleBtnClick()}
                > Done </Button>
            </Box>

   
            <Box>
                    {openDialog ? <Confirm value={openDialog}> </Confirm> : null}
            </Box>
        </>

    )
}