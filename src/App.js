import React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import auth from './store/reducers/authReducer';
import * as ChatActions from './store/actions/chatActions';
import Auth from './components/pages/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/index.css';
import * as AuthActions from './store/actions/authActions';
import Messenger from './components/pages/Messenger';

class App extends React.Component {
  componentDidMount() {
    this.props.setupSocket();
  }

  render() {
    return (
      <div className="App">
        <button onClick={e=>{
          this.props.logout();
        }}>Log out</button>
        <BrowserRouter>
          <Switch>
            
            <Route 
              path="/login"
              render={props=>{
                if(this.props.token){
                  return(
                    <Redirect to="/" />
                  )
                }else{
                  return(
                    <Auth/>
                  )
                }
              }}
            />
            <Route 
              path="/signup"
              render={props=>{
                if(this.props.token){
                  return(
                    <Redirect to="/" />
                  )
                }else{
                  return(
                    <Auth/>
                  )
                }
              }}
            />
            <Route
              path="/"
              render={props => {
                if (!this.props.token) {
                  return (
                    <Redirect to='/login' />
                  )
                } else {
                  return (
                    <Messenger/>
                  )
                }
              }} />
            <Route
              path="/:threadId"
              render={props => {
                if (!this.props.token) {
                  return (
                    <Redirect to='/login' />
                  )
                } else {
                  return (
                    <Messenger/>
                  )
                }
              }} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.auth,
  ...state.chat
})

const mapDispatchtoProps = dispatch => ({
  setupSocket: () => {
    dispatch(ChatActions.setupSocket());
  },
  logout: ()=>{
    dispatch(AuthActions.logout());
  }
})
export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(App);
