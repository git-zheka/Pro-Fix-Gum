import React, { useRef, useState } from 'react';
import styleCSS from './login.module.scss'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { apiUrlLogin } from '../../api';
import { LoginAPI } from '../../api';


function Login() {
  const [isProblem, setProblem] = useState(false);
  const [gmailInput, setGmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const handleLogin = () => {
      LoginAPI(gmailInput,passwordInput)
      .then((responseData) => {
      console.log(responseData)
  })
  .catch((error) => {
    console.error('Помилка в LoginAPI:', error);
  });
  };
 

  return (
    <>
      <section className={styleCSS.Login}>
        <div className={styleCSS.LoginBox}>
          <h2>Wejście do biura</h2>
          <div className={styleCSS.Inputs}>
            <label>Zaloguj się</label>
            <input
              className={styleCSS.inputLogin}
              type='text'
              value={gmailInput}
              onChange={(e) => setGmailInput(e.target.value)}
            />
            <label>Hasło</label>
            <input
              className={styleCSS.inputLogin}
              type='password'
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
          </div>
         
         <div className={styleCSS.btnLogin} onClick={handleLogin}> Zalogować się </div>

          {isProblem && <p>Login lub hasło są nieprawidłowe</p>}
          
          <p>Brak konta? <Link to='/registration'> Rejestracja</Link></p>
        </div>
      </section>
    </>
  );
}

const mapStateToProps = state => ({
  isOpen: state.isOpen
});

const mapDispatchToProps = dispatch => ({
  isOpen: () => dispatch({ type: 'OPEN' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);