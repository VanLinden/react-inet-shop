import React, { useReducer } from 'react';

import ShopContext from './shop-context';
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT} from './reducers';

const GlobalState = props => {
    const products = [
        { id: 'p1', title: 'Gaming Mouse', price: 31.00 },
        { id: 'p2', title: 'Harry Potter', price: 21.00 },
        { id: 'p3', title: 'Plastic Bottle', price: 31.00 },
        { id: 'p4', title: 'Plant', price: 21.00 }
    ];
    const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

    const addProductToCart = product => {
        setTimeout(() => {
            dispatch({type: ADD_PRODUCT, product: product})
        }, 700);
    };

    const removeProductFromCart = productId => {
        setTimeout(() => {
            dispatch({type: REMOVE_PRODUCT, productId: productId})
        }, 700);
    };

    return (
        <ShopContext.Provider
            value={{
                products: products,
                cart: cartState.cart,
                addProductToCart: addProductToCart,
                removeProductFromCart: removeProductFromCart
            }}
        >
            {props.children}
        </ShopContext.Provider>
    );
}

export default GlobalState;