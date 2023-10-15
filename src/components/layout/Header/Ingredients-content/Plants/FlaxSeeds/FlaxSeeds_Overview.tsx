import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";


function FlaxSeeds_Overview() {
    return (
        <>
            <IngredientNameHeading ingredientName="Flax Seeds" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/FlaxSeeds_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/FlaxSeeds_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/FlaxSeeds_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/FlaxSeeds_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/FlaxSeeds_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_FlaxSeeds">Grow Flax Seeds</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Flax Seeds"
                        familyName="Linaceae" origin="Syria, Turkey"
                        geoLocation="Syria, Switzerland, China, and India" />
                    <div className="content-wrapper">
                        <h2>What are Flax Seeds?</h2>
                        <p>
                            Flax, also known as common flax or linseed, is a flowering plant,
                            Linum usitatissimum, in the family Linaceae. It is cultivated as a
                            food and fiber crop in regions of the world with temperate climates.
                        </p>
                        <p>
                            Flaxseed is a plant-based food that provides healthful fat,
                            antioxidants, and fiber. It can provide many health benefits.
                            People grew flax as a crop in ancient Egypt and China. In Asia,
                            it has had a role in Ayurvedic medicine for thousands of years.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlaxSeeds_Overview;