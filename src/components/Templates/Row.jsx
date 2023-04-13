import React from "react";
import row from "./row.css"


export function Row1(props) {
    const name = props.name;
    return (
        <div id="row1">{name}</div>
    )
}

export function Row2(props) {
    const phoneNumber = props.phoneNumber
    return (
        <div>{phoneNumber}</div>

    )
}
export function Row3(props) {
    const email = props.email
    return (
        <div>{email} </div>

    )
}
export function Row4(props) {
    const id = props.id
    return (
        <div id="row4">{id}</div>

    )
}