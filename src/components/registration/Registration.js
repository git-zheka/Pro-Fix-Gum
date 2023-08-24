import React, { useRef, useState } from 'react';
import styleCSS from './registration.module.scss'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Registration() {

  return (
    <>
        <section className={styleCSS.Reg}>
        <div className={styleCSS.RegBox}>
            <h2>Rejestracja biura</h2>
            <div className={styleCSS.Inputs}>
                <label>Zaloguj sie</label>
                <input className={styleCSS.inputReg} type='text' />
                <label>Hasło</label>
                <input className={styleCSS.inputReg} type='password' />
            </div>
            <div className={styleCSS.btnReg}>Zapisać się</div>
            
            <p1>Login lub hasło są nieprawidłowe</p1>
            <p>Masz już konto osobiste?<Link to=''> Zalogować się</Link></p>
        </div>
    </section>
    </>
  );
}


export default Registration;