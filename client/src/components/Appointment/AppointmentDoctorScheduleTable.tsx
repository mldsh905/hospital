import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    key: string;
    name: string;
    Monday: string;
    Tuesday: string;
    Wednesday: string;
    Thursday: string;
    Friday: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Monday',
        // className: 'column-money',
        dataIndex: 'Monday',
        // align: 'right',
    },
    {
        title: 'Tuesday',
        dataIndex: 'Tuesday',
    },
    {
        title: 'Wednesday',
        dataIndex: 'Wednesday',
    },
    {
        title: 'Thursday',
        dataIndex: 'Thursday',
    },
    {
        title: 'Friday',
        dataIndex: 'Friday',
    },
];

const data: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        Monday: 'yes',
        Tuesday: 'no',
        Wednesday:'yes',
        Thursday:'no',
        Friday:'yes'
    },
    {
        key: '2',
        name: 'Jim Green',
        Monday: 'yes',
        Tuesday: 'no',
        Wednesday:'yes',
        Thursday:'no',
        Friday:'yes'
    },
    {
        key: '3',
        name: 'Joe Black',
        Monday: 'yes',
        Tuesday: 'no',
        Wednesday:'yes',
        Thursday:'no',
        Friday:'yes'
    },
];

const AppointmentDoctorScheduleTable: React.FC = () => (
    <Table
        columns={columns}
        dataSource={data}
        bordered
        // title={() => 'Header'}
        // footer={() => 'Footer'}
    />
);

export default AppointmentDoctorScheduleTable;