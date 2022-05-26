import React, { useEffect, useState } from 'react';

const ManageAllProducts = () => {
    const [manage, setManage] = useState([]);
    useEffect(() => {
        fetch('https://afternoon-coast-43110.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setManage(data));
    }, [])
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            manage.map((a, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{a.name}</td>
                                    <td><div class="avatar">
                                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={a.image} alt='' />
                                        </div>
                                    </div></td>
                                    <td><button class="btn btn-secondary">Delete</button></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllProducts;