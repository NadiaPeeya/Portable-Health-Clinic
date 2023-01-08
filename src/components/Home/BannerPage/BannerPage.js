import React from 'react';
import img from '../../../assets/Capture.PNG';
import img2 from '../../../assets/Capture2.PNG';

const BannerPage = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop:'1rem'}}>
            <img src={img} alt="" />
           <img width="90%" src={img2} alt="" />
        </div>
    );
};

export default BannerPage;