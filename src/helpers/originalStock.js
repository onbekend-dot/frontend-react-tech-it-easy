import { bestSellingTv, products } from './inventory.js';
//VRAAG 1C hoeveel tv 's zijn er in totaal ingekocht?




    let totaal = 0;

     for (let i = 0; i < products.length; i++) {
     totaal += products[i].originalStock;
}





     //const originalStock = {
 //        total: totaal,
///}  ;
//console.log(totaal);










export default  totaal;