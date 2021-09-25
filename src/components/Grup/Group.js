import React from 'react';
import './Group.css';

const Group = (props) => {
    const { newStudent } = props;
    let total = 0;
    for (const student of newStudent) {
        total = total + student.waiver;
    }
    let sName = [];
    for (const student of newStudent) {
        sName = sName + student.name;
    }
    return (
        <div className="cart-details">
            <h3>Student Number:{newStudent.length}</h3>
            <h3>Total waiver:{total}</h3>
            <div className="group-member">
                <h4>Group member:<br /> {sName} </h4>
            </div>

        </div>
    );
};

export default Group;