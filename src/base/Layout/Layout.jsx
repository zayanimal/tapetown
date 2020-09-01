import React from 'react';
import { bem } from '@utils/formatters';
import './Layout.scss';

const cn = bem('Layout');

export const Layout = () => (
    <div className={cn()}>
        <div className={cn('title')}>
            <div className={cn('title-text')}>
                TAPETOWN
            </div>
            <div className={cn('title-sub')}>
                <div>RADIOO</div>
                <div className={cn('title_tv')}>TV</div>
            </div>
        </div>
    </div>
);
