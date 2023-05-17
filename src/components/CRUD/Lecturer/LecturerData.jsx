import { useDispatch, useSelector } from "react-redux";
import { DynamicTable } from "../../Templates/Table/DynamicTable";
import { useNavigate } from "react-router-dom";
import { deleteLecturer } from "../../../store/actions/lecturer/deleteLecturer";
import DeleteConfirmation from "../../Templates/DeleteConfirmation/DeleteConfirmation";
import { useState } from "react";


export const LecturerData = () => {
  const lecturers = useSelector(state => state.lecturer.lecturers);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [confirmDelete, setConfirmDelete] = useState(false);
  const [selectedLecturerId, setSelectedLecturerId] = useState(null);

  const tableData = lecturers.map(lecturer => ({
    Id: lecturer.Id,
    Name: lecturer.Name,
    Phone_Number: lecturer.PhoneNumber,
    Email: lecturer.Email,
  }));

  const deleteLecturerItem = (id) => {
    setSelectedLecturerId(id);
    setConfirmDelete(true);
  };
  const handleConfirmDelete = () => {
    dispatch(deleteLecturer(selectedLecturerId))
      .then(() => {
        navigate("/all-lecturers");
      })
      .catch((err) => {
        console.error("Failed to Delete Course:", err);
      })
      .finally(() => {
        setConfirmDelete(false);
        setSelectedLecturerId(null);
      });
  };
  const handleCancelDelete = () => {
    setConfirmDelete(false);
    setSelectedLecturerId(null);
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
      <h1>Lecturer details</h1>
      <DynamicTable
        data={tableData}
        onButtonClickDelete={(lecturer) => deleteLecturerItem(lecturer.Id)}
        onButtonClickUpdate={(lecturer) => updateLecturer(lecturer.Id, lecturer)}
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

