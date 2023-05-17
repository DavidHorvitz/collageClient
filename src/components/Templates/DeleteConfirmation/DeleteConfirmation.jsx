import React from "react";
const DeleteConfirmation = ({ onCancel, onConfirm }) => {
    return (
        <div className="login-container">
            <div className="login-cube">
                <h1>Are you sure you want to delete this item?</h1>
                <button type="submit" onClick={onConfirm}>Yes</button>
                <button type="submit" onClick={onCancel}>No</button>
            </div>
        </div>
    );

};

export default DeleteConfirmation;
