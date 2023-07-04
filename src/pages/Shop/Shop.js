import React from 'react';
import Product from '../../ProductList';
import Productdata from './product';

function Shop() {
    return(
        <div className='shop'>
            <div className='shopTitle'><h1>Popular Shop</h1></div>
            <div className='products'>
                {Product.map((product) => (
                    <Productdata data={product}/>
                ))}
            </div>
        </div>

    )
}

export default Shop