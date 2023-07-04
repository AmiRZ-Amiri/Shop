
import React from 'react';
import './product.css'  

function Productdata({data}) {
    const { productname,productimg} = data;
    return (
        <div className='product'>
            <img src={productimg}/>
            <div className='sub-product'>
                <h3>{productname}</h3>
            </div>
            <button className='addtocartbtn'>Add to Cart</button>
        </div>
    )

}

export default Productdata 