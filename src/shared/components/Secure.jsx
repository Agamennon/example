import React from 'react';
import { connect } from 'react-redux'


@connect((state ) => {
    return {
        data:state.data
    }
})
export class Secure extends React.Component {


    render() {

        return (
            <div>
                <span>You are @ Secure, it works, but it threw a warning!</span>
            </div>
        )


    }
}

