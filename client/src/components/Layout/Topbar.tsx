import React from 'react';
import User from "./User";
import Portrait from "./Avatar";

const Topbar = () => {
    return (
        <div className='flex gap-4 items-center justify-end pt-1 h-12 px-2 shadow-md'>
            <Portrait/>
            <User/>
        </div>
    );
};

export default Topbar;