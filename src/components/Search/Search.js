import React, { useState } from 'react'
import { GifGrid } from '../GifGrid/GifGrid';
import { Form, InputWrapper, SearchInput, Span } from './styles'

export const Search = ({ theme }) => {
    const [value, setValue] = useState('');
    const [category, setCategory] = useState('');

    const handleChange = (e) => setValue(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault()
        setCategory([value, ...category])
    };

    return (
            <Form onSubmit={handleSubmit}>
                <InputWrapper>
                    <SearchInput type="text" onChange={ handleChange } value={ value } placeholder='Buscar Gif' theme={theme}/>
                    <Span width={value.length} theme={theme} />
                </InputWrapper>
                {category && category.map((cat, idx) => <GifGrid key={idx} category={cat} theme={theme}/>)}
            </Form>
    )
}
