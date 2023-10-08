import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Rosemary_Overview() {
    return (
        <>
            <IngredientNameHeading ingredientName="Rosemary" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Rosemary_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Rosemary_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Rosemary_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Rosemary_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Rosemary_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Rosemary">Grow Rosemary</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Salvia rosmarinus(Rosemary)"
                        familyName="Lamiaceae" origin="Native to the Mediterranean region"
                        geoLocation="Mediterranean Region" />
                    <div className="content-wrapper">
                        <h2>What is Rosemary?</h2>
                        <p>
                            Rosemary is an aromatic evergreen shrub with leaves similar to hemlock
                            needles. It is native to the Mediterranean region, but is reasonably
                            hardy in cool climates. Special cultivars like 'Arp' can withstand winter
                            temperatures down to about -20 degrees Celcius (-4 degrees Fahrenheit).
                            It can withstand droughts, surviving a severe lack of water for lengthy
                            periods. In some parts of the world, it is considered a potentially
                            invasive species. The seeds are often difficult to start, with a low
                            germination rate and relatively slow growth, but the plant can live
                            as long as 30 years.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rosemary_Overview;