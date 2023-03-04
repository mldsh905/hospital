import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Appointment from "./components/Appointment/Appointment";
import Login from "./components/Login/Login";
import Setting from "./components/Setting";
import Bill from "./components/Bill";
import Home from "./components/Home";
import Medicine from "./components/Medicine";
import AppointmentView from "./components/Appointment/AppointmentView/AppointmentView";

function App() {
  return (
    <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Layout/>}>
            <Route path='appointment' element={<Appointment/>}/>
            <Route path='appointmentview' element={<AppointmentView/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='bill' element={<Bill/>}/>
            <Route path='setting' element={<Setting/>}/>
            <Route path='medicine' element={<Medicine/>}/>
        </Route>
        <Route path='/*' element={<Login/>}/>
    </Routes>
  );
}

export default App;
