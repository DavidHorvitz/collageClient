import React, { useEffect, useState } from "react";
import ButtonClose from "../Templates/ButtonClose/ButtonClose";
import { isNameValid } from "../../validation/inputValidation";
import { useNavigate } from "react-router-dom";
import { Container, TextField } from "@mui/material";
export const SyllabusForm = ({  Title, setTitle, Description, setDescription, References, setReferences,CourseOutline,setCourseOutline, saveData }) => {
    const [close, setClose] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        if (!close) {
            navigate('/all-syllabuses');
        }
    }, [close, navigate]);

    return (
        <div>
            <Container className="space-y-6 shadow-2xl rounded-lg p-4 relative">
                <ButtonClose close={setClose} />
                <div>
                    <TextField fullWidth label="Title"
                        className={`input_field ${!isNameValid(Title) && "invalid"}`}
                        type="text"
                        value={Title}
                        onChange={(e) => setTitle(e.currentTarget.value)}
                    />
                    {!isNameValid(Title) && (
                        <span className="error">Please enter a valid Title.</span>
                    )}
                </div>
                <div>
                    <TextField fullWidth label="Description"
                        className={`input_field ${!isNameValid(Description) && "invalid"}`}
                        type="text"
                        value={Description}
                        onChange={(e) => setDescription(e.currentTarget.value)}
                    />
                    {!isNameValid(Description) && (
                        <span className="error">Please enter a valid Description.</span>
                    )}
                </div>
                <div>
                    <TextField fullWidth label="References"
                        className={`input_field ${!isNameValid(References) && "invalid"}`}
                        type="text"
                        value={References}
                        onChange={(e) => setReferences(e.currentTarget.value)}
                    />
                    {!isNameValid(References) && (
                        <span className="error">Please enter a valid References.</span>
                    )}
                </div>
                <div>
                    <TextField fullWidth label="CourseOutline"
                        className={`input_field ${!isNameValid(CourseOutline) && "invalid"}`}
                        type="text"
                        value={CourseOutline}
                        onChange={(e) => setCourseOutline(e.currentTarget.value)}
                    />
                    {!isNameValid(CourseOutline) && (
                        <span className="error">Please enter a valid CourseOutline.</span>
                    )}
                </div>
                
                <button className="card_button" onClick={() => saveData()}>Save</button>
            </Container>
        </div>
    );
}