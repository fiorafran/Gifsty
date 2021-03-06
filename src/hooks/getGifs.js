export const getGifs = async(category) => {
    const parseCategory = category.replace(/\s/g, '+');
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${parseCategory}&limit=15&offset=0&rating=g&lang=es`;
    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map(image => {
        return {
            id: image.id,
            title: image.title,
            url: image.images.downsized_medium.url
        }
    })
    return gifs;
};