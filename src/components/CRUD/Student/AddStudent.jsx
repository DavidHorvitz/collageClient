import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addStudent } from "../../../store/actions/student/setStudent";
import { StudentForm } from "../../Forms/StudentForm";
import { Typography } from '@mui/material';

const AddStudent = () => {
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

        dispatch(addStudent(objData))
            .then(() => {
                navigate('/all-students');
            })
            .catch((err) => {
                console.error('Failed to add student:', err);
            });
    };

    return (
        <div className="w-full ">
            <Typography className="italic  text-[#50d71e]" variant="h3" gutterBottom>
                Add a new  Student
            </Typography>
            <StudentForm
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

export default AddStudent;
