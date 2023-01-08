import React, {useState} from 'react'
import FormPersonalDetails from './FormPersonalDetails'
import FormContactDetails from './FormContactDetails'
import FormAddressDetails from './FormAddressDetails'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookMedical } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx';
import {makeStyles, withStyles} from '@material-ui/core/Styles';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';

import PersonIcon from '@material-ui/icons/Person';
import ContactsIcon from '@material-ui/icons/Contacts';
import HomeIcon from '@material-ui/icons/Home';
import Health from '@material-ui/icons/LocalHospital'
import '../styles/form-style.css';
import FormHealthData from './FormHealthData';



//Line the connect the Icons
const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 22
    },
    completed: {
        "& $line": {
        backgroundImage:
            "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"
        }
    },
    line: {
        height: 4,
        border: 0,
        backgroundColor: "#eaeaf0",
        borderRadius: 1
    }
    })(StepConnector);

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: "#ccc",
        zIndex: 1,
        color: "#fff",
        width: 50,
        height: 50,
        display: "flex",
        borderRadius: "50%",
        justifyContent: "center",
        alignItems: "center"
    },
    completed: {
        backgroundImage:
          "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)"
      }
});



const useStyle = makeStyles({
    p: {
        color: "rgb(233,64,87)",
        margin: '0px',
       
    },
});

    function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { completed } = props;

    const icons = {
        1: <PersonIcon />,
        2: <ContactsIcon />,
        3: <HomeIcon />,
        4: <Health />
    
      
    };


    return (
        <div
        className={clsx(classes.root, {
            [classes.completed]: completed,
        })}
        >
        {icons[String(props.icon)]}
        </div>
    );
    }

function getSteps() {
    return ['Insert personal information', 'Insert contact information', 'Insert address information', 'Insert Health Information'];
}
export default function UserForm() {
    const steps = getSteps();
    const styles = useStyle();

    const [step, setStep] = useState(1);
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        birthdate: '00/00/00',
        gender: '',
        occupation: '',
        highestEducation: '',
        race: '',
        hobbies: '',
        marriedStatus: '',
        photo: '',
        photoId: '',

        email: '',
        phone: '',
        emergencyContact: '',
        emergencyContactName: '',
        relationship: '',
        emergencyContactEmail: '',
        stateCity: '',
        city: '',
        neighbourhood: '',
        street: '',
        number: '',
        bloodGroup: '',
        healthInsurance: '',
        birthDelivery: '',
        birthWeight: '',
        familyHealthBackground: '',
        father: '',
        Mother: '',
        Smoking: '',
        alcohol: '',
        allergy: ''


    })

    //Proceed to next step 
    const nextStep =()=> {
        setStep(step + 1);
    }
    //Proceed to previous step 
    const previousStep = ()=> {
        setStep( step - 1);
    }

    //handle fields change
    const handleChange = input => (e) => {
       
        const value = e.target.value;
        setState({
            ...state,
            [input]: value
        })
        
    }
  
    const {firstName, lastName, birthdate, gender, occupation, highestEducation, race, hobbies, photo, photoId, marriedStatus,  email, phone, emergencyContact, emergencyContactName, relationship,emergencyContactEmail, stateCity, city, neighbourhood, street, number,  bloodGroup,healthInsurance,birthDelivery,birthWeight,familyHealthBackground,father,Mother,Smoking,alcohol,allergy} = state;
    const values = { firstName, lastName, birthdate, gender, occupation, highestEducation, race, hobbies, photo, photoId, marriedStatus, email, phone, emergencyContact, emergencyContactName, relationship,emergencyContactEmail, stateCity, city, neighbourhood, street, number,bloodGroup,healthInsurance,birthDelivery,birthWeight,familyHealthBackground,father,Mother,Smoking,alcohol,allergy};
    
    switch(step){
        case 1: 
            return(
                <>
                {/* First Screen */}
                    <div style={{width: '45vw'}} className="App-header">
                        

                        <Stepper alternativeLabel activeStep={step} connector={<ColorlibConnector />} >
                            {steps.map((label) => (
                                
                                <Step key={label}>
                                    <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        <p className= {styles.p}>Let's Start</p>
                        <FormPersonalDetails 
                            nextStep = {nextStep}
                            previousStep = {previousStep}
                            handleChange = {handleChange} 
                           
                            
                            values = {values}>
                    
                        </FormPersonalDetails>
                    </div>
                </>
            );
        case 2: return(
            <>  
            
                <div style={{width: '45vw'}} className="App-header">
                    <Stepper alternativeLabel activeStep={step} connector={<ColorlibConnector />} >
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                                </Step>
                            ))}
                    </Stepper>
                    <p className= {styles.p}>Contact Detail</p>
                    <FormContactDetails

                        nextStep = {nextStep}
                        previousStep = {previousStep}
                        handleChange = {handleChange} 
                        values = {values}>
                
                    </FormContactDetails>

                </div>
            </>
                        );

        case 3: return(
            <>
                <div style={{width: '45vw'}} className="App-header">
                    <Stepper alternativeLabel activeStep={step} connector={<ColorlibConnector />} >
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                            </Step>
                        ))}
                            
                    </Stepper>
                    <p className= {styles.p}>Adding Address</p>
                    <FormAddressDetails

                        nextStep = {nextStep}
                        previousStep = {previousStep}
                        handleChange = {handleChange} 
                        values = {values}>
        
                    </FormAddressDetails>
                </div>    
            </>
                    );

                    case 4: return (
                        <>
                        <div style={{width: '45vw'}} className="App-header">
                            <Stepper alternativeLabel activeStep={step} connector={<ColorlibConnector />} >
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                                    </Step>
                                ))}
                                    
                            </Stepper>
                            <p className= {styles.p}>Adding Health Information</p>
                            <FormHealthData
        
                                nextStep = {nextStep}
                                previousStep = {previousStep}
                                handleChange = {handleChange} 
                                values = {values}>
                
                            </FormHealthData>
                        </div>    
                    </>


                    );

        default: return(
                    <div>
                        <h1>Não existe</h1>
                    </div>
                    ); 
       
  }

}