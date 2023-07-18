import { createStore, combineReducers } from 'redux';

const isBasketReducer = (state = false, action) => {
  switch (action.type) {
    case 'OPEN':
      return true;
    case 'CLOSE':
      return false;
    default:
      return state;
  }
};

const isAdressReducer = (state = false, action) => {
  switch (action.type) {
    case 'OPEN_FORM':
      return true;
    case 'CLOSE_FORM':
      return false;
    default:
      return state;
  }
};

const isProductsOpen = (state = false, action) => {
  switch (action.type) {
    case 'OPEN_PRODUCTS':
      return true;
    case 'CLOSE_PRODUCTS':
      return false;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  isOpen: isBasketReducer,
  isOpenForm: isAdressReducer,
  isProducts: isProductsOpen,
});

const store = createStore(rootReducer);

export default store;