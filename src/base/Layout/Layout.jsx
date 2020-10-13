import React from 'react';
import { bem, classes } from '@utils/formatters';
import { Player } from '@modules/Player';
import tapetown from '@images/logo.svg';
import event1 from '@images/event_1.png';
import event2 from '@images/event_2.png';
import event3 from '@images/event_3.png';
import event4 from '@images/event_4.png';
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
            <section className={classes('row', cn('past'))}>
                <h4 className={cn('past-title')}>Past:</h4>
                <div className={cn('past-list')}>
                    <img className={cn('past-img')} src={event1} alt="event1"/>
                    <img className={cn('past-img')} src={event2} alt="event2"/>
                    <img className={cn('past-img')} src={event3} alt="event3"/>
                    <img className={cn('past-img')} src={event4} alt="event4"/>
                    <img className={cn('past-img')} src={event1} alt="event1"/>
                    <img className={cn('past-img')} src={event2} alt="event2"/>
                    <img className={cn('past-img')} src={event3} alt="event3"/>
                    <img className={cn('past-img')} src={event4} alt="event4"/>
                </div>
            </section>

            {/* Футер */}
            <section className={cn('footer')}>
                {/* Горизонтальная линия */}
                <div className={cn('line')} />
                <img className={cn('footer-img')} src={footer} alt="footer"/>
            </section>
        </div>
    );
};
