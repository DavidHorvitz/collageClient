import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getStudentWithCourses } from "../../../store/actions/student/getStudentWithCourses";
import DeleteConfirmation from "../../Templates/DeleteConfirmation/DeleteConfirmation";
import { deleteStudent } from "../../../store/actions/student/deleteStudent";
import DynamicCard from "../../Templates/DynamicCard/DynamicCard";
import { DynamicTable } from "../../Templates/Table/DynamicTable";


export const HandlerAddStudentToCourse = (id) => {
    const navigate = useNavigate();
    navigate(`/add-student-to-course/${id}`)
};


export const StudentData = () => {
    //the state => state.student.students came from the store state in the index file
    const navigate = useNavigate();
    const students = useSelector(state => state.student.students);//like this i can access to the specific students state in the reducer 
    const dispatch = useDispatch();
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [selectedStudentId, setSelectedStudentId] = useState(null);

    const tableData = students.map(student => ({
        Id: student.Id,
        Name: student.Name,
        Phone_Number: student.PhoneNumber,
        Email: student.Email,
    }));


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

    const handleUpdateStudent = (id, data) => {
        navigate(`/edit-student/${id}`, {
            state: {
                data: data,
            }
        });
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
                data={tableData}
                onButtonClickDelete={(student) => handleDeleteStudentItem(student.Id)}
                onButtonClickUpdate={(student) => handleUpdateStudent(student.Id, student)}
                // onButtonClickAdd={(student) => HandlerAddStudentToCourse(student.Id)}
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

