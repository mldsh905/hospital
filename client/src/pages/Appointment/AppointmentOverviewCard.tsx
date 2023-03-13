import React from 'react';
import {Interface} from "readline";

interface IProps{
    num:number,
    title:string,
    color:string
}

const AppointmentOverviewCard = ({num, title, color}:IProps) => {
    return (
        <div className={`${color} w-full p-2 md:pl-4 content-center rounded-md md:rounded-none flex md:grid justify-between gap-4 md:pt-[5vh] md:pb-[3vh]`}>
            <span className='font-bold overflow-hidden md:text-4xl shrink'>{num}</span>
            <span className='font-medium'>{title}</span>
        </div>
    );
};

export default AppointmentOverviewCard;