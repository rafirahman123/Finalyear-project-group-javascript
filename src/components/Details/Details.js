import React from 'react';
import './Details.css';

const Details = (props) => {
    const { name, id, waiver, address, img } = props.student;
    return (
        <div className="student-details">
            <div>
                <img className="student-image" src={img} alt="" />
                <h3>Name:{name}</h3>
                <p>Waiver:{waiver}</p>
                <p>Adress:{address}</p>
                <p><small>Id:{id}</small></p>
                <button className="cart-button">add to cart</button>
            </div>
        </div>

    );
};

export default Details;