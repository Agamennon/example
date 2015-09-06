import React from 'react';
import createStore from '../shared/redux/create-store.js';

import Layout from '../shared/components/Layout.jsx';

export default (req, res, next) => {

    const production = !__DEVELOPMENT__;

        res.render('index', {
            html: '',
            payload:JSON.stringify({}),
            production:production
        });




}
