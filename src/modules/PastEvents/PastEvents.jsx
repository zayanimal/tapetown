import React, { Component } from 'react';
import { soundcloudService } from '@services/soundcloud.service';
import { bem, classes } from '@utils/formatters';
import './PastEvents.scss';

const cn = bem('PastEvents');

export class PastEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            covers: []
        };
    }

    componentDidMount() {
        soundcloudService.getObservable().subscribe({
            next: (res) => {
                this.setState((state) => ({ ...state, covers: res }))
            }
        })
    }

    render() {
        return (
            <section className={classes('row', cn())}>
                <h4 className={cn('title')}>Past:</h4>
                <div className={cn('list')}>
                    {this.state.covers.map((cover) => (
                        <img
                            key={cover.picture}
                            className={cn('img')}
                            src={cover.picture}
                            alt="event1"
                        />
                    ))}
                </div>
            </section>
        );
    }
}
