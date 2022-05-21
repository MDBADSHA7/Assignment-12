import React from 'react';

const Product = ({ product }) => {
    const { name, image } = product;
    return (
        <div className='card' style={{ width: "18rem" }}>
            <div> <img src={image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 className="name">{name}</h5>
                    {/* <p className="discription">{discription}</p>
                    <p className="quantity">Quantity: {quantity}</p>
                    <p className="suppliar">Supplier : {supplier}</p>
                    <p className="price">Price : $ {price}</p>
                    <p className="sold">Sold: {sold}</p>
                    <button className='Delivered-button'>Delivered <TrashIcon className='Icon'></TrashIcon></button>
                    <form className='mt-2'>
                        <input className='Restoke-Quantity' type="number" placeholder='Restoke-Quantity' required></input>
                        <br />
                        <input className='Restoke' type="submit" value="Restoke" />
                    </form> */}
                </div>

            </div>

        </div >
    );
};

export default Product;