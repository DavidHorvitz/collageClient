import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getStudentWithCourses } from "../../../store/actions/student/getStudentWithCourses";
import { DynamicTable } from "../../Templates/Table/DynamicTable";
import DeleteConfirmation from "../../Templates/DeleteConfirmation/DeleteConfirmation";
import { deleteStudent } from "../../../store/actions/student/deleteStudent";


export const StudentData = () => {
    //the state => state.student.students came from the store state in the index file
    const students = useSelector(state => state.student.students);//like this i can access to the specific students state in the reducer 
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [selectedStudentId, setSelectedStudentId] = useState(null);

    const tableData = students.map(student => ({
        Id: student.Id,
        Name: student.Name,
        Phone_Number: student.PhoneNumber,
        Email: student.Email,
    }));

    const deleteStudentItem = (id) => {
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

    const updateStudent = (id, data) => {
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
                    }
                });
            })
            .catch((err) => {
                console.error('Failed to add student:', err);
            });
    }

    const handlerAddStudentToCourse = (id) => {
        navigate(`/add-student-to-course/${id}`)
    };

    return (
        <div>
            <h1>Student details</h1>
            <DynamicTable
                data={tableData}
                onButtonClickDelete={(student) => deleteStudentItem(student.Id)}
                onButtonClickUpdate={(student) => updateStudent(student.Id, student)}
                onButtonClickAdd={(student) => handlerAddStudentToCourse(student.Id)}
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

