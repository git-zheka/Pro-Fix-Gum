import React, { useRef, useState } from 'react';
import styleCSS from './login.module.scss'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Login() {
const [isProblem, setProblem] = useState(false)

  return (
    

    <>
    <section className={styleCSS.Login}>
        <div className={styleCSS.LoginBox}>
            <h2>Wejście do biura</h2>
            <div className={styleCSS.Inputs}>
                <label>Zaloguj sie</label>
                <input className={styleCSS.inputLogin} type='text' />
                <label>Hasło</label>
                <input className={styleCSS.inputLogin} type='password' />
            </div>
            <div className={styleCSS.btnLogin}>Zalogować się</div>
            
            <p1>Login lub hasło są nieprawidłowe</p1>
            <p>Brak konta? <Link to=''>Rejestracja</Link></p>
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