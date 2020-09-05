import React from 'react';
import { bem } from '@utils/formatters';
import './Upcoming.scss';

const cn = bem('Upcoming')

export const Upcoming = () => {

    return (
        <div className={cn()}>
            <span className={cn('date')}>
                Aug 12
            </span>

            <span className={cn('description')}>
                Plotno Slozheno
            </span>

            <span className={cn('nick')}>
                w/ Endemic
            </span>
        </div>
    );
};
