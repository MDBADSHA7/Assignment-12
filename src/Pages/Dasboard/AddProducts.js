import { Toast } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
const AddProducts = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    // const imageStorageKey = '29c637c89cff7e39043529065c0af1fe';

    const onSubmit = async data => {
        // const image = data.image[0];
        // const formData = new FormData();
        // formData.append('image', image);
        // const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        // fetch(url, {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(res => res.json())
        //     .then(result => {
        //         console.log(result)
        console.log(data)
        if (data) {
            toast.success('Product added successfully')
        }
        else {
            Toast.errors('Product is not added')
        }
        if (data.success) {
            const product = {
                name: data.name,
                Price: data.price,
                image: data.image
            }
            fetch('https://afternoon-coast-43110.herokuapp.com/product', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('AccessToken')}`
                },
                body: JSON.stringify(product)
            })
                .then(res => res.json())
                .then(output => {
                    console.log(output)
                })
        }
    }
    return (
        <div>
            <h2 className='text-3xl font-bold text-blue-400'>Add some new Products</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Name</span>

                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        class="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label class="label">
                        {errors.name?.type === 'required' && <span class="label-text-alt text-red-600">{errors.name.message}</span>}
                        {errors.name?.type === 'pattern' && <span class="label-text-alt text-red-600">{errors.name.message}</span>}
                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Price</span>

                    </label>
                    <input
                        type="number"
                        placeholder="Your Product Price"
                        class="input input-bordered w-full max-w-xs"
                        {...register("Price", {
                            required: {
                                value: true,
                                message: 'Price is Required'
                            }
                        })}
                    />
                    <label class="label">
                        {errors.price?.type === 'required' && <span class="label-text-alt text-red-600">{errors.email.message}</span>}
                        {errors.price?.type === 'pattern' && <span class="label-text-alt text-red-600">{errors.email.message}</span>}
                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Product Name</span>

                    </label>
                    <input
                        type="text"
                        placeholder="Your Product Name"
                        class="input input-bordered w-full max-w-xs"
                        {...register("Product Name", {
                            required: {
                                value: true,
                                message: 'Product Name is Required'
                            }
                        })}
                    />
                    {/* <select {...register("Product Name")} class="select  w-full max-w-xs">
                        {services.map(service => <option
                            key={service._id}
                            value={service.name}
                        >{service.name}</option>)}
                    </select> */}
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Products Photo</span>

                    </label>
                    <input
                        type="file"
                        placeholder="Your Name"
                        class="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label class="label">
                        {errors.name?.type === 'required' && <span class="label-text-alt text-red-600">{errors.name.message}</span>}
                        {errors.name?.type === 'pattern' && <span class="label-text-alt text-red-600">{errors.name.message}</span>}
                    </label>
                </div>
                <input className='btn w-full max-w-xs text-white' type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProducts;