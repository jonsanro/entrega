import './header-styles.scss';
import pokerImagen from 'assets/logo_coachem.png';

export const makeHeader = ({ title }) => {
    const header = document.createElement('header');
    header.innerHTML = `<div class="header">
    <h1 class = "title">${title}</h1>
    <img class="logo" src='${pokerImagen}'>
    </div>`;
    return header;
}

export default {
    makeHeader
}