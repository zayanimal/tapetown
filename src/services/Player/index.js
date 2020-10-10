import { STREAM_URL } from './constants';

class PlayerService {
    constructor(url) {
        this.audio = new Audio(url);
    }

    getState = () => {
        return this.audio.paused;
    }

    toggle = () => {
        return (this.audio.paused
            ? this.audio.play()
            : this.audio.pause());
    }
}

export const playerService = new PlayerService(STREAM_URL);
