import React, {useState} from 'react';
import axios from 'axios';

const Login = props => {
  const [state, setState] = useState({
    username: '',
    password: ''
  });

  const handleChanges = e => {
    setState({...state, [e.target.name]: e.target.value});
    console.log([e.target.name], e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log('I have been submitted top');
    axios
      .post('http://localhost:5000/api/login', state)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.payload);
        props.history.push('/bubblepage');
      })
      .catch();
    console.log('I have been submitted bottoom');
  };
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <p>Build a login page here</p>
      <form onSubmit={handleSubmit}>
        <div className='form-input'>
          <label>username</label>
          <input type='text' name='username' value={state.username} onChange={handleChanges} />
        </div>

        <div className='form-input'>
          <label>password</label>
          <input type='password' name='password' value={state.password} onChange={handleChanges} />
        </div>
        <button style={{margin: '20px', background: 'pink', width: '50px', alignSelf: 'center'}}>
          Login
        </button>
      </form>
    </>
  );
};

export default Login;

//http://localhost:5000
//username: 'Lambda School', password: 'i<3Lambd4'
