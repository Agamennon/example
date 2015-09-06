import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../redux/actions/someactions'

@connect((state ) => {
    return {
        data:state.data
    }
})
export class Login extends React.Component {

    click(){
        this.props.dispatch(actions.login('redux','iscool'));
    }

    render() {
        return (
            <div>
                Click to login
                <button onClick={this.click.bind(this)}>Click here</button>
            </div>
        )

    }
}

