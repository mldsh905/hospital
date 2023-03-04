import React from 'react';
import AppointmentOverview from "./AppointmentOverview";
import AppointmentRegisterAndBill from "./AppointmentRegisterAndBill";
import AppointmentDoctorSchedule from "./AppointmentDoctorSchedule";

const Appointment = () => {
    return (
        <div className='grid gap-10 w-full p-4 md:p-10'>
            <AppointmentOverview/>
            <div className='grid gap-2'>
                <span className='font-bold text-xl'>Registration and Bills</span>
                <AppointmentRegisterAndBill/>
            </div>
            <AppointmentDoctorSchedule/>
        </div>
    );
};

export default Appointment;