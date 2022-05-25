import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dasboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <h2 className='text-3xl text-red-600 font-bold'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                    <li><Link to="/dasboard">My profile</Link></li>
                    <li><Link to="/dasboard/myorder">My orders</Link></li>
                    <li><Link to='/dasboard/review'>Customer review</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dasboard;