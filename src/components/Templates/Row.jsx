import React from "react";
import row from "./row.css"


export function Row1(props) {
    const name = props.name
    return (
        <div>{name}</div>
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