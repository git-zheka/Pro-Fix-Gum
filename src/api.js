import { data } from "jquery";

export const apiUrlProducts = 'https://localhost:7213/api/Products';
export const apiUrlLogin = 'https://localhost:7213/api/Authorization/login';

// компонетити карток на головній сторінці
export function BuyCardsAPI() {
    return fetch(apiUrlProducts, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Помилка при завантаженні.');
        }
      })
      .catch(error => {
        console.error(error);
      });
}


// Авторизація 
export function LoginAPI(gmail, password) {
    return fetch(`${apiUrlLogin}?gmail=${gmail}&password=${password}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Помилка при завантаженні.');
        }
      })
      .catch((error) => {
        console.error("Помилка з'єднання:", error);
      });
  }
  

// Завантаження усього товару для компонента products
  export function ProductsAPI() {
    return fetch(apiUrlProducts, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Помилка при завантаженні.');
          }
        })
        .catch(error => {
          console.error(error);
        });
  }
  
  // Детальна інформація про продукт запит по ID
    export function MoreInfoAPI(id) {
        return fetch(`${apiUrlProducts}/${id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then(response => {
              if (response.ok) {
                return response.json();
              } else {
                throw new Error('Помилка при завантаженні.');
              }
            })
            .catch(error => {
              console.error(error);
            });
    }

