import { useSelector } from "react-redux";
import { DynamicTable } from "../../Templates/Table/DynamicTable";
import { useNavigate } from "react-router-dom";

export const LecturerData = () => {
  const navigate = useNavigate();
  const lecturers = useSelector(state => state.lecturer.lecturers);

  const tableData = lecturers.map(lecturer => ({
    Id: lecturer.Id,
    Name: lecturer.Name,
    Phone_Number: lecturer.PhoneNumber,
    Email: lecturer.Email,
  }));

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

  return (
    <div>
      <h1>Lecturer  details</h1>
      <DynamicTable data={tableData} onButtonClickDelete={(lecturer) => deleteLecturer(lecturer.Id, lecturer)}
        onButtonClickUpdate={(lecturer) => updateLecturer(lecturer.Id, lecturer)} />
    </div>
  );
};
