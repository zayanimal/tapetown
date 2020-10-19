import _ from 'lodash';
import axios from 'axios';
import { of } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { mergeMap, map, toArray, take, catchError } from 'rxjs/operators';
import { SOUNDCLOUD_URL } from './constants';

class Soundcloud {
    constructor(url) {
        this.url = url;
    }

    getData() {
        return axios
            .get(this.url)
            .then(({ data }) => new window.DOMParser().parseFromString(data, "text/xml"))
            .then(this.parseData)
            .catch((err) => console.warn(err.message));
    }

    parseData(data) {
        return Array
            .from(data.querySelectorAll('item'))
            .map((item) => ({
                picture: _.first(item.getElementsByTagName('itunes:image')).getAttribute('href'),
                song: _.first(item.getElementsByTagName('enclosure')).getAttribute('url')
            }))
    }

    getObservable() {
        return fromFetch(this.url).pipe(
            mergeMap(async (data) => new window.DOMParser().parseFromString(await data.text(), "text/xml")),

            mergeMap((data) => data.querySelectorAll('item')),

            map((item) => ({
                picture: _.first(item.getElementsByTagName('itunes:image')).getAttribute('href'),
                song: _.first(item.getElementsByTagName('enclosure')).getAttribute('url')
            })),

            take(8),

            toArray(),

            catchError((err) => of({ error: true, message: err.message }))
        );
    }
}

export const soundcloudService = new Soundcloud(SOUNDCLOUD_URL);
