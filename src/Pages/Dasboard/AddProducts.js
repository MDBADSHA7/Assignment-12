import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
const AddProducts = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const onSubmit = async data => {
        console.log(data)
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
                        <span class="label-text">Email</span>

                    </label>
                    <input
                        type="email"
                        placeholder="Your Email"
                        class="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email'
                            }
                        })}
                    />
                    <label class="label">
                        {errors.email?.type === 'required' && <span class="label-text-alt text-red-600">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-600">{errors.email.message}</span>}
                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Product Name</span>

                    </label>
                    <select {...register("Product Name")} class="select w-full max-w-xs">
                        {services.map(service => <option
                            key={service._id}
                            value={service.name}
                        >{service.name}</option>)}
                    </select>
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