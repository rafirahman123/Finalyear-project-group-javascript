import React, { useState, useEffect } from 'react';
import Details from '../Details/Details';
import Group from '../Grup/Group';
import './Student.css';

const Student = () => {
    const [students, setStudents] = useState([]);
    const [newStudent, setNewstudent] = useState([]);
    useEffect(() => {
        fetch('./students.json')
            .then(res => res.json())
            .then(data => setStudents(data))
    }, [])


    const handleEvent = (student) => {
        const groupStudent = [...newStudent, student]
        setNewstudent(groupStudent);
    }
    return (
        <div className="students-container">
            <div className="student">
                {/* <h3>This is student section: {students.length}</h3> */}

                {
                    students.map(student => <Details
                        key={student.name}
                        student={student}
                        handleEvent={handleEvent}
                    ></Details>)
                }

            </div>

            <div className="group-cart">
                <Group
                    newStudent={newStudent}
                ></Group>
            </div>
        </div>
    );
};

export default Student;