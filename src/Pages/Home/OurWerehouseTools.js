import React from 'react';
import image1 from '../../Images/w-1.jpg';
import image2 from '../../Images/w-2.jpg';
import image3 from '../../Images/w-3.jpg';
import image4 from '../../Images/w-4.jpg';
import image5 from '../../Images/w-5.jpg';
import image6 from '../../Images/w-61.jpg';
const OurWerehouseTools = () => {
    return (
        <div>
            <h2 className='text-3xl text-blue-700 font-bold mb-5 text-center'>Our Manufacture Tools Werehouse</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div class="card w-96 bg-orange-300 shadow-xl">
                    <figure><img src={image1} alt="Shoes" /></figure>
                    <div class="card-body">
                        <p className='font-bold text-lg text-blue-500'>This is our Large part of refrigarator tools.It was made by Bangladesh.It is very cheap.</p>
                    </div>
                </div>
                <div class="card w-96 bg-red-300 shadow-xl">
                    <figure><img src={image2} alt="Shoes" /></figure>
                    <div class="card-body">
                        <p className='font-bold text-lg text-blue-500'>This is our Large part of refrigarator tools.It was made by Bangladesh.It is not matchinary parts.</p>
                    </div>
                </div>
                <div class="card w-96 bg-blue-200 shadow-xl">
                    <figure><img src={image3} alt="Shoes" /></figure>
                    <div class="card-body">
                        <p className='font-bold text-lg text-blue-500'>This is our expensive part of refrigarator tools.It was made by Malayshia.It is very good products.</p>
                    </div>
                </div>
                <div class="card w-96 bg-red-300 shadow-xl">
                    <figure><img src={image4} alt="Shoes" /></figure>
                    <div class="card-body">
                        <p className='font-bold text-lg text-blue-500'>This is our walton brand refrigarator tools werehouse.It is our own countries brand.</p>
                    </div>
                </div>
                <div class="card w-96 bg-blue-200 shadow-xl">
                    <figure><img src={image5} alt="Shoes" /></figure>
                    <div class="card-body">
                        <p className='font-bold text-lg text-red-500'>This is our service man who load refrigarator tools.He is ready to help coustomer.</p>
                    </div>
                </div>
                <div class="card w-96 bg-orange-300 shadow-xl">
                    <figure><img src={image6} alt="Shoes" /></figure>
                    <div class="card-body">
                        <p className='font-bold text-lg text-blue-500'>This is our small part of refrigarator tools.It was import from USA.It is very coastly.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurWerehouseTools;