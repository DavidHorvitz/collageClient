import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { DynamicTable } from "../../Templates/Table/DynamicTable";


export const WebmasterData = () => {
    const navigate = useNavigate();
    const webmaster = useSelector(state => state.webmaster.webmasters);//like this i can access to the specific students state in the reducer 

    const tableData = webmaster.map(webmaster => ({
        Id: webmaster.Id,
        Name: webmaster.Name,
        Phone_Number: webmaster.PhoneNumber,
        Email: webmaster.Email,
        Password: webmaster.Password
    }));

    const handlerEditStudent = (id, data) => {
        navigate(`/edit-webmaster/${id}`, {
            state: {
                data: data,
            }
        });
    };
    const handlerDeleteStudent = (id, data) => {
        navigate(`/delete-webmaster/${id}`, {
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
                onButtonClickDelete={(webmaster) => handlerDeleteStudent(webmaster.Id, webmaster)}
                onButtonClickUpdate={(webmaster) => handlerEditStudent(webmaster.Id, webmaster)} />

        </div>
    );
};

