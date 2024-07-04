import React, { useState } from 'react'
import Label from '../Component/Label'
import Input from '../Component/Input'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { base_url, login_end_point } from '../api'



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigation = useNavigate();

  const validateEmail = (email) => {
    if (!email) {
      return 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      return 'Email address is invalid';
    } else {
      return '';
    }
  };

  const validatePassword = (password) => {
    if (!password) {
      return 'Password is required';
    } else if (password.length < 6) {
      return 'Password must be at least 6 characters';
    } else {
      return '';
    }
  };

  const LoginUser = (credentials) => {
    axios.post(`${base_url}${login_end_point}`, (credentials))
      .then(response => {
        console.log(response.data)
        const { token } = response.data;
        if (token) {
          localStorage.setItem("token", JSON.stringify(token))
        }
        navigation("/Home")
      })
      .catch(error => {
        console.log("Login failed", error)
        // return null;
      })
  }
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: validateEmail(value),
    }));
  };
  const handlePasswordClick = (e) => {
    const value = e.target.value;
    setPassword(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      password: validatePassword(value),
    }));
  };

  const HandelSubmit = (e) => {
    e.preventDefault();
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
    } else {
      const credentials = { email, password };
      LoginUser(credentials);
    }
  };
  return (
    <>
      <h1>Welcome to login Page</h1>
      <form onSubmit={HandelSubmit}>
        <Label
          label="email:"
        />
        <Input
          type="text"
          id="email"
          name="email"
          onChange={handleEmailChange}
          value={email} />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        <br />
        <Label
          label="Password:"
        />
        <Input
          type="password"
          id="password"
          name="password"
          onChange={handlePasswordClick}
          // onChange={((e) => { setPassword(e.target.value) })}
          value-={password} />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        <br />
        <button
          type="Submit">Login</button>
      </form>
    </>
  )
}

export default Login
