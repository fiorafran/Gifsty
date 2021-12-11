import React, { useState } from 'react'
import Span from './styles'

export const Search = () => {
    const [Value, setValue] = useState('');
    const handleChange = (e) => setValue(e.target.value);
    return (
        <div>
            <input type="text" onChange={ handleChange } value={ Value } />
            <Span width={Value.length}/>
        </div>
    )
}
