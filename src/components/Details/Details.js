import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import './Details.css';

const Details = (props) => {
    const { name, id, waiver, address, img, university } = props.student;
    const icon = <FontAwesomeIcon icon={faUsers} />
    return (
        <div className="student-details">
            <div>
                <img className="student-image" src={img} alt="" />

                <h3>Name:{name}</h3>
                <h4>University:{university}</h4>
                <p>Waiver:{waiver}</p>
                <p>Adress:{address}</p>
                <p><small>Id:{id}</small></p>
                <button onClick={() => props.handleEvent(props.student)} className="cart-button">{icon}  Add to group</button>
            </div>
        </div>

    );
};

export default Details;