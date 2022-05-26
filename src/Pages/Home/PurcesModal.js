import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import { toast } from 'react-toastify';
const PurcesModal = ({ purces, setPurces }) => {
    const { _id, name, image, description, minimumOrderQuantity, availableOrderQuantity, perUnitPrice } = purces;
    const [user, loading, error] = useAuthState(auth);
    const handlePurchase = event => {
        event.preventDefault()
        console.log(name, perUnitPrice);
        const booking = {
            purcesID: _id,
            purcesName: name,
            purcesImage: image,
            purcesDescription: description,
            purcesMinimumOrderQuantity: minimumOrderQuantity,
            purcesAvailAbleQuantity: availableOrderQuantity,
            customerName: user.displayName,
            customerEmail: user.email,
            price: perUnitPrice,
            phone: event.target.phone.value,
        }
        fetch('https://afternoon-coast-43110.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })

            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast("Purchase is ready")
                }
                else {
                    toast.error("Youn already take a purchase")
                }
                setPurces(null);
            })
    }


    return (
        <div className=''>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-center text-red-700">PURCHASE</h3>
                    <h3 class="font-bold text-lg text-center">Purchase for : {name}</h3>
                    <section class="hero container max-w-screen-lg mx-auto text-center pb-10">
                        <div class="">
                            <img src={image} height="550" alt='' />
                        </div>
                    </section>
                    <p class="font-bold text-lg text-center py-4">Description : {description}</p>
                    <p class="font-bold text-lg text-center py-4">Minimum Order Quantity : {minimumOrderQuantity}</p>
                    <p class="font-bold text-lg text-center py-4">Available Quantity : {availableOrderQuantity}</p>
                    <p class="font-bold text-lg text-center py-4">Price : {perUnitPrice}/Pic</p>
                    <br />
                    <h2 className='text-3xl font-bold text-blue-900 text-center mb-10'>Please fill up this form.</h2>
                    <form onSubmit={handlePurchase} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input type="text" name="name" value={name} class="input input-bordered w-full max-w-xs text-lg font-bold text-blue-800" />
                        <input type="text" name="name" disabled value={user?.displayName || ''} class="input input-bordered w-full max-w-xs text-lg font-bold" />
                        <input type="email" name="email" disabled value={user?.email || ''} class="input input-bordered w-full max-w-xs text-lg font-bold" />
                        <input type="number" name="phone" placeholder="Phone Number" class="input input-bordered w-full max-w-xs text-lg font-bold text-red-600" />
                        <input type="number" name="Quantity" placeholder="Order Quantity" class="input input-bordered w-full max-w-xs text-lg font-bold text-red-600" />
                        <input type="Submit" value="Submit" class="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PurcesModal;