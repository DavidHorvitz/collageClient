import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addLecturer } from "../../../store/actions/lecturer/setLecturer";
import { LecturerForm } from "../../Templates/Forms/LecturerForm";
const AddLecturer = () => {
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

        dispatch(addLecturer(objData))
            .then(() => {
                navigate('/all-lecturers');
            })
            .catch((err) => {
                console.error('Failed to add lecturer:', err);
            });
    };

    return (
        <div>
            <h1>Add Lecturer</h1>
            <LecturerForm
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

export default AddLecturer;
