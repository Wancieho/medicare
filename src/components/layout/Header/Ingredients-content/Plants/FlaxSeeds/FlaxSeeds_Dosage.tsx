import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function FlaxSeeds_Dosage() {
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
                        <h2>What is the recommended dosage for using Flax Seeds?</h2>
                        <p>
                            Consume 3 to 4 tablespoons of flaxseed daily to benefit from the
                            fiber and omega-3 fatty acids. If you are taking flaxseed for
                            constipation, consume 2 tablespoons daily. Toddlers should consume
                            about 1 tablespoon per day. While there are no reports of flaxseed
                            overdosing, you may experience excess gas and bloating if you eat
                            large servings of the meal because of its fiber and fat content.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlaxSeeds_Dosage;