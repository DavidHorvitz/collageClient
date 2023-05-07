import React, { useEffect, useState } from "react";
import classes from './model.css';
import ButtonClose from "../../Templates/ButtonClose/ButtonClose";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addStudent } from "../../../store/actions/student/setStudent";
import { isNameValid, isPhoneNumberValid, isEmailValid } from "../../../validation/inputValidation";
const AddStudent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [Name, setName] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [Email, setEmail] = useState('');
    const [close, setClose] = useState(true);

    useEffect(() => {
        if (!close) {
            navigate('/');
        }
    }, [close, navigate]);

    const saveData = () => {
        if (!isNameValid(Name)) {
            alert('Please enter a valid name.');
            return;
        }

        if (!isPhoneNumberValid(PhoneNumber)) {
            alert('Please enter a valid phone number.');
            return;
        }

        if (!isEmailValid(Email)) {
            alert('Please enter a valid email address.');
            return;
        }
        const objData = {
            Name: Name,
            PhoneNumber: PhoneNumber,
            Email: Email,
        };

        dispatch(addStudent(objData))
            .then(() => {
                navigate('/');
            })
            .catch((err) => {
                console.error('Failed to add student:', err);
            });
    };

    return (
        <div className="container">
            <ButtonClose close={setClose} />
            <div className="card">
                <h1 className="card_title">Add Student</h1>
                <p className="card_title-info">Pen By David Horvitz</p>
                <div className="card_form">
                    <div className="input">
                        <input
                            className={`input_field ${!isNameValid(Name) && "invalid"}`}
                            type="text"
                            value={Name}
                            onChange={(e) => setName(e.currentTarget.value)}
                        />
                        <label className="input_label">Student Name</label>
                        {!isNameValid(Name) && (
                            <span className="error">Please enter a valid name.</span>
                        )}
                    </div>

                    <div className="input">
                        <input
                            className={`input_field ${!isPhoneNumberValid(PhoneNumber) && "invalid"}`}
                            type="text"
                            value={PhoneNumber}
                            onChange={(e) => setPhoneNumber(e.currentTarget.value)}
                        />
                        <label className="input_label">Phone Number</label>
                        {!isPhoneNumberValid(PhoneNumber) && (
                            <span className="error">Please enter a valid phone number.</span>
                        )}
                    </div>

                    <div className="input">
                        <input
                            className={`input_field ${!isEmailValid(Email) && "invalid"}`}
                            type="text"
                            value={Email}
                            onChange={(e) => setEmail(e.currentTarget.value)}
                        />
                        <label className="input_label">Email</label>
                        {!isEmailValid(Email) && (
                            <span className="error">Please enter a valid email address.</span>
                        )}
                    </div>

                    <button className="card_button" onClick={() => saveData()}  > Save New Student </button>
                </div>
            </div>
        </div>
    );
};

export default AddStudent;
