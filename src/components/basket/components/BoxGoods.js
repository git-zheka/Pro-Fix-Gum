import StyleCSS from '../basket.module.scss';
import React, { useState } from 'react';

import Close from '../../../media/Close.svg';

import Add from '../../../media/Add.svg';
import TakeAway from '../../../media/TakeAway.svg';

export default function BoxGoods({image, name, price, quantity, updateTotalPrice }) {
  const [count, setCount] = useState(quantity);

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
    updateTotalPrice(parseFloat(price));
  };

  const decreaseCount = () => {
    if (count > quantity) {
      setCount((prevCount) => prevCount - 1);
      updateTotalPrice(-parseFloat(price));
    }
  };

  return (
    <>
      <div className={StyleCSS.Goods}>
        <div className={StyleCSS.GoodsImg}>
            <img src={image} />
        </div>
        <div className={StyleCSS.GoodsName}>
          <h5>{name}</h5>
          <h6>{price}</h6>
        </div>
        <div className={StyleCSS.GoodsCount}>
          <div className={StyleCSS.Add} onClick={increaseCount}>
            <img src={Add} alt="Add" />
          </div>
          <div className={StyleCSS.Number}>
            <h3>{count}</h3>
          </div>
          <div className={StyleCSS.TakeAway} onClick={decreaseCount}>
            <img src={TakeAway} alt="Take Away" />
          </div>
        </div>
        <div className={StyleCSS.GoodsDalete}>
          <img src={Close} alt="Close" />
        </div>
      </div>
    </>
  );
}