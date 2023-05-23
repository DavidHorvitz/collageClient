import React from "react";
import "./deleteConfirmation.css"
const DeleteConfirmation = ({ onCancel, onConfirm }) => {
    return (
        <div className="admin-container">
            <div className="admin-cube">
                <h1>Are you sure you want to delete this item?</h1>
                <button type="submit1" onClick={onConfirm}>Yes</button>
                <button type="submit1" onClick={onCancel}>No</button>
            </div>
        </div>
    );

};

export default DeleteConfirmation;
