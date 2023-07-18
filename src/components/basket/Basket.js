import StyleCSS from './basket.module.scss';
import React, { useState } from 'react';

import Close from '../../media/Close.svg';
import img from '../../media/TreangleSlider.svg';

import { useEffect } from 'react';
import BoxGoods from './components/BoxGoods';

import { connect } from 'react-redux';




const Basket = (props) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const initialGoods = [
    { image: img, name: 'Трикутник', price: '0.80', quantity: 10 },
    { image: img, name: 'Трикутник', price: '0.80', quantity: 10 },
  ];

  useEffect(() => {
    const initialPrice = initialGoods.reduce(
      (acc, curr) => acc + parseFloat(curr.price) * curr.quantity,
      0
    );
    setTotalPrice(initialPrice);
  }, []);

  return (
    <>
      <div className={StyleCSS.Basket}>
        <div className={StyleCSS.NameAndClose}>
          <h2>Корзина</h2>
          <img src={Close} alt="Close" onClick={props.closeBasket} />
        </div>
        <div className={StyleCSS.ScrollItem}>
          {initialGoods.map((goods, index) => (
            <BoxGoods
              key={index}
              img={goods.image}
              name={goods.name}
              price={goods.price}
              quantity={goods.quantity}
              updateTotalPrice={(price) =>
                setTotalPrice((prevTotalPrice) => prevTotalPrice + price)
              }
            />
          ))}
        </div>
        <div className={StyleCSS.TotalPrice}>
          <div className={StyleCSS.PrictText}>
            <h2>Ціна разом</h2>
            <h1>${totalPrice.toFixed(2)}</h1>
          </div>
          <div className={StyleCSS.Confirm} onClick={props.openForm}>
            Замовити
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.isOpen,
});

const mapDispatchToProps = (dispatch) => ({
  closeBasket: () => dispatch({ type: 'CLOSE' }),
  openForm: () => dispatch({ type: 'OPEN_FORM' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);