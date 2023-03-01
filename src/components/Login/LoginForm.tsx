import React from 'react';
import { Button, Checkbox, Form, Input,message, Typography } from 'antd';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUser} from "../../store/userSlice";


const LoginForm: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onFinish = (values: any) => {
        //here to be developed
        console.log('Success:', values);
        dispatch(setUser(values.username));
        navigate('/')
    };

    const onFinishFailed = (errorInfo: any) => {
        message.error('Please fill in all information')
        // console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            // className='w-[30vw]'
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            style={{maxWidth: 600}}
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Typography.Title>Welcome</Typography.Title>
            <Form.Item
                label="Username"
                name="username"
                rules={[{required: true, type: 'email', message: 'Please input a valid email!'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{required: true, message: 'Please input your password!'}]}
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 8, span: 16}}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}

export default LoginForm;