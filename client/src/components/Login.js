import React, {useState} from 'react';

const Login = () => {
  const [state, setState] = useState({
    username: '',
    password: ''
  });

  const handleChanges = e => {
    setState({...state, [e.target.name]: e.target.value});
    // console.log([e.target.name], e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault;
  };
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <p>Build a login page here</p>
      <form>
        <div className='form-input' onSubmit={handleSubmit}>
          <label>username</label>
          <input type='text' name='username' onChange={handleChanges} />
        </div>

        <div className='form-input'>
          <label>password</label>
          <input type='text' name='password' onChange={handleChanges} />
        </div>
        <button style={{margin: '20px', background: 'pink', width: '50px', alignSelf: 'center'}}>
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
