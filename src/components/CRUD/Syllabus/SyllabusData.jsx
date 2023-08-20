import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardProperties } from "../../Templates/CardProperties/CardProperties";





export const SyllabusData = () => {
    const SyllabusesArray = useSelector(state => state.syllabus.syllabuses);

    return (
        <div>
            <h1>Syllabus details</h1>
            <CardProperties
                data={SyllabusesArray}
            />
        </div>
    );
};

