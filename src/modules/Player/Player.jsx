import React, { Component } from 'react';
import { playerService } from '@services/player.service';
import { bem } from '@utils/formatters';
import './Player.scss';

const cn = bem('Player');

export class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false,
            nowPlaying: '...'
        };
    }

    componentDidMount() {
        playerService.textStream.start();
        playerService.textStream.on('message', (message) => {
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
        playerService.textStream.stop();
    }

    onClick = () => {
        this.setState((state) => ({
            ...state,
            isPlaying: !state.isPlaying
        }));

        return playerService.toggleStream();
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
