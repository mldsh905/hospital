import React from 'react';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import {RootState} from "../../store";
import {useDispatch, useSelector} from "react-redux";
import {setUser} from "../../store/userSlice";



const User: React.FC = () => {
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <a
                    target="_blank"
                    onClick={()=>{
                        dispatch(setUser(false));
                    }
                    }
                    // rel="noopener noreferrer"
                    // href="https://www.antgroup.com"
                >
                    Log out
                </a>
            ),
            danger:true
        },
    ];

    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    return (
        <Dropdown menu={{items}}>
            <a onClick={(e) => e.preventDefault()}>
                <Space className='bg-[#1677ff] font-bold text-white px-4 py-2 rounded-md'>
                    {user.user}
                    <DownOutlined/>
                </Space>
            </a>
        </Dropdown>
    );
}

export default User;