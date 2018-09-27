import React, { Component } from 'react';

export class SignUp extends Component {

    render() {
        const {
            inputChangeEmail, 
            inputChangePassword,
            inputChangeConfirmPassword,
            inputChangeUser,
            createUser,
            errorMsg,
            signIn
        } = this.props;
        return (
            <div className='form'>
                
                <form method="POST" action="" name='sigUp'>
                    <fieldset>
                        <legend>Sign Up</legend>
                        <p className='flexBox'>
                            <input type='text' id='name' name='name' placeholder='Enter your name' className='form__input' onInput={inputChangeUser}></input>
                        </p>
                        <p className='flexBox'>
                            <input type='email' id='email' name='email' className='form__input' placeholder='Enter your email' onInput={inputChangeEmail} ></input>
                        </p>
                        <p className='flexBox'>
                            <input type='password' id='confirmPassword' name='password' className='form__input' placeholder='Enter your password' onInput={inputChangePassword}></input>
                        </p>
                    </fieldset>
                    <p>
                        <button className='button' onClick={createUser}>Sing Up</button>
                        <span className="error">{errorMsg}</span>
                    </p>
                </form>
                <div>
                    <p >Already have an account?</p>
                    <button className='button' onClick={signIn}>Sign in</button>
                </div>
            </div>
        )
    }
}