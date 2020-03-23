import React, { useState, useEffect, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';
import useLocalStorage from '../../hooks/useLocalStorage';
import { CurrentUserContext } from '../../contexts/currentUser';
import BackendErrorMessages from './components/backendErrorMessages';

const Authentication = props => {
  const isLogin = props.match.path === '/login';
  const pageTitle = isLogin ? 'Sign in' : 'Sign up';
  const descriptionLink = isLogin ? '/register' : '/login';
  const descriptionText = isLogin ? 'Need an account?' : 'Have an account?';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isSuccesfullSubmit, setIsSuccesfullSubmit] = useState(false);
  const [{ isLoading, error, response }, doFetch] = useFetch('/users');
  const [, setToket] = useLocalStorage('token');
  const [, setCurrentUserState] = useContext(CurrentUserContext);

  const handleSubmit = event => {
    event.preventDefault();
    const user = isLogin ? { email, password } : { email, password, username };
    doFetch({
      method: 'post',
      data: {
        user
      }
    });
    console.log('values', email, password);
  };

  useEffect(() => {
    if (!response) {
      return;
    }
    setToket(response.user.token);
    setIsSuccesfullSubmit(true);
    setCurrentUserState(state => ({
      ...state,
      isLoggedIn: true,
      isLoading: false,
      currentUser: response.user
    }));
  }, [response, setToket, setCurrentUserState]);

  if (isSuccesfullSubmit) {
    return <Redirect to='/' />;
  }

  return (
    <div className='auth-page'>
      <div className='container page'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 col-xs-12'>
            <h1 className='text-xs-center'>{pageTitle}</h1>
            <p className='text-xs-center'>
              <Link to={descriptionLink}>{descriptionText}</Link>
            </p>
            <form onSubmit={handleSubmit}>
              {error && <BackendErrorMessages backendErrors={error.errors} />}
              <fieldset>
                {!isLogin && (
                  <fieldset className='form-group'>
                    <input
                      type='text'
                      className='form-control form-control-lg'
                      placeholder='Username'
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                    />
                  </fieldset>
                )}
                <fieldset className='form-group'>
                  <input
                    type='email'
                    className='form-control form-control-lg'
                    placeholder='Email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </fieldset>
                <fieldset className='form-group'>
                  <input
                    type='password'
                    className='form-control form-control-lg'
                    placeholder='Password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </fieldset>
                <button
                  disabled={isLoading}
                  className='btn btn-lg btn-primary pull-xs-right'
                  type='submit'
                >
                  {pageTitle}
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Authentication;