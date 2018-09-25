import { appendComponent } from 'utils/utils';
import { makeSong } from 'components/song/song-components';

export const makeSongs = () => {
    const songs = document.createElement('div');
    songs.classList.add('songs');
    appendComponent(songs, [
        makeSong({
            title: 'Titulo random',
            author: 'Autor random',
            imageUrl: 'https://r.hswstatic.com/w_907/gif/podcasts/stuffyoushouldknow-podcasts-wp-content-uploads-sites-16-2014-03-disco600x350.jpg'
        }),
    ]);
    return songs;
};

export default makeSongs;