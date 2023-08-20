import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Typography } from '@mui/material';
import { addSyllabus } from "../../../store/actions/syllabus/setSyllabus";
import { SyllabusForm } from "../../Forms/SyllabusForm";

const AddSyllabus = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [Title, setTitle] = useState('');
    const [Description, setDescription] = useState('');
    const [References, setReferences] = useState('');
    const [CourseOutline, setCourseOutline] = useState('');


    const saveData = () => {

        const objData = {
            Title: Title,
            Description: Description,
            References: References,
            CourseOutline,CourseOutline
        };

        dispatch(addSyllabus(objData))
            .then(() => {
                navigate('/all-syllabuses');
            })
            .catch((err) => {
                console.error('Failed to add rooms:', err);
            });
    };

    return (
        <div className="w-full ">
            <Typography className="italic  text-[#50d71e]" variant="h3" gutterBottom>
                Add a new Syllabus
            </Typography>
            <SyllabusForm
                Title={Title}
                setTitle={setTitle}
                Description={Description}
                setDescription={setDescription}
                References={References}
                setReferences={setReferences}
                CourseOutline={CourseOutline}
                setCourseOutline={setCourseOutline}
                saveData={saveData}
            />
        </div>
    );
};

export default AddSyllabus;
