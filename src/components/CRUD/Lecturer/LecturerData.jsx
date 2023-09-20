import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { DynamicTable } from "../../Templates/Table/DynamicTable";
import { useNavigate } from "react-router-dom";
import { deleteLecturer } from "../../../store/actions/lecturer/deleteLecturer";
import DeleteConfirmation from "../../Templates/DeleteConfirmation/DeleteConfirmation";
import { useState } from "react";
import DynamicCard from "../../Templates/DynamicCard/DynamicCard";


export const LecturerData = () => {
  const lecturersArray = useSelector(state => state.lecturer.lecturers);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [confirmDelete, setConfirmDelete] = useState(false);
  const [selectedLecturerId, setSelectedLecturerId] = useState(null);

  // const tableData = lecturersArray.map(lecturer => ({
  //   Id: lecturer.Id,
  //   Name: lecturer.Name,
  //   Phone_Number: lecturer.PhoneNumber,
  //   Email: lecturer.Email,
  //   ImageProfile: lecturer.ImageProfile
  // }));

  const deleteLecturerItem = (id) => {
    setSelectedLecturerId(id);
    setConfirmDelete(true);
  };
  const handleConfirmDelete = () => {
    console.log("Confirm delete called");
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
      <DynamicCard
        data={lecturersArray}
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


