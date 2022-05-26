import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, Link, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const MyOrders = () => {
    const [order, setOrder] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`https://afternoon-coast-43110.herokuapp.com/booking?customerName=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('AccessToken')}`
                }
            })
                .then(res => {
                    console.log(res)
                    if (res.status === 401) {
                        signOut(auth)
                        localStorage.setItem('AccessToken');
                        navigate('/')
                    }
                    else if (res.status === 403) {
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => setOrder(data))
        }
    }, [user])
    const { email } = useParams;
    const handleDelete = email => {
        fetch(`https://afternoon-coast-43110.herokuapp.com/user/${email}}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    toast.success('product is deleted successfully')
                }
                else {
                    toast.error('You can not delete product')
                }
            })
    }
    return (
        <div>
            <h2>My Order : {order.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Customer Name</th>
                            <th>Payment</th>
                            <th>Tools</th>
                            <th>Delate Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order.map((a, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{a.customerName}</td>
                                    <td>{(a.price && !a.pay) && <Link to={`/dasboard/payment/${a._id}`}><button class="btn btn-secondary">Pay Now</button></Link>}</td>
                                    <td>{a.purcesName}</td>
                                    {/* <td>{a.purcesName && <Link to={``}><button
                                        className="btn btn-secondary"
                                    ></button></Link>}</td> */}
                                    <td><button
                                        onClick={() => handleDelete(email)}
                                        class="btn btn-secondary">Delete</button></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;