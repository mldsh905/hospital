import React from 'react';
import AppointmentDoctorScheduleTable from "./AppointmentDoctorScheduleTable";

const AppointmentDoctorSchedule = () => {
    return (
        <div className='grid gap-5'>
            <span className='font-bold text-xl'>Schedule of Doctors</span>
            <AppointmentDoctorScheduleTable/>
        </div>
    );
};

export default AppointmentDoctorSchedule;