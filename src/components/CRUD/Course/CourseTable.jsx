import { useSelector } from "react-redux";
import { DynamicTable } from "../../Templates/Table/DynamicTable";

export const CourseTable = () => {
  const courses = useSelector(state => state.course.courses);

  return (
    <div>
      <h1>Courses details</h1>
      <DynamicTable data={courses} />
    </div>
  );
};
