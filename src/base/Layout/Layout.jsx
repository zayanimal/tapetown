import React from 'react';
import { bem } from '@utils/formatters';
import './Layout.scss';

const cn = bem('Layout');

export const Layout = () => (
    <div className={cn()}>
        {/* TODO: Добавить сетку, строки или гриды */}


        {/* Заголовок */}
        <div className={cn('title')}>
            <div className={cn('title-text')}>
                Tapetown
            </div>
            <div className={cn('title-sub')}>
                <div>Radio</div>
                <div className={cn('title_tv')}>Tv</div>
            </div>
        </div>

        {/* Воспроизведение */}
        <div className={cn('play')}>

        </div>
    </div>
);
