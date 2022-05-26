import React from 'react';
const Service = ({ service, setPurces }) => {
    const { name, image, description, minimumOrderQuantity, availableOrderQuantity, perUnitPrice } = service;
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
                    <label for="booking-modal"
                        onClick={() => setPurces(service)}
                        class="btn modal-button">Purchase</label>
                </div>
            </div>
        </div >
    );
}
export default Service;