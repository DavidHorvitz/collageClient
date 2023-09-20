import React, { useEffect, useState } from "react";
import ButtonClose from "../Templates/ButtonClose/ButtonClose";
import { isNameValid, isPhoneNumberValid, isEmailValid, isPasswordValid } from "../../validation/inputValidation";
import { useNavigate } from "react-router-dom";
import { Container, TextField } from "@mui/material";
export const WebmasterForm = ({ Name, setName, PhoneNumber, setPhoneNumber, ImageProfile, setImageProfile, Email, setEmail, Password, setPassword, saveData }) => {
    const [close, setClose] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        if (!close) {
            navigate('/all-webmasters');
        }
    }, [close, navigate]);

    return (
        <div >
            <Container className="space-y-6 shadow-2xl rounded-lg p-4 relative">
                <ButtonClose close={setClose} />
                <div>
                    <TextField fullWidth label="Name"
                        className={`input_field ${!isNameValid(Name) && "invalid"}`}
                        type="text"
                        value={Name}
                        onChange={(e) => setName(e.currentTarget.value)}
                    />
                    {!isNameValid(Name) && (
                        <span className="error">Please enter a valid Name.</span>
                    )}
                </div>
                <div>
                    <TextField fullWidth label="Phone Number"
                        className={`input_field ${!isPhoneNumberValid(PhoneNumber) && "invalid"}`}
                        type="text"
                        value={PhoneNumber}
                        onChange={(e) => setPhoneNumber(e.currentTarget.value)}
                    />
                    {!isPhoneNumberValid(PhoneNumber) && (
                        <span className="error">Please enter a valid phone number.</span>
                    )}
                </div>
                <div>
                    <TextField fullWidth label="Image Profile Url" id="fullWidth"
                        className={`input_field ${ImageProfile} `}
                        type="text"
                        value={ImageProfile}
                        onChange={(e) => setImageProfile(e.currentTarget.value)}
                    />
                    {/* {!isEmailValid(Email) && (
                    <span className="error">Please enter a valid email address.</span>
                )} */}
                </div>
                <div>
                    <TextField fullWidth label="Email" id="fullWidth"
                        className={`input_field ${!isEmailValid(Email) && "invalid"}`}
                        type="text"
                        value={Email}
                        onChange={(e) => setEmail(e.currentTarget.value)}
                    />
                    {!isEmailValid(Email) && (
                        <span className="error">Please enter a valid email address.</span>
                    )}
                </div>
                <div >
                    <TextField fullWidth label="Password" id="fullWidth"
                        className={`input_field ${!isPasswordValid(Password) && "invalid"}`}
                        type="text"
                        value={Password}
                        onChange={(e) => setPassword(e.currentTarget.value)}
                    />
                    {!isPasswordValid(Password) && (
                        <span className="error">Please enter a valid Password address.</span>
                    )}
                </div>
                <button className="card_button" onClick={() => saveData()}>Save</button>
            </Container>
        </div>
    );
}

