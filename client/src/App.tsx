import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Appointment from "./pages/Appointment/Appointment";
import Login from "./pages/Login/Login";
import Setting from "./pages/Setting";
import Bill from "./pages/Bill";
import Home from "./pages/Home";
import Medicine from "./pages/Medicine";
import AppointmentView from "./pages/Appointment/AppointmentView/AppointmentView";
import AppointmentOverview from "./pages/Appointment/AppointmentOverview";
import Test from "./pages/Test";
import Test1 from "./pages/Test1";

function App() {
  return (
    <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Layout/>}>
            <Route path='appointment' element={<Appointment/>}></Route>
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
