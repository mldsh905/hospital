import React from 'react';
import {Outlet, redirect} from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import Login from "../Login/Login";

const Layout = () => {
    const user = useSelector((state: RootState) => state.user);
    if (!user.user) return (<Login/>);
    return (
        <div className='flex w-[100vw] '>
            <Sidebar/>
            <div className='w-full'>
                <Topbar/>
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;