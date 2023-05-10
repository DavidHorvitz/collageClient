import { useSelector } from "react-redux";
import { DynamicTable } from "../../Templates/Table/DynamicTable";
import { useNavigate } from "react-router-dom";

export const LecturerTable = () => {
  const lecturers = useSelector(state => state.lecturer.lecturers);
  console.log(lecturers);

  const navigate = useNavigate();
  
  const deleteLecturer = (id, lecturer) => {
    navigate(`/delete-lecturer/${id}`, {
      state: {
        data: lecturer
      }
    });
  };
  const updateLecturer = (id, lecturer) => {
    navigate(`/edit-lecturer/${id}`, {
      state: {
        data: lecturer
      }
    });
  };

  const tableData = lecturers.map(lecturer => ({
    Id: lecturer.Id,
    Name: lecturer.Name,
    PhoneNumber: lecturer.PhoneNumber,
    Email: lecturer.Email,
  }));

  return (
    <div>
      <h1>Lecturer  details</h1>
      <DynamicTable data={tableData} onButtonClickDelete={(lecturer) => deleteLecturer(lecturer.Id, lecturer)} 
      onButtonClickUpdate={(lecturer) => updateLecturer(lecturer.Id, lecturer)}/>
    </div>
  );
};
