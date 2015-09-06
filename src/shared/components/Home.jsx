import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../redux/actions/someactions'

@connect((state ) => {
    return {
        data:state.data
    }
})
export class Home extends React.Component {

    click(){
       this.props.dispatch(actions.goTo('/secure'));
     }

    render() {
        return (
            <div>
                You @ Home, click to go to a secure place
                <button onClick={this.click.bind(this)}>Click here</button>
            </div>
        )

    }
}

