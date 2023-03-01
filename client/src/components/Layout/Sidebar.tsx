import React, { useState } from 'react';
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import {useNavigate} from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Homepage', '/home', <PieChartOutlined />),
    getItem('Appointment', '/appointment', <DesktopOutlined />),
    getItem('Medicine', '/medicine', <ContainerOutlined />),
    getItem('Bill', '/bill', <MailOutlined />),
    getItem('Setting', '/setting', <AppstoreOutlined />),
];

const Sidebar: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    const navigate = useNavigate();

    return (
        <div
            style={{ borderInlineEnd:'3px solid rgba(5,5,5,0.1'}}
            className='h-[100vh]'
        >
            <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <Menu
                defaultSelectedKeys={['1']}
                style={{borderInlineEnd:'0', width:collapsed?80:200}}
                // className='border-8'
                // defaultOpenKeys={['sub1']}
                onClick={(item)=>{
                    navigate(item.key)}}
                mode="inline"
                theme="light"
                inlineCollapsed={collapsed}
                items={items}
            />
        </div>
    );
};

export default Sidebar;