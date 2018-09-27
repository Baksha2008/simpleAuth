import React, { Component } from 'react';

import './App.css';
import { User } from './pages/user';
import { SignIn } from './pages/signIn';
import { SignUp } from './pages/signUp';

export class App extends Component {
  constructor() {
    super();

    this.state = {
      activePage: "signUp",
      inputValueEmail: "",
      inputValuePassword: "",
      inputValueUser: "",
      activeUser: "",
      errorMsg: "",
      secret: ''
    };
  }

  inputChangeEmail = event => {
    this.setState({
      inputValueEmail: event.target.value
    });
  };

  inputChangePassword = event => {
    this.setState({
      inputValuePassword: event.target.value
    });
  };

  inputChangeConfirmPassword = event => {
    this.setState({
      inputValueConfirmPassword: event.target.value
    });
  };

  inputChangeUser = event => {
    this.setState({
      inputValueUser: event.target.value
    });
  };

  createUser = event => {
    event.preventDefault();

    const user = {
      user: this.state.inputValueUser,
      email: this.state.inputValueEmail,
      password: this.state.inputValuePassword
    };

    this.fetchFunction(user, "signup");
  };

  logIn = event => {
    event.preventDefault();

    const user = {
      user: this.state.inputValueUser,
      password: this.state.inputValuePassword
    };

    this.fetchFunction(user, "login");
  };

  fetchFunction = (newUser, path) => {
    const { user, email, password } = newUser;
    const url = `https://flatearth-api.herokuapp.com/api/v1/auth/${path}`;

    const response = fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        user: user,
        email: email,
        password: password
      })
    });

    response
      .then(data => {
        return data.json();
      })
      .then(obj => {

        let status = obj.status;
        let message = obj.message;

        if (status === "success" && path === "signup") {
          this.setState({
            activePage: "signIn",
            errorMsg: ""
          });
        }

        if (status === "success" && path === "login") {
          let secret = obj.message.token;
          console.log(secret);
          this.setState({
            activePage: "users",
            activeUser: user,
            errorMsg: "",
            secret: secret
          });
        }

        if (status === "error") {
          this.setState({
            errorMsg: message
          });

        }
      });

  };

  goToSignIn = () => {
    this.setState({
      activePage: "signIn"
    });
  };

  logOut = () => {
    this.setState({
      activePage: "signUp",
      activeUser: "",
      errorMsg: ""
    });
  }


  render() {
    const { activePage, activeUser, errorMsg } = this.state;

    if (activePage === "signUp") {
      return (

          <SignUp
            createUser={this.createUser}
            inputChangeEmail={this.inputChangeEmail}
            inputChangePassword={this.inputChangePassword}
            inputChangeUser={this.inputChangeUser}
            errorMsg={errorMsg}
            signIn={this.goToSignIn}
          />

      );
    }

    if (activePage === "signIn") {
      return (

          <SignIn
            user={activeUser}
            inputChangeUser={this.inputChangeUser}
            inputChangePassword={this.inputChangePassword}
            logIn={this.logIn}
            errorMsg={errorMsg}
          />

      );
    }

    if (activePage === "users") {
      return (

          <User
            user={activeUser}
            logOut={this.logOut}
             />

      );
    }
  }
}



