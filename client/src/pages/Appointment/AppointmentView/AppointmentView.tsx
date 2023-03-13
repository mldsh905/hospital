import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import AppointmentViewSub1 from "./AppointmentView_sub1";
import AppointmentView_sub2 from "./AppointmentView_sub2";
import AppointmentViewSub3 from "./AppointmentView_sub3";

const onChange = (key: string) => {
    // console.log(key);
};

const AppointmentView: React.FC = () => {
    return (
        <div className='p-4'>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange}/>
        </div>
)
}

const items: TabsProps['items'] = [
    {
        key: '1',
        label: `Appointment View`,
        children: <AppointmentViewSub1/>,
    },
    {
        key: '2',
        label: `Appointment Detail`,
        children: <AppointmentView_sub2/>,
    },
    {
        key: '3',
        label: `Doctor Schedule`,
        children: <AppointmentViewSub3/>,
    },
];

export default AppointmentView;