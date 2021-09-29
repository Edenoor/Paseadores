import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

function FormWalker(){
    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setError] = useState({});

const [input, setInput] = useState({
    image : "",
    dni : "",
    name : "",
    surname : "",
    birth_day : "",
    phone : "" ,
    email : "",
    password : "",
    service : "",
})

function validate(input) {
    const errors = {};
    if (!input.name) {
        errors.name = "Required";
    } 
    if (!input.email) {
        errors.email = "Required";
    }
    else if (!/\S+@\S+\.\S+/(input.email)) { ///^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test
      errors.email = "Invalid email address";
    }
    if (!input.password) {
        errors.password = "Required";
    }
    else if (`${input.password}`.length < 7){
      errors.password =
        "Password must be larger than 7 characters";
    }
    return errors;
}

function handleChange(e){
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })
    setError(validate({
        ...input,
        [e.target.name] : e.target.value
    }))
}

function handleSubmit(e){
    e.preventDefault()
    dispatch((input))
    alert("")
    setInput({
        image : "",
        dni : "",
        name : "",
        surname : "",
        birth_day : "",
        phone : "" ,
        email : "",
        password : "",
        service : "",
    })
}

return (
    <div className = {style.total}>
        <form >
            <div>
                <label> Image Profile : </label>
                    <input 
                        type="file" 
                        accept=".jpg, .png, .pdf"
                        value = {input.image}
                    />
            </div>
            <div>
                <label> Photo of identity document in front : </label>
                    <select>
                        <option> DNI </option>
                        <option> Cédula de identidad </option>
                        <option> Cédula de ciudadanía </option>
                        <option> Documento único de identidad </option>
                        <option> Cédula de identidad Civil </option>
                        <option> Pasaporte </option>
                    </select>
                <input 
                    type="file" 
                    accept=".jpg, .png, .pdf"
                    value = {input.dni}
                />
            </div>
            <div>
                <label> Photo of Identity document back : </label>
                    <select>
                        <option> DNI </option>
                        <option> Cédula de identidad </option>
                        <option> Cédula de ciudadanía </option>
                        <option> Documento único de identidad </option>
                        <option> Cédula de identidad Civil </option>
                        <option> Pasaporte </option>
                    </select>
                <input 
                    type="file" 
                    accept=".jpg, .png, .pdf"
                    value = {input.dni}
                />
            </div>
            <div>
                <label> Name : </label>
                    <input 
                    type = "text"
                    placeholder = "Name"
                    value = {input.name}
                    name = "name"
                    />
                    {errors.name && (
                        <p> {errors.name} </p>
                    )}
            </div>
            <div>
                <label> SurName : </label>
                    <input 
                    type = "text"
                    placeholder = "SurName"
                    value = {input.surname}
                    name = "surname"
                    />
            </div>
            <div>
                <label> Date of Birth : </label>
                    <input 
                    type = "text"
                    placeholder = "dd/mm/aa"
                    value = {input.birth_day}
                    name = "date of birth"
                    />
            </div>
            <div>
                <label> Phone : </label>
                    <input 
                    type = "number"
                    placeholder = "ej: +54 11 68525749"
                    value = {input.phone}
                    name = "phone"
                    />
            </div>
            <div>
                <label> Email : </label>
                    <input 
                    type = "text"
                    placeholder = "paseador@gmail.com"
                    value = {input.email}
                    name = "email"
                    />
                    {errors.email && (
                        <p> {errors.email} </p>
                    )}
            </div>
            <div>
                <label> Password : </label>
                    <input 
                    type = "text"
                    placeholder = "Password123"
                    value = {input.password}
                    name = "contraseña"
                    />
                    {errors.password && (
                        <p> {errors.password} </p>
                    )}
            </div>
            <div>
                <label> Service : </label>
                <select>
                    <option> Select </option>
                    <option> Walker </option>
                    <option> Carer </option>
                    <option> Walker and Carer</option>
                </select>
            </div>
            <Link to = "/">
                <button type = "submit"> Create User </button>
            </Link>
        </form>
     </div>
)}

export default FormWalker;