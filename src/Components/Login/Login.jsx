import React from 'react';

import { useState } from 'react';

import "./Login.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Envio");
    }

  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <h1>Conecte-se as pessoas mais proximas</h1>
            <div><input type='email' placeholder='E-mail' required
             onChange={(e) => setUsername(e.target.value)} class="email"/>
            </div> 
            <div>
                <input type="password" placeholder='Senha' required
                 onChange={(e) => setPassword(e.target.value)} class="senha"/>
            </div>
            <div className='recall-forget'>
                <label htmlFor=''>
                    <input type='checkbox' />
                    Lembre de mim
                </label>
                <a href='#'>Esqueci minha senha</a>
            </div>
            <button>Entrar</button>

            <div className="signup-link">
                <p>
                    Não possui uma conta? <a href='#'>Registrar</a>
                </p>
            </div>
        </form>
      
    </div>
  )
}

export default Login
