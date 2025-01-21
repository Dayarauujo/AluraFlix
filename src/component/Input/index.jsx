import React from 'react'
import { InputContainer } from './styled'

function Input({ id, title, type }) {
    return <InputContainer>
        <label htmlFor={id}>{title}</label>
        {type === 'area' ? <textarea id={id} name={id} required /> : <input type="text" id={id} name={id} required />}
    </InputContainer>
}

export default Input