import styleCSS from './style.module.scss'
import { useState, useEffect } from 'react';

import NavBar from './NavBar'


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
       <section className={styleCSS.AllUser}>
        <div className={styleCSS.NavBarPage}>
          <NavBar />
        </div>
        <div className={styleCSS.Right}>
          
        </div>
       </section> 
    </>
  );
}