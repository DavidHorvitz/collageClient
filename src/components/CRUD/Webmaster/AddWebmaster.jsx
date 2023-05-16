import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addWebmaster } from "../../../store/actions/webmaster/setWebmaster";
import { WebmasterForm } from "../../Templates/Forms/WebmasterForm";
const AddWebmaster = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [Name, setName] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');


    const saveData = () => {

        const objData = {
            Name: Name,
            PhoneNumber: PhoneNumber,
            Email: Email,
            Password: Password
        };

        dispatch(addWebmaster(objData))
            .then(() => {
                navigate('/all-webmasters');
            })
            .catch((err) => {
                console.error('Failed to add student:', err);
            });
    };

    return (
        <div>
            <h1>Add Student</h1>
            <WebmasterForm
                Name={Name}
                setName={setName}
                PhoneNumber={PhoneNumber}
                setPhoneNumber={setPhoneNumber}
                Email={Email}
                setEmail={setEmail}
                Password={Password}
                setPassword={setPassword}
                saveData={saveData}
            />
        </div>
    );
};

export default AddWebmaster;
