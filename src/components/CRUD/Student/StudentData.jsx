import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getStudentWithCourses } from "../../../store/actions/student/getStudentWithCourses";
import DeleteConfirmation from "../../Templates/DeleteConfirmation/DeleteConfirmation";
import { deleteStudent } from "../../../store/actions/student/deleteStudent";
import DynamicCard from "../../Templates/DynamicCard/DynamicCard";
// import { DynamicTable } from "../../Templates/Table/DynamicTable";
import { getStudents } from "../../../store/actions/student/getStudent";


export const HandlerAddStudentToCourse = (id) => {
    const navigate = useNavigate();
    navigate(`/add-student-to-course/${id}`)
};


export const StudentData = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //the state => state.student.students came from the store state in the index file
    const studentsArray = useSelector(state => state.student.students);//like this i can access to the specific students state in the reducer 
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [selectedStudentId, setSelectedStudentId] = useState(null);

    const handleDeleteStudentItem = (id) => {
        setSelectedStudentId(id);
        setConfirmDelete(true);
    };

    const handleConfirmDelete = () => {
        dispatch(deleteStudent(selectedStudentId))
            .then(() => {
                navigate("/all-students");
            })
            .catch((err) => {
                console.error("Failed to Delete Course:", err);
            })
            .finally(() => {
                setConfirmDelete(false);
                setSelectedStudentId(null);
            });
    };

    const handleCancelDelete = () => {
        setConfirmDelete(false);
        setSelectedStudentId(null);
    };

    const handlerStudentCourses = (id, data) => {
        dispatch(getStudentWithCourses(id))
            .then(() => {
                navigate(`/student-with-courses/${id}`, {
                    state: {
                        data: data,
                        studentId: id
                    }
                });
            })
            .catch((err) => {
                console.error('Failed to add student:', err);
            });
    }


    return (
        <div>
            <h1>Student details</h1>
            <DynamicCard
                data={studentsArray}
                onButtonClickDelete={(student) => handleDeleteStudentItem(student.Id)}
                onButtonClickGetProperties={(student) => handlerStudentCourses(student.Id, student)}
            />
            {confirmDelete && (
                <DeleteConfirmation
                    onCancel={handleCancelDelete}
                    onConfirm={handleConfirmDelete}
                />
            )}
        </div>
    );
};

