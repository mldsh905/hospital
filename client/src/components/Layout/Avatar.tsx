import { UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, Space } from 'antd';
import React, { useState } from 'react';
import { Button, Drawer } from 'antd';

const Portrait: React.FC = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Space size={24} onClick={showDrawer}>
                <Badge size='small' count={1}>
                    <Avatar shape="circle" icon={<UserOutlined />} />
                </Badge>
            </Space>
            <Drawer title="Notifications" placement="right" onClose={onClose} open={open}>
                <p>Some contents...</p>
            </Drawer>
        </>
    );
};


export default Portrait;