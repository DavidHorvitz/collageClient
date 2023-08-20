import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DynamicTable } from "../../Templates/Table/DynamicTable";
import { useNavigate } from "react-router-dom";
import { deleteCourse } from "../../../store/actions/course/deleteCourse";
import DeleteConfirmation from "../../Templates/DeleteConfirmation/DeleteConfirmation";
import DynamicCard from "../../Templates/DynamicCard/DynamicCard";
import { getCourseWithStudents } from "../../../store/actions/course/getCoursesWithStudents";

export const CourseData = () => {
  const coursesArray = useSelector((state) => state.course.courses);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState(null);



  const deleteCourseItem = (id) => {
    setSelectedCourseId(id);
    setConfirmDelete(true);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteCourse(selectedCourseId))
      .then(() => {
        navigate("/all-courses");
      })
      .catch((err) => {
        console.error("Failed to Delete Course:", err);
      })
      .finally(() => {
        setConfirmDelete(false);
        setSelectedCourseId(null);
      });
  };

  const handleCancelDelete = () => {
    setConfirmDelete(false);
    setSelectedCourseId(null);
  };

  const updateCourse = (id, course) => {
    navigate(`/edit-course/${id}`, {
      state: {
        data: course,
      },
    });
  };
  const handlerCourseStudents = (id, data) => {
    dispatch(getCourseWithStudents(id))
      .then(() => {
        navigate(`/course-with-students/${id}`, {
          state: {
            data: data,
            courseId: id
          }
        });
      })
      .catch((err) => {
        console.error('Failed to add student:', err);
      });
  }

  return (
    <div>
      <h1>Courses details</h1>
      <DynamicCard
        data={coursesArray}
        onButtonClickDelete={(course) => deleteCourseItem(course.Id)}
        onButtonClickGetProperties={(course) => handlerCourseStudents(course.Id, course)}

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


