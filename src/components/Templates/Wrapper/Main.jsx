import React, { useEffect, useState } from "react";
import main from './wrapper.css'
import { StudentTable } from "../../StudentTable";
import AddStudent from "../../CRUD/AddStudent";
import EditStudent from "../../CRUD/EditStudent";
import DeleteStudent from "../../CRUD/DeleteStudent";
import { Route, Routes } from "react-router-dom";
import { getStudents } from "../../../redux/actions/getData";
import { useSelector, useDispatch } from 'react-redux';


const Main = () => {
    const dispatch = useDispatch();
    const students = useSelector(state => state.students);

    useEffect(() => {
        dispatch(getStudents());
    }, [dispatch]);
    // In this example, we use the useSelector hook to access the students property from the Redux store. We also use the useEffect hook to dispatch the getStudents action when the component mounts. Finally, we render the list of students in the component.
    
    return (
        <main id="main">
            <Routes>
                <Route exect path="/" element={<StudentTable students={students} />} />
                <Route path="/add-student" element={<AddStudent />} />
                <Route path="/edit-student/:id" element={<EditStudent />} />
                <Route path="/delete-student/:id" element={<DeleteStudent />} />
            </Routes>
        </main>
    )
}
export default Main;
