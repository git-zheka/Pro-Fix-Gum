import styleCSS from './style.module.scss'
import { useState, useEffect } from 'react';

import Title from '../title/Title'
import {Link} from 'react-router-dom'

import { apiURL } from '../../api';

export default function CreateProduct() {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch(apiURL, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then(response => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         throw new Error('Помилка при завантаженні.');
  //       }
  //     })
  //     .then(data => {
  //       setProducts(data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <>
          <div className={styleCSS.AddProducts}>
            <form className={styleCSS.AddProductForms}>
                  <label className={styleCSS.labels} htmlFor="modelURL">Посилання на 3D модель:</label>
                  <input className={styleCSS.inputs} type="text" id="modelURL" required/>

                  <label className={styleCSS.labels} htmlFor="imgURL">Посилання на фото:</label>
                  <input className={styleCSS.inputs} type="text" id="imgURL"  required/>

                  <label className={styleCSS.labels} htmlFor="name">Назва:</label>
                  <input className={styleCSS.inputs} type="text" id="name"  required/>

                  <label className={styleCSS.labels} htmlFor="price">Висота:</label>
                  <input className={styleCSS.inputs} type="number" id="price"  required/>

                  <label className={styleCSS.labels} htmlFor="h">Висота:</label>
                  <input className={styleCSS.inputs} type="text" id="h"  required/>

                  <label className={styleCSS.labels} htmlFor="w">Ширина:</label>
                  <input className={styleCSS.inputs} type="text" id="w"  required/>

                  <label className={styleCSS.labels} htmlFor="w">Діаметир отвора:</label>
                  <input className={styleCSS.inputs} type="text" id="w"  required/>

                  <label className={styleCSS.labels} htmlFor="w">Загальний опис</label>

                  <button className={styleCSS.btnOrder}>Zamówienie</button>
            </form>
          </div>
    </>
  );
}