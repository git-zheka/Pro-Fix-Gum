import StyleCSS from './basket.module.scss' 
import React, { useState } from 'react';

import Close from '../../media/Close.svg'
import img from '../../media/TreangleSlider.svg'

import Add from '../../media/Add.svg'
import TakeAway from '../../media/TakeAway.svg'

import { useEffect } from 'react';

export default function Basket() {
    const [count, setCount] = useState(10);

    const increaseCount = () => {
        setCount(count + 1);
      };
    
      const decreaseCount = () => {
        if (count > 10) {
          setCount(count - 1);
        }
      };

  return (
    <>
        <div className={StyleCSS.Basket}>
            <div className={StyleCSS.NameAndClose}>
                <h2>Корзина</h2>
                <img src={Close} />
            </div>
                
            <div className={StyleCSS.Goods}>
                <div className={StyleCSS.GoodsImg}>
                    <img src={img} />
                </div>
                <div className={StyleCSS.GoodsName}>
                    <h5> Трикутник </h5>
                    <h6> 0.75 грн </h6>
                </div>
                <div className={StyleCSS.GoodsCount}>
                    <div className={StyleCSS.Add} onClick={increaseCount}><img src={Add} /></div>
                    <div className={StyleCSS.Number}><h3>{count}</h3></div>
                    <div className={StyleCSS.TakeAway} onClick={decreaseCount}><img src={TakeAway} /></div>
                </div>
                <div className={StyleCSS.GoodsDalete}>
                    <img src={Close}/>
                </div>
            </div>
        </div>
    </>
  );
}