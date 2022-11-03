import React from 'react'
import './Login.css'
function Login() {
    return (
        <div className='login'>
            <header className="login__top login__spacing">
                <img
                    className='login__logo'
                    src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
                    alt="" />
            </header>

            <div className="divider" />

            <main className="login__bottom login__spacing">
                <div className="login__socials">
                    <p className="login__message">To continue, log in to Spotify.</p>
                    <div className="login__options">
                        <button className='login__social facebook__login'>
                            <img
                                className='social__logo'
                                src="https://1000logos.net/wp-content/uploads/2016/11/facebook-emblem-500x375.jpg"
                                alt="" />
                            <p>
                                Continue with facebook
                            </p>
                        </button>
                        <button className='login__social apple__login'>
                            <img
                                className='social__logo'
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/1024px-Apple_logo_white.svg.png" alt="" />
                            <p>
                                Continue with apple
                            </p>
                        </button>
                        <button className='login__social google__login'>
                            <img
                                className='social__logo'
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png?20210618182606" alt="" />
                            <p>
                                Continue with google
                            </p>
                        </button>
                    </div>

                    <div className='divider__or'>
                        <div className='divider__sides divider__left'></div>
                        <p>or</p>
                        <div className='divider__sides divider__right'></div>
                    </div>
                </div>

                <div className="login__auth">
                    <form>
                        <div className="auth__container">
                            <label htmlFor='email' className='auth__label'>Email address or username</label>
                            <input
                                type='text'
                                className='email auth__input'
                                placeholder='Email address or username'
                            />
                        </div>

                        <div className="auth__container">
                            <label htmlFor='password' className='auth__label'>Password</label>
                            <input
                                type='password'
                                className='password auth__input'
                                placeholder='Password'
                            />
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default Login
