import React, { useEffect } from "react";
import main from './wrapper.css'
import { StudentTable } from "../../StudentTable";
import AddStudent from "../../CRUD/Student/AddStudent";
import EditStudent from "../../CRUD/Student/EditStudent";
import DeleteStudent from "../../CRUD/Student/DeleteStudent";
import { CourseTable } from "../../CRUD/Course/CourseTable";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getStudents } from "../../../store/actions/student/getStudent";


const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStudents());
    }, [dispatch]);

    return (
        <main id="main">
            <Routes>
                <Route exact path="/" element={<StudentTable />} />
                <Route path="/add-student" element={<AddStudent />} />
                <Route path="/edit-student/:id" element={<EditStudent />} />
                <Route path="/delete-student/:id" element={<DeleteStudent />} />
                <Route path="/all-courses" element={<CourseTable />} />
            </Routes>
        </main>
    )
}
export default Main;
