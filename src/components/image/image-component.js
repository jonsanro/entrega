import bigImage from '../../../assets/imagen-grande.jpg';

export const makeImage = () => {
    const image = document.createElement('img');
    image.title = 'Big Image';
    image.alt = 'Big Image';
    image.src = bigImage;
    return image;
};

export default makeImage;