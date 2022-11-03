import React from 'react'
import './Signup.css'
function Signup() {
    return (
        <div className='signup'>
            <header className="signup__top signup__spacing">
                <img
                    className='signup__logo'
                    src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
                    alt="" />
            </header>

            <main className="signup__body">
                <div className='signup__socials'>
                    <h1>Sign up for free to start <br />listening.</h1>

                    <div className="signup__options">
                        <button className='login__social facebook__login'>
                            <img
                                className='social__logo'
                                src="https://1000logos.net/wp-content/uploads/2016/11/facebook-emblem-500x375.jpg"
                                alt="" />
                            <p>
                                Sign up with facebook
                            </p>
                        </button>

                        <button className='login__social google__login'>
                            <img
                                className='social__logo'
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png?20210618182606" alt="" />
                            <p>
                                Sign up with google
                            </p>
                        </button>
                    </div>

                    <div className='divider__or'>
                        <div className='divider__sides divider__left'></div>
                        <p>or</p>
                        <div className='divider__sides divider__right'></div>
                    </div>
                </div>
                <div className='signup__auth'>
                    <h2>Sign up with your email address</h2>
                    <form>
                        <div className='auth__container'>
                            <label htmlFor="email">What's your email?</label>
                            <input
                                type="text"
                                placeholder='Enter your email'
                                className='email auth__input' />
                        </div>

                        <div className="auth__container">
                            <label htmlFor="confirm__email">Confirm your email</label>
                            <input
                                type='text'
                                placeholder='Enter your email again.'
                                className='email auth__input' />
                        </div>

                        <div className="auth__container">
                            <label htmlFor="password">Create a password.</label>
                            <input
                                type="password"
                                placeholder='Create a password.'
                                className='password auth__input' />
                        </div>

                        <div className="auth__container">
                            <label htmlFor="username">What should we call you?</label>
                            <input
                                placeholder='Enter a profile name.'
                                className='username auth__input'
                                type="password" />
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default Signup
