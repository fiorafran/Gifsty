import React, { useEffect, useState } from 'react'
import { Wrapper, SearchTitle, GifWrapper, ImageTitle, Image } from './styles'

export const GifGrid = ({category}) => {
    const [images, setImages] = useState([])
    useEffect(() => {
        getGifs(category)
    }, [category])
    
    const getGifs = async(category) => {
        const parseCategory = category.replace(/\s/g, '+');
        console.log('parse ', parseCategory);
        const url = `https://api.giphy.com/v1/gifs/search?api_key=OBRjMT5IxKXzteX4ohkxC1NlH3uI4PdI&q=${parseCategory}&limit=15&offset=0&rating=g&lang=es`;
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
        <>
            <SearchTitle>{category}</SearchTitle>
            <Wrapper>
                {images.map(({ id, title, url }) => {
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
