import React, { useState }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { putDetailsProfile } from '../../../actions'
import style from './Edit.module.css'

const Edit = () => {
     
    const [input, setInput] = useState({price:''})
    
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

    const handlerSubmit = ()=>{
        dispatch(putDetailsProfile(idNew, input))
        history.push(`/walker/perfil/${idNew}`)

    }
    
    return (
        <div className={style.container}>
            <form onSubmit={handlerSubmit} className={style.formulario}>
                <h1>Price</h1>
                <input 
                type='text'
                name='price'
                value={input.value}
                placeholder='Price..'
                onChange={e=>inputChange(e)}/>
                <button type='submit'>Editar</button>
            </form>        
        </div>
    )
}

export default Edit
