import StyleCSS from '../basket.module.scss';
import React, { useState } from 'react';

import Close from '../../../media/Close.svg';

import Add from '../../../media/Add.svg';
import TakeAway from '../../../media/TakeAway.svg';

export default function Product({image, name, price}) {

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

        <div className={StyleCSS.btnDelate}>Видалити</div>
        <div className={StyleCSS.btnDelate}>Редагувати</div> 
      </div>
    </>
  );
}