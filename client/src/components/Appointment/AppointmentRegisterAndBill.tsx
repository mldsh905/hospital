import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import AppointmentRegisterAndBill_Register from "./AppointmentRegisterAndBill_Register";
import AppointmentRegisterAndBill_Bill from "./AppointmentRegisterAndBill_Bill";

const onChange = (key: string) => {
    // console.log(key);
};

const items: TabsProps['items'] = [
    {
        key: '1',
        label: `Registration`,
        children: <AppointmentRegisterAndBill_Register/>,
    },
    {
        key: '2',
        label: `To be charged`,
        children: <AppointmentRegisterAndBill_Bill/>,
    },
];

const App: React.FC = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;

export default App;