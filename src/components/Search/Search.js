import React, { useState } from 'react'
import { GifGrid } from '../GifGrid/GifGrid';
import Span from './styles'

export const Search = () => {
    const [value, setValue] = useState('');
    const [category, setCategory] = useState('');

    const handleChange = (e) => setValue(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault()
        setCategory([...category, value])
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={ handleChange } value={ value } />
                <Span width={value.length}/>
                {category && category.map(cat => <GifGrid key={cat} category={cat}/>)}
            </form>
        </div>
    )
}
