import React, { useRef } from 'react';
import MenuCSS from './menu.module.scss';
import Logo from '../../media/Logo.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Menu(props) {
  const basketRef = useRef();

  const Open = () => {
    document.getElementById('Menu').style.display = 'block';
    document.getElementById('OpenBtn').style.display = 'none';
  };

  const Close = () => {
    document.getElementById('Menu').style.display = 'none';
    document.getElementById('OpenBtn').style.display = 'block';
  };

  return (
    <>
      <nav className={MenuCSS.Nav}>
        <div className={MenuCSS.Logo}>
          <Link to='/'><img src={Logo} alt="Logo" /></Link>
        </div>
        <div className={MenuCSS.Menu} id="Menu">
          <button onClick={Close} className={MenuCSS.close_btn} id="CloseBtn">
            Close
          </button>
          <ul>
            <li>
              <Link to="/">Товар</Link>
            </li>
            <li>
              <Link to="/">Про товар</Link>
            </li>
            <li>
              <Link to="/">Чому ми!?</Link>
            </li>
            <li>
              <Link to="/">Контакти</Link>
            </li>
            <li onClick={props.isOpen}>
              <Link to="/">Корзина</Link>
            </li>
          </ul>
        </div>
        <button onClick={Open} className={MenuCSS.open_btn} id="OpenBtn">
          Open
        </button>
      </nav>
    </>
  );
}

const mapStateToProps = state => ({
  isOpen: state.isOpen
});

const mapDispatchToProps = dispatch => ({
  isOpen: () => dispatch({ type: 'OPEN' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);