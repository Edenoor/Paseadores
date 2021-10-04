import React, { useState }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { putDetailsProfile } from '../../../actions'

import style from './Edit.module.css'

const Edit = () => {

    const [input, setInput] = useState({description:''})

    // const { id } = useParams();
    const idNew =useSelector(state => state.detailWalker.id)


    const dispatch = useDispatch();

    const history = useHistory();
    
    const inputChange = (e)=>{
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }

    const handleLogout = (event) => {
        event.preventDefault();
        history.push(`/walker/perfil/${idNew}`);
      };

    const handlerSubmit = ()=>{
       
        dispatch(putDetailsProfile(idNew, input))
        alert('Cambios Efectuados')
        history.push(`/walker/perfil/${idNew}`)

    }
    return (
        <div className={style.container}>
            {console.log(idNew)}
            <form className={style.formulario} onSubmit={handlerSubmit}>
                <h1>Descripcion</h1>
                <textarea 
                type='text'
                name='description'
                value={input.value}
                placeholder='Descripcion..'
                onChange={e=>inputChange(e)}/>
                <button type='submit'>Editar</button>
            </form>
            <br/>
            <br/>
            <button className={style.volver} onClick={handleLogout}> Volver </button>
        </div>
    )
}

export default Edit
