import styleCSS from './style.module.scss'
import { useState, useEffect } from 'react';

import NavBar from './NavBar'

import Title from '../../components/title/Title'
import {Link} from 'react-router-dom'

import { apiURL } from '../../api';

export default function Admin() {
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
       <section className={styleCSS.Admin}>
        <div className={styleCSS.NavBarPage}>
          <NavBar />
        </div>
          


       </section> 
    </>
  );
}