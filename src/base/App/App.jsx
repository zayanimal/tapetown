import React, { useState, useEffect } from 'react';
import FastAverageColor from 'fast-average-color';
import FontFaceObserver from 'fontfaceobserver';
import { Layout } from '@base/Layout';
import background from '@images/bckg_desktop.png';

export const App = () => {
    /** анализ цвета */
    const analyzeColor = new FastAverageColor();

    /** наблюдение за загрукой веб шрифтов */
    const helvetica = new FontFaceObserver('Helvetica Neue');
    const fjalla = new FontFaceObserver('Fjalla One');

    const [fontFail, setFontFail] = useState('');

    useEffect(() => {
        /** анализ картинки бэкграунда
         * на преобладающий цвет
         */
        analyzeColor.getColorAsync(background, { algorithm: 'dominant' })
            .then((color) => document
                .querySelector('body')
                .style
                .setProperty('background-color', color.hex)
            );

        /** очистка памяти */
        analyzeColor.destroy();

        Promise
            .all([helvetica.load(null, 2000), fjalla.load(null, 2000)])
            .catch(() => { setFontFail('Layout__title_fail'); });
    }, [analyzeColor, helvetica, fjalla, setFontFail]);

    return <Layout fontFailCls={fontFail} />;
};
