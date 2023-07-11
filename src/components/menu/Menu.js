import React, { useRef } from 'react';
import MenuCSS from './menu.module.scss';
import Logo from '../../media/Logo.svg';
import { Link } from 'react-router-dom';

function Menu() {
  const navRef = useRef();

  const Open = () => {
    document.getElementById('Menu').style.display="block";
    document.getElementById('OpenBtn').style.display="none";
  };

  const Close = () => {
    document.getElementById('Menu').style.display="none";
    document.getElementById('OpenBtn').style.display="block";
  };

  return (
    <>
    <nav>
      <div className={MenuCSS.Logo}>
        <img src={Logo} alt="Logo" />
      </div>
        <div className={MenuCSS.Menu} id="Menu">
          <button onClick={Close} className={MenuCSS.close_btn} id="CloseBtn">
            Close
          </button>
          <ul>
            <li><Link to='/'>Категорії товару</Link></li>
            <li><Link to='/'>Про товар</Link></li>
            <li><Link to='/'>Чому ми!?</Link></li>
            <li><Link to='/'>Контакти</Link></li>
          </ul>
        
        </div>
        <button onClick={Open} className={MenuCSS.open_btn} id="OpenBtn">
          Open
        </button>
    </nav>
    
    </>
  );
}

export default Menu;