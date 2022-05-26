import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth'
import useAdmin from '../../Hooks/UseAdmin';
import auth from '../../firebase.init';
const Dasboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
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
                    {!admin && <li><Link to="/dasboard/myorder">My orders</Link></li>}
                    {!admin && <li><Link to='/dasboard/review'>Customer review</Link></li>}
                    {admin && <li><Link to='/dasboard/manageallproducts'>Manage All Product</Link></li>}
                    {admin && <li><Link to='/dasboard/makeadmin'>Make Admin</Link></li>}
                    {admin && <li><Link to='/dasboard/addproducts'>Add a New Products</Link></li>}
                    {admin && <li><Link to='/dasboard/manageproducts'>Manage Products</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dasboard;