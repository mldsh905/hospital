import React from 'react';
import {DatePicker, Input, Space, TimePicker} from "antd";

const RegistrationInformation = () => {
    return (
        <div className='grid md:grid-cols-3 md:gap-4'>
            <div className='flex justify-start items-center gap-2'>
                <span>Doctor</span>
                <Input placeholder="Doctor" className='w-40'/>
            </div>
            <div className='flex justify-start items-center gap-2'>
                <span className='whitespace-nowrap'>Date</span>
                <Space direction="vertical">
                    <DatePicker onChange={()=>{}} style={{width:160}}/>
                </Space>
            </div>
            <div className='flex justify-start items-center gap-2'>
                <span className='whitespace-nowrap'>Time</span>
                <TimePicker.RangePicker />
            </div>
            <div className='flex justify-start items-center gap-2'>
                <span>Issue</span>
                <Input placeholder="Issue" className='w-40'/>
            </div>
            <div className='flex justify-start items-center gap-2 md:col-span-2'>
                <span>Other</span>
                <Input placeholder="Other" className='w-40 md:w-full'/>
            </div>
        </div>
    );
};

export default RegistrationInformation;