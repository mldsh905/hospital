import React, {Suspense} from 'react';
import AppointmentOverview from "./AppointmentOverview";
import AppointmentRegisterAndBill from "./AppointmentRegisterAndBill";
// import AppointmentDoctorSchedule from "./AppointmentDoctorSchedule";

const AppointmentDoctorSchedule = React.lazy(() => import('./AppointmentDoctorSchedule'));

const Appointment = () => {
    return (
        <div className='grid gap-10 w-full p-4 md:p-10'>
            <AppointmentOverview/>
            <div className='grid gap-2'>
                <span className='font-bold text-xl'>Registration and Bills</span>
                <AppointmentRegisterAndBill/>
            </div>
            <Suspense fallback={<div>loading...</div>}>
                <AppointmentDoctorSchedule/>
            </Suspense>
        </div>
    )
};

export default Appointment;