import NchanSubscriber from 'nchan';
import { PLAYER_URLS } from './constants';

class PlayerService {
    constructor(urls) {
        this.audioStream = new Audio(urls.STREAM_URL);
        this.textStream = new NchanSubscriber(urls.META_URL);
    }

    toggleStream = () => {
        return (this.audioStream.paused
            ? this.audioStream.play()
            : this.audioStream.pause());
    }
}

export const playerService = new PlayerService(PLAYER_URLS);
