import React from 'react';
import image from '../../Images/service-1.jpg';
import image1 from '../../Images/service-2.jpg';
import image2 from '../../Images/service-3.jpg';
import image3 from '../../Images/service-4.jpg';
import image4 from '../../Images/service-5.jpg';
import image5 from '../../Images/service-6.jpg';

const OurService = () => {
    return (
        <div>
            <h2 className='text-center text-blue-500 font-bold text-2xl mb-5'>Our Service</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                < div class="card w-96 bg-red-300 shadow-xl" >
                    <figure class="px-10 pt-10">
                        <img src={image} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <p>He is Devid.He is one of the best expert person of my company.</p>
                    </div>
                </div >
                <div class="card w-96 bg-red-300 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={image1} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <p>He is Jon.He is very skill to solve compresser problem.</p>
                    </div>
                </div>
                <div class="card w-96 bg-red-300 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={image2} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <p>He is Kajol.He is junior enginner of our company.</p>
                    </div>
                </div>
                <div class="card w-96 bg-red-300 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={image3} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <p>It is very common problen of refrigerator</p>
                    </div>
                </div>
                <div class="card w-96 bg-red-300 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={image4} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div class="card w-96 bg-red-300 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={image5} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default OurService;