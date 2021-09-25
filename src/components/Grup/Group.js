import React from 'react';
import Showname from '../Showname/Showname';
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
            <h3>Student count:{newStudent.length}</h3>
            <h3>Total waiver:{total}</h3>
            <h3>Group member name:</h3>
            <div className="group-member">
                {
                    newStudent.map(sStudent => <Showname
                        sStudent={sStudent}
                    ></Showname>)
                }

            </div>

        </div>
    );
};

export default Group;