import React from 'react';
import { Container, Grid } from '@material-ui/core';
import BannerPage from './BannerPage/BannerPage';
import UserForm from '../UserForm';



const Home = () => {
    return (
      <div style={{width: 'calc(100% - 5rem', padding: '2rem'}}>
<Container style={{marginTop: '1rem', paddingTop: '5rem'}}>
  <Grid container spacing={2}>
  <Grid xs={6} md={6}>
<BannerPage></BannerPage>
  </Grid>
  <Grid  xs={6} md={6}>
    
    <UserForm style={{width: '100vw'}}> </UserForm>
   
  </Grid>

</Grid>
     </Container>
      </div>
     
     

    );
};

export default Home;