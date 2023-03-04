import React from 'react';
import AppointmentOverviewCard from "./AppointmentOverviewCard";

const overviewInfo = [
    {num:13, color:'bg-[#86dfb6]', title:'visits today'},
    {num:45, color:'bg-[#82d2df]', title:'new appointment'},
    {num:43, color:'bg-[#9bafec]', title:'new patient'},
    {num:12322.09, color:'bg-[#a9a1e8]', title:'revenue today'}
]

const AppointmentOverview = () => {
    return (
        <div className='grid gap-4 w-full'>
            <div className='grid gap-1 md:grid-cols-[repeat(auto-fit,minmax(150px,1fr))]'>
                {overviewInfo.map(
                    (e,index)=> {
                        return <AppointmentOverviewCard key={index} num={e.num} title={e.title} color={e.color}/>
                    }
                )}
            </div>
            <img src="/ad.jpg" alt="advertisement" className='w-full rounded-md object-cover max-h-20'/>
        </div>
    )
};

export default AppointmentOverview;