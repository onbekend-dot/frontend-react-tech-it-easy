import { products, bestSellingTv } from './inventory.js';









const alleTvs = [ bestSellingTv, ...products ];


  alleTvs.sort ((a, b ) => {
    return b.sold - a.sold;
})



    console.log(alleTvs);