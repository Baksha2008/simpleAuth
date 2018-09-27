import React, { Component } from 'react';

export class SignIn extends Component {

    render() {
        const { inputChangeUser, inputChangePassword, logIn, errorMsg } = this.props;
        return (
            <div className='form'>
                <form method="POST" action="" name='sigUp'>
                    <fieldset>
                        <legend>Sign In</legend>
                        <p className='flexBox'>
                            <input onInput={inputChangeUser} type='email' id='email' name='email' className='form__input' placeholder='Enter your email' ></input>
                        </p>
                        <p className='flexBox'>
                            <input onInput={inputChangePassword} type='password' id='confirmPassword' name='password' className='form__input' placeholder='Enter your password'></input>
                        </p>
                    </fieldset>
                    <p>
                        <button className='button' onClick={logIn}>Sing In</button>
                        <span className="error">{errorMsg}</span>
                    </p>
                </form>
            </div>
        )
    }
}