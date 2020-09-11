import React, { useEffect } from 'react';
import FastAverageColor from 'fast-average-color';
import { Layout } from '@base/Layout';
import background from '@images/bckg_desktop.png';

const analyzeColor = new FastAverageColor();

export const App = () => {
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
    });

    return <Layout />;
};
