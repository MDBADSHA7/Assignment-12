import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [order, setOrder] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?customerName=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(data => setOrder(data))
        }
    }, [user])
    return (
        <div>
            <h2>My Order : {order.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Tools</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order.map((a, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{a.customerName}</td>
                                    <td>{a.customerEmail}</td>
                                    <td>{a.purcesName}</td>
                                    <td>{a.price}</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;