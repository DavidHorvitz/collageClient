export const isCourseNameValid = (name) => {
    const regex = /^[a-zA-Z0-9\s]{2,30}$/;
    return regex.test(name);
  };
  
  export const isMinimumPassingScoreValid = (score) => {
    const regex = /^[0-9]{2,3}$/;
    return regex.test(score);
  };
  
  export const isMaximumStudentsValid = (students) => {
    const regex = /^[0-9]{2,3}$/;
    return regex.test(students);
  };
  
  export const isDateValid = (date) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(date);
  };
  
//   const isIntegerValid = (value) => {
//     const regex = /^[0-9]+$/;
//     return regex.test(value);
//   };
  
 export const isBooleanValid = (value) => {
    return typeof value === 'boolean';
  };
  
  export const isCourseDataValid = (courseData) => {
    const {
      CourseName,
      StartingDate,
      EndDate,
      MinimumPassingScore,
      MaximumStudents,
      IsReady,
    } = courseData;
  
    return (
      isCourseNameValid(CourseName) &&
      isDateValid(StartingDate) &&
      isDateValid(EndDate) &&
      isMinimumPassingScoreValid(MinimumPassingScore) &&
      isMaximumStudentsValid(MaximumStudents) &&
      isBooleanValid(IsReady)
    );
  };
  