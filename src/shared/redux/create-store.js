
import { createStore,applyMiddleware, combineReducers, compose  } from 'redux'
import promiseMiddlewareLight from './middleware/redux-promise-light';
import appMiddleware from './middleware/appmiddleware.js';
import thunk from 'redux-thunk';
import * as reducers from './reducers'

let middleware = [thunk,promiseMiddlewareLight,appMiddleware];

export default function (data,url) {

    var reducer = combineReducers(reducers);
    var finalCreateStore;
    if ( (__DEVELOPMENT__) && (__DEBUG__) && (__CLIENT__)) {
        const { devTools, persistState } = require('redux-devtools');
        finalCreateStore = compose(
            applyMiddleware(...middleware),
            devTools(),
            persistState(url.match(/[?&]debug_session=([^&]+)\b/))
        )(createStore);

    } else {
        finalCreateStore = applyMiddleware(...middleware)(createStore);
    }
    return finalCreateStore(reducer, data);
}
