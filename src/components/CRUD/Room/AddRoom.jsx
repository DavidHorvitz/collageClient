import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Typography } from '@mui/material';
import { addRoom } from "../../../store/actions/room/setRoom";
import { RoomForm } from "../../Forms/RoomForm";

const AddRoom = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ClassNumber, setClassNumber] = useState('');


    const saveData = () => {

        const objData = {
            ClassNumber: ClassNumber,
        };

        dispatch(addRoom(objData))
            .then(() => {
                navigate('/all-rooms');
            })
            .catch((err) => {
                console.error('Failed to add rooms:', err);
            });
    };

    return (
        <div className="w-full ">
            <Typography className="italic  text-[#50d71e]" variant="h3" gutterBottom>
                Add a new Room
            </Typography>
            <RoomForm
                ClassNumber={ClassNumber}
                setClassNumber={setClassNumber}
                saveData={saveData}
            />
        </div>
    );
};

export default AddRoom;
