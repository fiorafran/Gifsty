import React, { useState } from 'react'
import { GifGrid } from '../GifGrid/GifGrid';
import { Form, InputWrapper, SearchInput, Span } from './styles'

export const Search = () => {
    const [value, setValue] = useState('');
    const [category, setCategory] = useState('');

    const handleChange = (e) => setValue(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault()
        setCategory([value, ...category])
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <InputWrapper>
                    <SearchInput type="text" onChange={ handleChange } value={ value } placeholder='Buscar Gif'/>
                    <Span width={value.length}/>
                </InputWrapper>
                {category && category.map(cat => <GifGrid key={cat} category={cat}/>)}
            </Form>
        </div>
    )
}
