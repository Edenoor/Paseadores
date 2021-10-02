import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {useHistory} from 'react-router'
import style from "./Login.module.css"
import { Link } from "react-router-dom";
import Log from "./Google_Auth";
import { useSelector } from "react-redux";
import { getByEmail } from "../../actions";


const Login = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    
    
    const {validate, id} = useSelector(state => state)

    const handleOnChange = ({target : {name, value}}) => setValues({
        ...values,
        [name]: value
    })
    


    const handleOnSubmit = async e => {
        e.preventDefault()
        // console.log('Values:', values)
        dispatch(getByEmail(values));
        setValues({
            ...values,
            email: '',
            password: ''
        }) 
        let auth = await validate

        console.log(auth)
    
        // console.log('Values:', values)
        if(auth){

           alert('Welcome')
           history.push(`/walker/perfil/${auth}`)

        } else {
            return alert('Please check your credentials')

        }
    };

    

    return (
        <div className={style.container}>
            <div className={style.log}>
                <h1>Login</h1>
                <form className={style.form} onSubmit={handleOnSubmit}> 
                    <div className={style.field}>
                        <input name='email' onChange={handleOnChange} type="text" value={values.name} required />
                        <span></span>
                        <label htmlFor="">UserName</label>
                    </div>
                    <div className={style.field}>
                        <input name='password' onChange={handleOnChange} type="password" value={values.name} required />
                        <span></span>
                        <label htmlFor="">Password</label>
                    </div>
                    <span className={style.pass}>Forgot password?</span>
                    <input className={style.login} type="submit" value="login"></input>
                    <div className={style.link}>
                        <span>Not registered?
                            <Link className={style.create} to='/pre-login'>
                                <span className={style.create}>Create account</span>
                            </Link>
                        </span>
                    </div>
                    <div className={style.google}>
                    <Log />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login