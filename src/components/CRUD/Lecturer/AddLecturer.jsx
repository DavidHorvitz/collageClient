import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addLecturer } from "../../../store/actions/lecturer/setLecturer";
import { LecturerForm } from "../../Forms/LecturerForm";
const AddLecturer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [Name, setName] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [ImageProfile, setImageProfile] = useState('');
    const [Email, setEmail] = useState('');



    const saveData = () => {

        const objData = {
            Name: Name,
            PhoneNumber: PhoneNumber,
            Email: Email,
            ImageProfile: ImageProfile,
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
                ImageProfile={ImageProfile}
                setImageProfile={setImageProfile}
                Email={Email}
                setEmail={setEmail}
                saveData={saveData}
            />
        </div>
    );
};

export default AddLecturer;
