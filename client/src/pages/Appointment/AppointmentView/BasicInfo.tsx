import React from 'react';
import {DatePicker, Input, Select, Space} from "antd";

const BasicInfo = () => {
    return (
        <div className='grid md:grid-cols-3 md:gap-4'>
            <div className='flex justify-start items-center gap-2'>
                <span>Name</span>
                <Input placeholder="Name" className='w-40'/>
            </div>
            <div className='flex justify-start items-center gap-2'>
                <span>ID</span>
                <Input placeholder="ID" className='w-40'/>
            </div>
            <div className='flex justify-start items-center gap-2'>
                <span>Address</span>
                <Input placeholder="Address" className='w-40'/>
            </div>
            <div className='flex justify-start items-center gap-2'>
                <span>Gender</span>
                <Select
                    defaultValue="select"
                    style={{ width: 160 }}
                    onChange={()=>{}}
                    options={[
                        { value: 'select', label: 'Select', disabled: true },
                        { value: 'male', label: 'Male' },
                        { value: 'female', label: 'Female' },
                        { value: 'other', label: 'Other' },
                    ]}
                />
            </div>
            <div className='flex justify-start items-center gap-2'>
                <span>Nationality</span>
                <Select
                    defaultValue="select"
                    style={{ width: 160 }}
                    onChange={()=>{}}
                    options={[
                        { value: 'select', label: 'Select', disabled: true },
                        { value: 'a', label: 'A' },
                        { value: 'b', label: 'B' },
                        { value: 'c', label: 'C' },
                    ]}
                />
            </div>
            <div className='flex justify-start items-center gap-2'>
                <span className='whitespace-nowrap'>Date of Birth</span>
                <Space direction="vertical">
                    <DatePicker onChange={()=>{}} style={{width:160}}/>
                </Space>
            </div>
            <div className='flex justify-start items-center gap-2 min-w-[300px]'>
                <span className='whitespace-nowrap'>Mobile Number</span>
                <Input placeholder="Mobile Number" className='w-40'/>
            </div>
            <div className='flex justify-start items-center gap-2 min-w-[300px]'>
                <span className='whitespace-nowrap'>Emergency Contact Person</span>
                <Input placeholder="Emergency Contact Person" className='w-40'/>
            </div>
            <div className='flex justify-start items-center gap-2 min-w-[300px]'>
                <span className='whitespace-nowrap'>Emergency Contact Number</span>
                <Input placeholder="Emergency Contact Number" className='w-40'/>
            </div>
        </div>
    );
};

export default BasicInfo;