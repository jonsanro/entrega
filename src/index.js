import './index.scss';
import { makeHeader } from 'components/header/header-component';
import { makeImage } from 'components/image/image-component';
import { appendComponent } from 'utils/utils';
import { makeFooter } from 'components/footer/footer-component';


document.addEventListener('DOMContentLoaded', () => {
    const components = [
        makeHeader({ title: 'Keeping Playing' }),
        makeImage(),
        makeFooter()
    ];
    appendComponent(document.body, components);
});