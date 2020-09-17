import React from 'react';
import { bem } from '@utils/formatters';
import './Player.scss';

const cn = bem('Player');

export const Player = () => {
    return (
        <div className={cn()}>
            <div className={`${cn('now')} col-5`}>
                <span>K Lone - Dance of The vampires</span>
            </div>

            <button className={cn('button')}>
                play
            </button>
        </div>
    );
}
