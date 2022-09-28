import React from "react";

import axios from "axios";

import Swal from 'sweetalert2';

import { useNavigate } from 'react-router-dom';


function Login() {
  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const loginValidations = (email, password) => {
        if (email === "" || password === "") {
     Swal.fire({
      title: 'Error!',
      text: 'Los campos no pueden estar vacios',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
      return;
    }

    if (email === "" && !regexEmail.test(email)) {
     Swal.fire({
      title: 'Error!',
      text: 'Debes escribir una direccion de correo electronico valida',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
      return;
    }

    if (email !== "challenge@alkemy.org" || password !== "react") {
             Swal.fire({
      title: 'Error!',
      text: 'Las credenciales son invalidas',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
        return;
    }
    Swal.fire({
      title: 'Todo bien!',
      text: 'Estamos listos para enviar la informacion',
      icon: 'success',
      confirmButtonText: 'Cool'
    })

  }

  let navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginValidations(email, password)
    axios.post('http://challenge-react.alkemy.org/', {email, password})
    .then(res => {
      // SwAlert(<h2>Logeado Ok ,?>)
      console.log(res.data)
      const token = res.data.token;
      localStorage.setItem('token', token)

      navigate('/listado')
      
    }
      )
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <button>Log in</button>
      </form>
    </>
  );
}

export default Login;
