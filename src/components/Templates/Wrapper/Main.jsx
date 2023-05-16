import React from "react";
import './wrapper.css'
import { Route, Routes } from "react-router-dom";
import { MainPage } from "../../MainPage/MainPage";
import { StudentData } from "../../CRUD/Student/StudentData";
import AddStudent from "../../CRUD/Student/AddStudent";
import EditStudent from "../../CRUD/Student/EditStudent";
import DeleteStudent from "../../CRUD/Student/DeleteStudent";
import { CourseData } from "../../CRUD/Course/CourseData";
import { StudentWithCourses } from '../../CRUD/Student/StudentWithCourses';
import AddStudentToCourse from "../../CRUD/Course/AddStudentToCourse";
import AddCourse from "../../CRUD/Course/AddCourse";
import DeleteCourse from "../../CRUD/Course/DeleteCourse";
import EditCourse from "../../CRUD/Course/EditCourse";
import { LecturerData } from "../../CRUD/Lecturer/LecturerData";
import AddLecturer from "../../CRUD/Lecturer/AddLecturer";
import EditLecturer from "../../CRUD/Lecturer/EditLecturer";
import DeleteLecturer from "../../CRUD/Lecturer/DeleteLecturer";
import AddWebmaster from "../../CRUD/Webmaster/AddWebmaster";
import { WebmasterData } from "../../CRUD/Webmaster/WebmasterData";
const Main = () => {
    return (
        <main id="main">
            <Routes>
                <Route exact path="/" element={<MainPage />} />
                <Route path="/all-students" element={<StudentData />} />
                <Route path="/all-courses" element={<CourseData />} />
                <Route path="/all-lecturers" element={<LecturerData />} />
                <Route path="/all-webmasters" element={<WebmasterData />} />

                <Route path="/add-student" element={<AddStudent />} />
                <Route path="/add-lecturer" element={<AddLecturer />} />
                <Route path="/add-course" element={<AddCourse />} />
                <Route path="/add-webmaster" element={<AddWebmaster />} />

                <Route path="/edit-student/:id" element={<EditStudent />} />
                <Route path="/edit-course/:id" element={<EditCourse />} />
                <Route path="/edit-lecturer/:id" element={<EditLecturer />} />

                <Route path="/delete-student/:id" element={<DeleteStudent />} />
                <Route path="/delete-course/:id" element={<DeleteCourse />} />
                <Route path="/delete-lecturer/:id" element={<DeleteLecturer />} />

                <Route path="/student-with-courses/:id" element={<StudentWithCourses />} />
                <Route path="/add-student-to-course/:id" element={<AddStudentToCourse />} />
            </Routes>
        </main>
    )
}
export default Main;
