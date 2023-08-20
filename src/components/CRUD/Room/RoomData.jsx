import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DeleteConfirmation from "../../Templates/DeleteConfirmation/DeleteConfirmation";
import DynamicCard from "../../Templates/DynamicCard/DynamicCard";
import { DynamicTable } from "../../Templates/Table/DynamicTable";





export const RoomData = () => {
    const navigate = useNavigate();
    const RoomsArray = useSelector(state => state.room.rooms);

    return (
        <div>
            <h1>Rooms details</h1>
            <DynamicCard
                data={RoomsArray}
            />
        </div>
    );
};

