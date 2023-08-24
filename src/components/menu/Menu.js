import React, { useRef, useState } from 'react';
import MenuCSS from './menu.module.scss';
import Logo from '../../media/Logo.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Basket from '../../media/Basket.svg'
import CloseImg from '../../media/Close.svg'
import Burger from '../../media/Burger.svg'

function Menu(props) {
  const basketRef = useRef();
  const [isOpen,setOpen] = useState({});

  const Open = () => {
    document.getElementById('Menu').style.display = 'block';
    document.getElementById('OpenBtn').style.display = 'none';
    setOpen(true)
  };

  const Close = () => {
    document.getElementById('Menu').style.display = 'none';
    document.getElementById('OpenBtn').style.display = 'block';
    setOpen(false)
  };

  return (
    <>
      <nav className={MenuCSS.Nav}>
        
        <div className={MenuCSS.Logo}>
          <Link to='/'><img src={Logo} alt="Logo" /></Link>
        </div>
        
        <div className={`${MenuCSS.Menu} ${isOpen ? MenuCSS.open : MenuCSS.close}`}  id="Menu">
          <div onClick={Close} className={MenuCSS.close_btn} id="CloseBtn">
          <img src={CloseImg} />
          </div>
          <ul>
            <li><Link to="/">Dobra</Link></li>
            <li><Link to="/">O produkcie</Link></li>
            <li><Link to="/">Dlaczego my!?</Link></li>
            <li><Link to="/">Łączność</Link></li>
          </ul>
        </div>
        
          <div className={MenuCSS.BasketCount} onClick={props.isOpen}>
            <img src={Basket} />
            <div className={MenuCSS.Count}>2</div>
          </div>

        <div onClick={Open} className={MenuCSS.open_btn} id="OpenBtn">
          <img src={Burger} />
        </div>

        <div className={MenuCSS.authorization}>
          <div className={MenuCSS.login}><Link to='/login'> Zalogować się </Link></div>
          <div className={MenuCSS.singUp}><Link to='/registration'> Zapisać się </Link></div>
        </div>
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