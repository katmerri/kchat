import React, { Component } from 'react';
import './App.css';

class NewUserForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            error: ''
        };

        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
    }

    dismissError() {
        this.setState({
            error: ''
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        if(!this.state.email) {
            return this.setState({ error: 'Email is required' });
        }

        if (!this.state.password) {
            return this.setState({ error: 'Password is required' });
        }

        const data = new FormData(e.target);
        let jsonObject = {};

        for (const [key, value] of data.entries()){
            jsonObject[key] = value;
        }

        fetch('', {
            method: 'POST',
            body: JSON.stringify(jsonObject),
        })
        .then(json => {
            console.log(json)
            window.location.href = "/";
        })

        return this.setState({ error: '' });
    }

    handleUserChange(e) {
        this.setState({
            email: e.target.value,
        });
    }

    handlePassChange(e) {
        this.setState({
            password: e.target.value,
        });
    }

    render(){
        return(
            <div className="login-container">
                <div className="login-header">
                    <h1>Create New Account</h1>
                </div>
                <div className="login-form">
                    <form onSubmit={this.handleSubmit}>
                        {
                            this.state.error &&
                            <h3 data-test="error" onClick={this.dismissError}>
                                <button onClick={this.dismissError}>* {this.state.error}</button>
                            </h3>
                        }

                        <input id="email" data-test="email" type="email" placeholder="Email" value={this.state.email} onChange={this.handleUserChange} />
                        <br />
                        <input id="password" data-test="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handlePassChange} />
                        <br />
                        <input id="submit" type="submit" value="Register" data-test="submit" />
                    </form>
                </div>
            </div>
        );
    }
}

export default NewUserForm;