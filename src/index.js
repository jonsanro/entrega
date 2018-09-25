import './index.scss';
import { makeHeader } from 'components/header/header-component';
import { makeImage } from 'components/image/image-component';
import { appendComponent } from 'utils/utils';


document.addEventListener('DOMContentLoaded', () => {
    const components = [
        makeHeader({ title: 'Keeping Playing' }),
        makeImage({})
    ];
    appendComponent(document.body, components);
});