import React, { useEffect, useState } from "react";
import ButtonClose from "../Templates/ButtonClose/ButtonClose";
import { isNameValid } from "../../validation/inputValidation";
import { useNavigate } from "react-router-dom";
import { Container, TextField } from "@mui/material";
export const RoomForm = ({ ClassNumber, setClassNumber,saveData }) => {
    const [close, setClose] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        if (!close) {
            navigate('/all-rooms');
        }
    }, [close, navigate]);

    return (
        <div>
            <Container className="space-y-6 shadow-2xl rounded-lg p-4 relative">
                <ButtonClose close={setClose} />
                <div>
                    <TextField fullWidth label="Class Number"
                        className={`input_field ${!isNameValid(ClassNumber) && "invalid"}`}
                        type="text"
                        value={ClassNumber}
                        onChange={(e) => setClassNumber(e.currentTarget.value)}
                    />
                    {!isNameValid(ClassNumber) && (
                        <span className="error">Please enter a valid Class Number.</span>
                    )}
                </div>
                <button className="card_button" onClick={() => saveData()}>Save</button>
            </Container>
        </div>
    );
}