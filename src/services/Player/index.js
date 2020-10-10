import NchanSubscriber from 'nchan';
import { STREAM_URL, META_URL } from './constants';

class PlayerService {
    constructor(streamUrl, metaUrl) {
        this.audio = new Audio(streamUrl);
        this.meta = new NchanSubscriber(metaUrl);
    }

    toggle = () => {
        return (this.audio.paused
            ? this.audio.play()
            : this.audio.pause());
    }
}

export const playerService = new PlayerService(STREAM_URL, META_URL);
