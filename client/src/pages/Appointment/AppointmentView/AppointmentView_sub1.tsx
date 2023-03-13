import React from 'react';
import RegistrationInfo from "./RegistrationInfo";
import BasicInfo from "./BasicInfo";
import RegistrationInformation from "./RegistrationInformation";
import History from "./History";

const AppointmentViewSub1 = () => {
    return (
        <div className='grid gap-10 mt-4'>
            <div className='grid gap-2'>
                <span className='font-bold text-xl'>New Registration Information</span>
                <RegistrationInfo/>
            </div>
            <div className='grid gap-2'>
                <span className='font-bold text-xl'>Basic Information</span>
                <BasicInfo/>
            </div>
            <div className='grid gap-2'>
                <span className='font-bold text-xl'>Registration Information</span>
                <RegistrationInformation/>
            </div>
            <div className='grid gap-2'>
                <span className='font-bold text-xl'>History</span>
                <History/>
            </div>
        </div>
    );
};

export default AppointmentViewSub1;