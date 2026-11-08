import { products } from './inventory.js';



const televisiePrice = products.filter((product) => {
    return product.price === '709';

})

console.log(`${televisiePrice}`);
