import { useSelector } from "react-redux";
import { DynamicTable } from "../../Templates/Table/DynamicTable";
import { useNavigate } from "react-router-dom";

export const CourseTable = () => {
  const courses = useSelector(state => state.course.courses);

  const navigate = useNavigate();
  const deleteCourse = (id, course) => {
    navigate(`/delete-course/${id}`, {
      state: {
        data: course
      }
    });
  };

  const tableData = courses.map(course => ({
    Id: course.Id,
    Course_Name: course.CourseName,
    Starting_Date: course.StartingDate,
    End_Date: course.EndDate,
    Minimum_Passing_Score: course.MinimumPassingScore,
    Maximum_Students :course.MaximumStudents,
    IsReady: course.IsReady,
  }));

  return (
    <div>
      <h1>Courses details</h1>
      <DynamicTable data={tableData} onButtonClickDelete={(course) => deleteCourse(course.Id, course)} />
    </div>
  );
};
