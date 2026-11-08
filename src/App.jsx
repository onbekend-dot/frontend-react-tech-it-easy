import './App.css';
import   originalStock   from './helpers/originalStock.js'
import { totaleVerkopen } from './helpers/productsSold.js'
import img from './assets/screenshots/tech-it-easy-best-seller.png'
import  check from './assets/check.png';
import minus from './assets/minus.png';
 //import uitverkocht from './assets/uitverkocht.png'
// import  { bestSellingTv }  from './helpers/bestSellingTv.js'
import { toBeSold } from './helpers/toBeSold.js'
//import showOutcomeInConsole from './oefenbestand.js';

import { alleTvs } from "./helpers/alleTvs.js"
//import {bestSellingTv as} from "./helpers/inventory.js";




function App() {

    //showOutcomeInConsole();

    function resultaat(text) {
        alert(text);

    }




    return (
        <>

            <header className="header">
                <h1>Tech it easy dashboard</h1>
                <h2>Verkoopoverzicht</h2>

            </header>


            <section>

                <div className="vierkant1">
                    <p>Totale verkopen {totaleVerkopen}</p>
                </div>
                <div className="vierkant2">
                    <p>Originele voorraad {originalStock}</p>
                </div>
                <div className="vierkant3">
                    <p>Nog te verkopen{toBeSold}</p>
                </div>
            </section>
            <section className="section2">
                <div className="vierkant4">
                    <div className="info">

                        <h3>wifi</h3><img src={minus} alt="minus" className="minus-icon"/>


                        <h3>speech</h3><img src={check} alt="check" className="check-icon"/>


                        <h3>hdr</h3><img src={check} alt="check" className="check-icon"/>


                        <h3>bluetooth</h3><img src={minus} alt="minus" className="minus-icon"/>


                        <h3>ambilight</h3><img src={minus} alt="minus" className="minus-icon"/>

                    </div>
                    <div className="bestSoldTv">
                        <h2>best verkochte televisie</h2>
                    <img src={img} alt="afbeelding met de best verkochte televiesie"/>
                    </div>
                </div>


            </section>

            <section className="section3">
                <div className="button">
                    <button onClick={() => resultaat("meest verkocht eerst")}>
                        Meest verkocht eerst
                    </button>

                    <button onClick={() => resultaat("goedkoopste eerst")}>
                        Goedkoopste eerst
                    </button>

                    <button onClick={() => resultaat("meest geschikt voor sport eerst")}>
                        Meest geschikt voor sport
                    </button>
                </div>
            </section>


            <section className="section4">
                <h3>Onze merken</h3>

                <ul className="list">
                    {alleTvs.map(tv => (
                        <li key={tv.type}>
                            <img src={ img } alt={tv.type}/>
                            <h2>{tv.brand}</h2>
                        </li>

                    ))}
                </ul>
                </section>

            <div className="section-wrapper">
            <section className="section5">

                    <ul className="list2">
                        {alleTvs.map(tv => (
                            <li key={tv.type}>
                        <h2>{tv.brand}</h2>

                                <ul>
                                    {tv.options.map(option => (
                                <li key={option.name}>
                                    <h2>{option.name}</h2>
                                </li>
                            ))}
                                </ul>
                            </li>


                        ))}
                            </ul>
                    </section>


            <section className="section6">

                <ul className="list3">
                    {alleTvs.map(tv => (
                        <li key={tv.type}>
                            <h2>{tv.brand}</h2>

                            <ul>
                                {tv.options.map(option => {
                                    return (
                                    <li key={option.name}>
                                        {option.name} - {option.applicable.toString()}
                                        <img src={option.applicable ? check : minus}  alt="icon" />
                                        </li>

                                    );

                                })}
                            </ul>

                        </li>

                    ))}
                </ul>

            </section>
            </div>

            <section className="section7">
                <div className="button">
                    <button onClick={() => resultaat()}>
                        Grootste schermgrootte
                    </button>
                     <ul className="list4">
                      {alleTvs
                        .sort((a, b ) => {
                            return (
                                  b.availableSizes[b.availableSizes.length - 1] -
                                  a.availableSizes[a.availableSizes.length - 1]
                            );
                                 })
                                 .map(tv => (
                                 <li key={tv.type}>
                                     {tv.brand} - {tv.type}
                                 </li>
                                 ))}

                             </ul>
                </div>

            </section>








</>

);
}


export default App;
















