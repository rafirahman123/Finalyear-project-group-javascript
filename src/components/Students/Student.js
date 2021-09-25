import React, { useState, useEffect } from 'react';
import Details from '../Details/Details';
import Group from '../Grup/Group';
import './Student.css';

const Student = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('./students.json')
            .then(res => res.json())
            .then(data => setStudents(data))
    }, [])
    return (
        <div className="students-container">
            <div className="student">
                {/* <h3>This is student section: {students.length}</h3> */}

                {
                    students.map(student => <Details
                        key={student.name}
                        student={student}
                    ></Details>)
                }

            </div>

            <div className="group-cart">
                <Group></Group>
            </div>
        </div>
    );
};

export default Student;