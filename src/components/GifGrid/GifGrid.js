import React, { useEffect, useState } from 'react'
import { getGifs } from '../../hooks/getGifs'
import { Wrapper, SearchTitle, GifWrapper, ImageTitle, Image } from './styles'

export const GifGrid = ({category}) => {
    const [images, setImages] = useState([])
    useEffect(() => {
        getGifs(category).then(setImages)
    }, [category])

    return (
        <>
            <SearchTitle>{category}</SearchTitle>
            <Wrapper>
                {images && images.map(({ id, title, url }) => {
                    return (
                        <GifWrapper key={id}>
                            <ImageTitle>{title}</ImageTitle>
                            <Image src={url} alt={title}/>
                        </GifWrapper>)
                })}
            </Wrapper>
        </>
    )
}
