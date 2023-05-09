import React from "react";
import './wrapper.css'
import { StudentTable } from "../../StudentTable";
import AddStudent from "../../CRUD/Student/AddStudent";
import EditStudent from "../../CRUD/Student/EditStudent";
import DeleteStudent from "../../CRUD/Student/DeleteStudent";
import { CourseTable } from "../../CRUD/Course/CourseTable";
import { StudentWithCourses } from '../../CRUD/Student/StudentWithCourses';
import AddStudentToCourse from "../../CRUD/Course/AddStudentToCourse";
import AddCourse from "../../CRUD/Course/AddCourse";
import DeleteCourse from "../../CRUD/Course/DeleteCourse";
import { Route, Routes } from "react-router-dom";

const Main = () => {
    return (
        <main id="main">
            <Routes>
                <Route exact path="/" element={<StudentTable />} />
                <Route path="/add-student" element={<AddStudent />} />
                <Route path="/add-course" element={<AddCourse />} />
                <Route path="/edit-student/:id" element={<EditStudent />} />
                <Route path="/delete-student/:id" element={<DeleteStudent />} />
                <Route path="/all-courses" element={<CourseTable />} />
                <Route path="/student-with-courses/:id" element={<StudentWithCourses />} />
                <Route path="/add-student-to-course/:id" element={<AddStudentToCourse />} />
                <Route path="/delete-course/:id" element={<DeleteCourse />} />
            </Routes>
        </main>
    )
}
export default Main;
