import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import Sidebar from '../partials/Sidebar';
import ThredView from '../partials/ThredView';
import ChatInput from '../partials/ChatInput';

class Messenger extends Component{
    render(){
        return(
            <div className="messenger-container">
                <Sidebar/>
                <ThredView/>
                <ChatInput/>
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
)(Messenger);