import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';

const { Search } = Input;

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);

const onSearch = (value: string) => console.log(value);

const App: React.FC = () => (
    <div>
        <Space direction="vertical">
            <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
        </Space>
    </div>
);

export default App;