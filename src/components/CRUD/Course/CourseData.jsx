import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DynamicTable } from "../../Templates/Table/DynamicTable";
import { useNavigate } from "react-router-dom";
import { deleteCourse } from "../../../store/actions/course/deleteCourse";
import DeleteConfirmation from "../../Templates/DeleteConfirmation/DeleteConfirmation";

export const CourseData = () => {
  const courses = useSelector((state) => state.course.courses);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState(null);

  const tableData = courses.map((course) => ({
    Id: course.Id,
    Course_Name: course.CourseName,
    Starting_Date: course.StartingDate,
    End_Date: course.EndDate,
    Minimum_Passing_Score: course.MinimumPassingScore,
    Maximum_Students: course.MaximumStudents,
    IsReady: course.IsReady,
  }));

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

  return (
    <div>
      <h1>Courses details</h1>
      <DynamicTable
        data={tableData}
        onButtonClickDelete={(course) => deleteCourseItem(course.Id)}
        onButtonClickUpdate={(course) => updateCourse(course.Id, course)}
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


