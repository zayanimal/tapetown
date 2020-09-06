import React from 'react';
import { bem } from '@utils/formatters';
import { Player } from '@modules/Player';
import tapetown from '@images/logo.png';
import event1 from '@images/event_1.png';
import event2 from '@images/event_2.png';
import event3 from '@images/event_3.png';
import event4 from '@images/event_4.png';
import footer from '@images/footer.png';
import './Layout.scss';

const cn = bem('Layout');

export const Layout = () => (
    <div className={cn()}>
        <div className={cn('background')}>
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
                <h4>Now:</h4>
                <Player />
            </div>

            {/* Предстоящие выпуски */}
            <div className="row">
                <h4>Upcoming:</h4>

                <h1>Aug 12</h1>
                <h2>Plotno Slozheno</h2>
                <h3>w/ Endemic</h3>
            </div>

            {/* Брэнд */}
            <div className={`row ${cn('brand')}`}>
                <span>tapetown.live</span>
                <img src={tapetown} alt="tapetown" />
            </div>

            {/* Ссылки */}
            <div className={`row ${cn('links')}`}>
                <h4>Links:</h4>

                <a href="/">Facebook</a>
                <a href="/">Instagram</a>
                <a href="/">Soundcloud</a>
                <a href="/">Telegram</a>
                <a href="/">Donate</a>
            </div>
        </div>

        {/* О нас */}
        <div className={`row ${cn('about')}`}>
            <h4>About:</h4>

            <span>
                is an independent, DIY internet radio station broadcasting 24/7
                from small apartment in Kaliningrad City, occasionally streaming live mix
                sessions, hosted by two aspiring music enthusiasts.
            </span>
        </div>

        {/* Прошедшие мероприятия */}
        <div className={`row ${cn('past')}`}>
            <h4>Past:</h4>

            <img className={cn('past-img')} src={event1} alt="event1"/>
            <img className={cn('past-img')} src={event2} alt="event2"/>
            <img className={cn('past-img')} src={event3} alt="event3"/>
            <img className={cn('past-img')} src={event4} alt="event4"/>
        </div>

        {/* Горизонтальная линия */}
        <div className={cn('line')} />

        {/* Футер */}
        <div className="row">
            <img className={cn('footer')} src={footer} alt="footer"/>
        </div>
    </div>
);
