import React, { Component } from 'react';
import { playerService } from '@services/Player';
import { bem } from '@utils/formatters';
import './Player.scss';

const cn = bem('Player');

export class Player extends Component {
    constructor(props) {
        super(props);
        this.audio = playerService;
        this.state = { isPlaying: false };
    }

    onClick = () => {
        this.setState({ isPlaying: !this.state.isPlaying });

        return this.audio.toggle();
    }

    render() {
        return (
            <div className={cn()}>
                <div className={`${cn('now')} col-5`}>
                    <span>K Lone - Dance of The vampires</span>
                </div>

                <button className={cn('button')} onClick={this.onClick}>
                    {this.state.isPlaying ? 'pause' : 'play'}
                </button>
            </div>
        );
    }
}
