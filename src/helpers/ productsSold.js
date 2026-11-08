import {bestSellingTv, products} from "./inventory.js";


let totaalVerkocht =  bestSellingTv.sold;
for (let  i = 0; i < products.length ; i++) {
    totaalVerkocht += products[i].sold;
}




console.log(totaalVerkocht);

export const totaleVerkopen= totaalVerkocht;