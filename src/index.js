import './index.scss';
import { makeHeader } from 'components/header/header-component';
import { appendComponent } from 'utils/utils';
import { makeFooter } from 'components/footer/footer-component';
import { makeSongs } from 'components/songs/songs-components';


document.addEventListener('DOMContentLoaded', () => {
    const components = [
        makeHeader({ title: 'Keeping Playing' }),
        makeFooter(),
        makeSongs()
    ];
    appendComponent(document.body, components);
});