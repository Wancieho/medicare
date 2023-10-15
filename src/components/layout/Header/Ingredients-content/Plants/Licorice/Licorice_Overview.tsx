import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Licorice_Overview() {
    return (
        <>
            <IngredientNameHeading ingredientName="Licorice" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Licorice_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Licorice_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Licorice_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Licorice_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Licorice_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Licorice">Grow Licorice</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Liquorice(Licorice)"
                        familyName="Fabaceae" origin="Native to Western Asia, North Africa, 
                    and Southern Europe"
                        geoLocation="Western Asia, North Africa, 
                    and Southern Europe" />
                    <div className="content-wrapper">
                        <h2>What is Licorice?</h2>
                        <p>
                            The liquorice plant is an herbaceous perennial legume native to Western
                            Asia, North Africa, and Southern Europe. Liquorice is used as a
                            flavouring in candies, tobacco, beverages, and pharmaceuticals,
                            and is marketed as a dietary supplement.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Licorice_Overview;