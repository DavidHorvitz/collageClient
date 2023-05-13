import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addStudent } from "../../../store/actions/student/setStudent";
import { StudentForm } from "../../Templates/Forms/StudentForm";

const AddStudent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [Name, setName] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [Email, setEmail] = useState('');
 

    const saveData = () => {
    
        const objData = {
            Name: Name,
            PhoneNumber: PhoneNumber,
            Email: Email,
        };

        dispatch(addStudent(objData))
            .then(() => {
                navigate('/all-students');
            })
            .catch((err) => {
                console.error('Failed to add student:', err);
            });
    };

    return (
        <div>
            <h1>Add Student</h1>
            <StudentForm
                Name={Name}
                setName={setName}
                PhoneNumber={PhoneNumber}
                setPhoneNumber={setPhoneNumber}
                Email={Email}
                setEmail={setEmail}
                saveData={saveData}
            />
        </div>
    );
};

export default AddStudent;
