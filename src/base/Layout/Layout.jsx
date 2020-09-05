import React from 'react';
import { bem } from '@utils/formatters';
import { Player } from '@modules/Player';
import { Upcoming } from '@modules/Upcoming';
import './Layout.scss';

const cn = bem('Layout');

export const Layout = () => (
    <div className={cn()}>
        {/* TODO: Добавить сетку, строки или гриды */}


        {/* Заголовок */}
        <div className="row">
            <div className={cn('title')}>
                <div className={cn('title-text')}>
                    Tapetown
                </div>
                <div className={cn('title-sub')}>
                    <span>Radio</span>
                    <span className={cn('title-sub_tv')}>Tv</span>
                </div>
            </div>
        </div>

        {/* Воспроизведение */}
        <div className="row">
            <h3>Now:</h3>
            <Player />
        </div>

        {/* Предстоящие выпуски */}
        <div className="row">
            <h3>Upcoming:</h3>
            <Upcoming />
        </div>
    </div>
);
