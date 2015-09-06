import React from 'react';
import { connect } from 'react-redux';
import {Secure} from './Secure.jsx'
import {Home} from './Home.jsx'
import {Login} from './Login.jsx'

if (__CLIENT__) {
    require('./layout.scss');
}

@connect((state ) => {
    return {
        data:state.data
    }
})
export default class App extends React.Component {
    render() {
        const path = this.props.data.path;
        if (path === '/secure')
            return <Secure/>;
        if (path === '/login')
            return <Login/>;
        return <Home/>
    }
}



