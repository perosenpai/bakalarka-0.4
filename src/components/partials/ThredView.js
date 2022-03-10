import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';

class ThreadView extends Component{
    render(){
        return(
            <div className="main-view">
                Cao
            </div>
        )   
    }
}

const mapStateToProps = state =>({
    ...state.auth,
    ...state.chat
})

const mapDispatchToProps = dispatch =>({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ThreadView);