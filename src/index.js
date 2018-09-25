import './index.scss';
import { makeHeader } from 'components/header/header-component';
import { makeImage } from 'components/image/image-component';

document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(makeHeader({ title: 'Keeping Playing' }));
    document.body.appendChild(makeImage({}));
});