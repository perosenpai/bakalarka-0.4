import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            passwordAgain: '',
            name: '',
            userName: '',
            error: ''
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-wrapper">
                            <h3>Sign Up</h3>
                            <form
                                onSubmit={e => {
                                    e.preventDefault();
                                    if (this.props.socket) {
                                        let empty = 0;
                                        Object.keys(this.state).map(key=>{
                                            if(this.state[key]=== ''){
                                                empty +=1;
                                            }
                                        })

                                        if(empty > 0){
                                            return this.setState({error: 'All fields required'})
                                        }else{
                                            if(this.state.password != this.state.passwordAgain){
                                                return this.setState({error: 'Passwords must match'});
                                            }
                                        }
                                        this.props.socket.send(JSON.stringify({
                                            type: 'SIGNUP',
                                            data: {
                                                email: this.state.email,
                                                password: this.state.password,
                                                name: this.state.name,
                                                userName: this.state.userName
                                            }
                                        }))
                                    }
                                }}
                            >
                                <p>Mate ucet? <Link to='/login'>Log in</Link></p>
                                {this.state.error ?
                                    <p className="text-danger">{this.state.error}</p>
                                : null}
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" className="form-control" placeholder="e-mail" value={this.state.email} onChange={e => this.setState({ email: e.target.value })}></input>
                                        </div>
                                        <div className="form-group">
                                            <label>User Name</label>
                                            <input type="userName" className="form-control" placeholder="User Name" value={this.state.userName} onChange={e => this.setState({ userName: e.target.value })}></input>
                                        </div>
                                        <div className="form-group">
                                            <label>Meno a Priezvisko</label>
                                            <input type="text" className="form-control" placeholder="Meno" value={this.state.name} onChange={e => this.setState({ name: e.target.value })}></input>
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" className="form-control" placeholder="password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })}></input>
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" className="form-control" placeholder="password again" value={this.state.passwordAgain} onChange={e => this.setState({ passwordAgain: e.target.value })}></input>
                                        </div>
                                        <div className="text-centered">
                                            <button className="btn btn-primary" type="submit">Sign up</button>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    ...state.auth,
    ...state.chat
})

const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Signup);