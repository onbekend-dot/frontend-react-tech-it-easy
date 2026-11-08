
// oefenbestand.js
//export const alleTvs = [bestSellingTv, ...products];

//import { totaleVerkopen } from './ productsSold.js';
import { products, bestSellingTv } from './inventory.js';
//import { products, bestSellingTv } from './inventory.js';
//-----------------------------------------------------------------------------------------------------
//LES2 OPDRACHT 1,VRAAG 1A, ARRAY MET ALLE TYPE NAMEN

//function showOutcomeInConsole() {
//    console.log("uitkomst opdracht 1a");
  //  console.log(products.length);
//

//const tvTypes = [
//    bestSellingTv.type,...
//    products.map(product => product.type)
//    ];
//console.log(tvTypes);
//---------------------------------------------------------------------------------------------------
//LES2 OPDRACHT 1, VRAAG 1B, ALLE INFO OVER UITVERKOCHTE TV'S

//const resterendeVoorraad = totaal - totaleVerkopen;

//const uitverkocht = [bestSellingTv, ...products].filter(product => {
//    return product.originalStock - product.sold === 0;

//});
 //   console.log(resterendeVoorraad)
//    console.log(uitverkocht);

//---------------------------------------------------------------------------------------------------
//LES2 OPDRACHT1, VRAAG 1C,
//Opdracht 1c: Gebruik een array-methode om
// de informatie van het tv-type 'NH3216SMART' op te halen.

 //const gezochteType= products.find((product) => {
//     return product.type === 'NH3216SMART';
//});

//console.log(gezochteType);
//console.log(bestSellingTv);
//-----------------------------------------------------------------------------------------------------
//LES2 OPDRACHT1, 1D
//Opdracht 1d: Gebruik een array-methode om een lijst te maken van de merk- en tv-namen waarbij aangegeven wordt
// of deze geschikt zijn voor sport-kijkers (een verversingssnelheid van 100Hz of hoger).
// Doe dit in het format { name: 'Toshiba HD TV', suitable: false }. Log de uitkomst in de console.

//const alleTvs = [ bestSellingTv, ...products];
//const  tvTypes = alleTvs

//    .filter(product => {
///        return product.refreshRate > 99;
//        })
//        .map(product => {
//        return product.type;
//    });
//console.log(tvTypes);
//-----------------------------------------------------------------------------------------------------
//LES2 OPDRACHT 1E
//Opdracht 1e (uitdaging): Gebruik array-methoden  om alle informatie te verzamelen
// van de tv's die beschikbaar zijn in schermgroottes van 65 inch en groter.

 //const alleTvs = [ bestSellingTv, ...products ];
// const tvTypes = alleTvs

//     .filter(product => {
//         return product.availableSizes.some(size   => size >  64);
//     })
 //    .map(product => {
//         return product.type;
//     });

// console.log(tvTypes);

//console.log(alleTvs[0].availableSizes);
//-----------------------------------------------------------------------------------------------------
//LES2 OPDRACHT 1F
//Opdracht 1f (uitdaging): Gebruik array-methoden om alle informatie te verzamelen
// van de tv's die over ambilight beschikken. Log de uitkomst in de console.

//const alleTvs = [ bestSellingTv, ...products ];
//const tvTypes = alleTvs
//    .filter(tv  => {
 //       return tv.options.some(option => {
//            return option.name.toLowerCase() === "ambilight" && option.applicable;
//        });
//    })
//    .map(tv => {
////    return tv.type;

//    });
//    console.log(tvTypes);
//    .filter(product => {
//        return product.type.ambilight.name);
//})
//    .map(product => {
//        return product.type;
//    });

//console.log(tvTypes);
//------------------------------------------------------------------------------------------------------
//LES2 OPDRACHT2A
//Opdracht 2a: Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI, etc.)
// in een lijst op de pagina weer te geven. Dit geeft het personeel een duidelijk overzicht
// van wat zij verkopen.
// Dat er dubbele merknamen in komen, is niet erg.

//const = [ bestSellingTv, ...products ];
//const tvTypes = alleTvs


 //   .map(tv => {
 //       return tv.brand;
 //   });
//console.log(tvTypes);
//--------------------------------------------------------------------------------
//LES2 Opdracht 2b: Gebruik een array-methode om alle tv's van Tech It Easy weer te geven
// in hetzelfde format als de best verkochte tv. Gebruik hiervoor ook de helperfuncties
// die je hebt gemaakt tijdens deel 1,
// maar sla de opties (zoals bluetooth, wifi, etc.) nog even over.

//zie App.jsx
//------------------------------------------------------------------------------------
//LES2 Opdracht 2c: Gebruik opnieuw een array-methode om voor iedere tv alle optie-namen
// (zonder iconen)
// weer te geven in een lijst.
// zie App.jsx
//-------------------------------------------------------------------------------------------
//LES2 Opdracht 2d: Voeg nu de iconen toe door gebruik te maken van een beslisboom binnen de methode.
// Wanneer de waarde van de optie true is,
// willen we het check-icoon weergeven en wanneer de waarde van de optie false is, het minus-icoon.
//zie App.jsx
//-----------------------------------------------------------------------------------------------------
//LES2 OPDRACHT3
//Opdracht 3a: Zorg ervoor dat wanneer een gebruiker op de 'Meest verkocht eerst'-knop klikt, de
// inventory-array wordt gesorteerd op aantal verkochte items van hoog naar laag.
// Log de uitkomst in de console.

//const alleTvs = [ bestSellingTv, ...products ];


//alleTvs.sort ((a, b ) => {
//    return b.sold - a.sold;
//})
//console.log(alleTvs);
//------------------------------------------------------------------------------------------------------
//Opdracht 3b: Zorg ervoor dat wanneer een gebruiker op de 'Goedkoopste eerst'-knop klikt,
// de inventory-array wordt gesorteerd op prijs van laag naar hoog. Log de uitkomst in de console.

//const alleTvs = [ bestSellingTv, ...products ];

 //  alleTvs.sort ((a, b ) => {
//    return b.price - a.price;
//})
//console.log(alleTvs);
//--------------------------------------------------------------------------------------------------------
//Opdracht 3c: Zorg ervoor dat wanneer een gebruiker op 'Meest geschikt voor sport eerst'-knop klikt,
// de inventory -array wordt gesorteerd op verversingssnelheid van hoog naar laag.
// Log de uitkomst in de console.

//     const alleTvs = [ bestSellingTv, ...products ];
//     alleTvs.sort ((a, b ) => {
//         return a.refreshRate - b.refreshRate;
 //    })
//console.log(alleTvs);
 //--------------------------------------------------------------------------------------------
// Bonus
// Opdracht 1: Maak nog een extra knop met daarop 'Grootste schermgroottes eerst'.
// Wanneer de gebruiker op deze knop klikt, worden de tv's gesorteerd op basis van
// hun grootste schermgrootte.

 //    const alleTvs = [ bestSellingTv, ...products ];
 //    alleTvs.sort ((a, b ) => {
 //       return a. - b.refreshRate;
//   })
 //   console.log(alleTvs);