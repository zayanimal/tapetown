import React, { useState, useEffect } from 'react';
import FontFaceObserver from 'fontfaceobserver';
import { Layout } from '@base/Layout';

export const App = () => {
    /** наблюдение за загрукой веб шрифтов */
    const helvetica = new FontFaceObserver('Helvetica Neue');
    const fjalla = new FontFaceObserver('Fjalla One');

    const [fontFail, setFontFail] = useState('');

    useEffect(() => {
        Promise
            .all([helvetica.load(null, 2000), fjalla.load(null, 2000)])
            .catch(() => { setFontFail('Layout__title_fail'); });
    }, [helvetica, fjalla, setFontFail]);

    return <Layout fontFailCls={fontFail} />;
};
