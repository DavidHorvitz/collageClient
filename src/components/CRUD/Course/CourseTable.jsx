import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DynamicTable } from "../../Templates/Table/DynamicTable";

export const CourseTable = () => {
   
  
    const courses = useSelector(state => state.courses);
    console.log(courses);
  if (!courses) {
    return null;
  }

  return (
    <div>
      <h1>Courses details</h1>
      <DynamicTable data={courses} />
    </div>
  );
};
