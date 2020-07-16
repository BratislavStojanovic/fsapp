import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AuthService from '../../services/auth-service';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser, removeUser } from '../login/store/actions';

const Home = () => {
  const userStore = useSelector((store) => store.userStore);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (AuthService.getUserData() === null) {
      history.push('/');
    }
    if (userStore) {
      dispatch(setUser(AuthService.getUserData()));
    }
  }, []);

  const onLogout = () => {
    AuthService.logout(history);
    dispatch(removeUser());
  };

  return (
    <div className='container'>
      <h1>Home page</h1>
      <h2>Hello {userStore.name}</h2>
      <button className='btn btn-warning' onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default Home;
