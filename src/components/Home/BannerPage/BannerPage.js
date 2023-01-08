import React from 'react';
import img from '../../../assets/Capture.PNG';
import img2 from '../../../assets/Capture2.PNG';

const BannerPage = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flext-start', marginTop:'6rem'}}>
            <img style={{textAlign: 'left', marginRight: '25px'}} width="50%" src={img} alt="" />
            <h1 style={{textAlign: 'left'}}>Maintain your healthy life 
and keep your health data update always ... 
</h1>
           <img width="95%" src={img2} alt="" />
        </div>
    );
};

export default BannerPage;