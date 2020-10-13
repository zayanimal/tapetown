import React, { Component } from 'react';
import { playerService } from '@services/Player';
import { bem } from '@utils/formatters';
import './Player.scss';

const cn = bem('Player');

export class Player extends Component {
    constructor(props) {
        super(props);
        this.audio = playerService;
        this.state = {
            isPlaying: false,
            nowPlaying: '...'
        };
    }

    componentDidMount() {
        this.audio.meta.start();
        this.audio.meta.on('message', (message) => {
            const { now_playing, live } = JSON.parse(message);

            if (live.is_live) {
                this.setState((state) => ({
                    ...state,
                    nowPlaying: live.streamer_name
                }));
            } else if (this.state.nowPlaying !== now_playing.song.text) {
                this.setState((state) => ({
                    ...state,
                    nowPlaying: now_playing.song.text.split(' - ').join('\n')
                }));
            }
        });
    }

    componentWillUnmount() {
        this.audio.meta.stop();
    }

    onClick = () => {
        this.setState((state) => ({
            ...state,
            isPlaying: !state.isPlaying
        }));

        return this.audio.toggle();
    }

    render() {
        return (
            <div className={cn()}>
                <div className={cn('now')}>
                    <span className={cn('text')}>{this.state.nowPlaying}</span>
                </div>

                <button className={cn('button')} onClick={this.onClick}>
                    {this.state.isPlaying ? 'pause' : 'play'}
                </button>
            </div>
        );
    }
}
