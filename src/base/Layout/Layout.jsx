import React from 'react';
import { bem, classes } from '@utils/formatters';
import { Player } from '@modules/Player';
import { PastEvents } from '@modules/PastEvents';
import tapetown from '@images/logo.svg';
import footer from '@images/footer.png';
import content from '@/content-config.json';
import './Layout.scss';

const cn = bem('Layout');

export const Layout = (props) => {
    const { fontFailCls } = props;

    return (
        <div className={classes(cn(), fontFailCls)}>
            <div className={cn('background')}>
                <div className={cn('title')}>
                    <div className={cn('title-text')}>
                        Tapetown
                    </div>
                    <div className={cn('title-sub')}>
                        <div>Radio</div>
                        <div>Tv</div>
                    </div>
                </div>
                <div className={cn('container')}>
                    {/* Воспроизведение */}
                    <section className={cn('now')}>
                        <h4>Now:</h4>
                        <Player />
                    </section>

                    {/* Предстоящие выпуски */}
                    <section className={cn('upcoming')}>
                        <h4>Upcoming:</h4>

                        <h1>Aug 12</h1>

                        <div className={cn('upcoming-header')}>
                            <span>{content.upcoming.title}</span>
                        </div>
                        <div className={cn('upcoming-description')}>
                            <span>{content.upcoming.author}</span>
                        </div>
                    </section>

                    {/* Брэнд */}
                    <section className={cn('brand')}>
                        <span>{content.brand}</span>
                        <img src={tapetown} alt="tapetown" />
                    </section>

                    {/* Ссылки */}
                    <section className={cn('links')}>
                        <h4>Links:</h4>

                        {content.links.map(({ text, link }) => (
                            <a key={text} href={link}>{text}</a>
                        ))}
                    </section>

                    {/* О нас */}
                    <section className={cn('about')}>
                        <h4>About:</h4>

                        <span>{content.about}</span>
                    </section>
                </div>
            </div>

            {/* Прошедшие мероприятия */}
            <PastEvents />

            {/* Футер */}
            <section className={cn('footer')}>
                {/* Горизонтальная линия */}
                <div className={cn('line')} />
                <img className={cn('footer-img')} src={footer} alt="footer"/>
            </section>
        </div>
    );
};
