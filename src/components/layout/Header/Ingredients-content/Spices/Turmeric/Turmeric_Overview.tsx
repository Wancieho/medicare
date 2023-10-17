import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Turmeric_Overview() {
    return (
        <>
            <IngredientNameHeading ingredientName="Turmeric" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Turmeric_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Turmeric_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Turmeric_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Turmeric_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Turmeric_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Turmeric">Grow Turmeric</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Turmeric"
                        familyName="Zingiberaceae" origin="Southeast Asia"
                        geoLocation="Indian subcontinent and southeast Asia" />
                    <div className="content-wrapper">
                        <h2>What is Turmeric?</h2>
                        <p>
                            Turmeric or Curcuma longa is a flowering plant in the ginger family
                            Zingiberaceae. It is a perennial, rhizomatous, herbaceous plant native
                            to the Indian subcontinent and Southeast Asia that requires temperatures
                            between 20 and 30 °C (68 and 86 °F) and high annual rainfall to thrive.
                        </p>
                        <p>
                            Plants are gathered each year for their rhizomes, some for propagation
                            in the following season and some for consumption.
                        </p>
                        <p>
                            The rhizomes are used fresh or boiled in water and dried, after which
                            they are ground into a deep orange-yellow powder commonly used as a
                            coloring and flavoring agent in many Asian cuisines, especially for
                            curries, as well as for the dyeing characteristics imparted by the
                            principal turmeric constituent, curcumin.
                        </p>
                        <p>
                            Turmeric powder has a warm, bitter, black pepper-like flavor and earthy,
                            mustard-like aroma.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Turmeric_Overview;