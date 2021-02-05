import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { withRouter } from 'react-router';

const initialFormValues = {
  username: '',
  primary: '',
  password: '',
};

export default function Login({ history }) {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://ccorvo-usemytechstufjava2021.herokuapp.com/login', formValues)
      .then((res) => {
		localStorage.setItem('token', res.data.payload);
		console.log(res);
      })
      .catch((err) => {
        setError(err.response.data.error);
      });
  };

  return (
    <Container>
      <h1>Already a member? Login Now</h1>
      <form className='login-form' onSubmit={handleSubmit}>
        <label htmlFor='username'>Username:</label>
        <br />
        <input
          name='username'
          type='text'
          onChange={handleChange}
          value={formValues.username}
        />
        <br />
        <label htmlFor='password'>Password:</label>
        <br />
        <input
          name='password'
          type='text'
          onChange={handleChange}
          value={formValues.password}
        />
        <br />
        <button>Log in</button>
      </form>
      {error && (
        <>
          <h2>Error: {error}</h2>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
  .login-form {
  display: flex;
  flex-direction: column;
  width: 30%;
	text-align: center;
	padding-top: 2%;
  padding-bottom: 2%;
  }
  button {
	margin: 5% auto;
	margin-top: 5%;
	border: 2px solid black;
	border-radius: 999px;
	color: black;
	width: 30%;
  }
  input {
	border: 2px solid black;
	border-radius: 999px;
	height: 3vh;
  }
`;