import React, { useEffect, useState } from 'react'
import { Wrapper, SearchTitle, GifWrapper, ImageTitle, Image } from './styles'

export const GifGrid = ({category}) => {
    const [images, setImages] = useState([])
    useEffect(() => {
        getGifs()
    }, [])
    
    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?api_key=OBRjMT5IxKXzteX4ohkxC1NlH3uI4PdI&q=rick&limit=20&offset=0&rating=g&lang=es';
        const res = await fetch(url);
        const { data } = await res.json();

        const gifs = data.map(image => {
            return {
                id: image.id,
                title: image.title,
                url: image.images.downsized_medium.url
            }
        })
        console.log(gifs)
        setImages(gifs)
    };

    return (
        <Wrapper>
            <SearchTitle>{category}</SearchTitle>
            {images.map(img => {
                return (
                <GifWrapper key={img.id}>
                    <ImageTitle>{img.title}</ImageTitle>
                    <Image src={img.url} alt={img.title}/>
                </GifWrapper>)
            })}
        </Wrapper>
    )
}
