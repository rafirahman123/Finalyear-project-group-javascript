import React from 'react';
import './Showname.css';

const Showname = (props) => {
    const { name, img } = props.sStudent
    return (
        <div>
            <p>Name:{name}</p>
            <img className="grop-img" src={img} alt="" />
        </div>
    );
};

export default Showname;