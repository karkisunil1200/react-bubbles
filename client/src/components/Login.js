import React, {useState} from 'react';
import axios from 'axios';

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage rout

  const [state, setState] = useState({
    username: '',
    password: ''
  });

  const changeHandler = e => {
    setState({...state, [e.target.name]: e.target.value});
    // console.log([e.target.name], e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/api/login', state)
      .then(response => {
        console.log(response);
        localStorage.setItem('token', response.data.payload);
        props.history.push('/homepage');
      })
      .catch();
  };
  return (
    <>
      <div className='login'>
        <h3 className='title'>Login to your account</h3>
        <form className='login-form' onSubmit={submitHandler}>
          <div className='login-form-input'>
            <label className='label'>Username</label>
            <input type='text' name='username' value={state.username} onChange={changeHandler} />
          </div>

          <div className='login-form-input'>
            <label className='label'>Password</label>
            <input
              type='password'
              name='password'
              value={state.password}
              onChange={changeHandler}
            />
          </div>
          <button className='btn'>Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
