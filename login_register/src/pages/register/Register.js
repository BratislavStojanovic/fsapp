import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthService from '../../services/auth-service';

const Register = () => {
  const [state, setState] = useState({ name: '', password: '' });

  const history = useHistory();

  const onRegister = () => {
    AuthService.register(state).then((res) => {
      if (res.data === 'OK') {
        history.push('/');
      } else {
        history.push('/register');
      }
    });
  };

  return (
    <div className='container'>
      <h1>Register</h1>
      <div className='col-6 offset-3'>
        <input
          type='text'
          value={state.name}
          placeholder='name'
          className='form-control'
          onChange={(e) => setState({ ...state, name: e.target.value })}
        />
        <br />
        <input
          type='password'
          placeholder='password'
          className='form-control'
          onChange={(e) => setState({ ...state, password: e.target.value })}
        />
        <br />
        <button onClick={onRegister} className='btn btn-primary'>
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
