import { products, bestSellingTv } from './inventory.js';


//   VRAAG 1A hoeveel tv's zijn er al verkocht?


       let totaalVerkocht =  bestSellingTv.sold;
       for (let  i = 0; i < products.length ; i++) {
       totaalVerkocht += products[i].sold;
}
//console.log(totaalVerkocht);




export const totaleVerkopen= totaalVerkocht;