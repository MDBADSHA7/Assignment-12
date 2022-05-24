import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { useHistory } from "react-router-dom";

const Service = ({ service }) => {
    const { name, image, description, minimumOrderQuantity, availableOrderQuantity, perUnitPrice } = service;

    // const history = useHistory();
    // const navigateTo = () => history.push('/purchase');
    const navigate = useNavigate;
    const navigatePurchase = event => {
        navigate('/purchase')
    }
    return (
        <div class="card w-96 bg-orange-400 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={image} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">Name : {name}</h2>
                <h2 class="card-title">Description : {description}</h2>
                <h2 class="card-title">Minimum order quantity : {minimumOrderQuantity}</h2>
                <h2 class="card-title">Available quantity : {availableOrderQuantity}</h2>
                <h2 class="card-title">Per unit price: $ {perUnitPrice}</h2>
                <div class="card-actions">
                    <button onClick={navigatePurchase} class="btn btn-primary">Purchase</button>
                </div>
            </div>
        </div >
    );
};

export default Service;