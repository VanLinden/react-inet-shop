import React from 'react';

export default React.createContext({
    products: [
        { id: 'p1', title: 'Gaming Mouse', price: 31.00 },
        { id: 'p2', title: 'Harry Potter', price: 21.00 },
        { id: 'p3', title: 'Plastic Bottle', price: 31.00 },
        { id: 'p4', title: 'Plant', price: 21.00 }
    ],
    cart: [] 
 });