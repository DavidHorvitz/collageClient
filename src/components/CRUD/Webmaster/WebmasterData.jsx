import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DynamicTable } from "../../Templates/Table/DynamicTable";
import { deleteWebmaster } from "../../../store/actions/webmaster/deleteWebmaster";
import DeleteConfirmation from "../../Templates/DeleteConfirmation/DeleteConfirmation";


export const WebmasterData = () => {
    const webmaster = useSelector(state => state.webmaster.webmasters);//like this i can access to the specific students state in the reducer 
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [selectedCourseId, setSelectedCourseId] = useState(null);

    const tableData = webmaster.map(webmaster => ({
        Id: webmaster.Id,
        Name: webmaster.Name,
        Phone_Number: webmaster.PhoneNumber,
        Email: webmaster.Email,
        Password: webmaster.Password
    }));

    const deleteWebmasterItem = (id) => {
        setSelectedCourseId(id);
        setConfirmDelete(true);
    };

    const handleConfirmDelete = () => {
        dispatch(deleteWebmaster(selectedCourseId))
            .then(() => {
                navigate("/all-webmasters");
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


    const updateWebmaster = (id, data) => {
        navigate(`/edit-webmaster/${id}`, {
            state: {
                data: data,
            }
        });
    };

    return (
        <div>
            <h1>Webmaster details</h1>
            <DynamicTable
                data={tableData}
                onButtonClickDelete={(webmaster) => deleteWebmasterItem(webmaster.Id)}
                onButtonClickUpdate={(webmaster) => updateWebmaster(webmaster.Id, webmaster)}
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

