import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Kiwi_Overview() {
    return (
        <>
            <IngredientNameHeading ingredientName="Kiwifruit(Kiwi)" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Kiwi_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Kiwi_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Kiwi_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Kiwi_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Kiwi_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Kiwi">Grow Kiwi</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Kiwifruit(Kiwi)"
                        familyName="Actinidiaceae" origin="Native to central and eastern China"
                        geoLocation="New Zealand, Italy, California, France, Greece, and Chile" />
                    <div className="content-wrapper">
                        <h2>What is Kiwifruit(Kiwi)?</h2>
                        <p>
                            Kiwifruit (often shortened to kiwi in North American, British and
                            continental European English) or Chinese gooseberry is the
                            edible berry of several species of woody vines in the genus Actinidia.
                        </p>
                        <p>
                            It should be noted that kiwis are not the same species as kiwiberry.
                            Even though they belong to the same plant family, Actinidia,
                            kiwiberries are small and have edible, grape-like skin.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <p>
                        Kiwis are larger and have thicker, fuzzy skin. The skin of most varieties
                        of kiwi should be peeled off before you eat them. However, some people
                        like to eat the skin of golden or yellow kiwi varieties because the skin
                        is softer than the skin of green kiwis.
                    </p>
                    <p>
                        Kiwis have an impressive nutrient profile. Below is a nutrition breakdown
                        for a 3.5 ounce (100-gram) serving of the flesh of a raw, green kiwi:
                    </p>
                    <div className="ingredient-benefits">
                        <ul>
                            <li>Calories: 64</li>
                            <li>Carbs: 14 grams</li>
                            <li>Fiber: 3 grams</li>
                            <li>Fat: 0.44 grams</li>
                            <li>Protein: 1 gram</li>
                            <li>Vitamin E: 9% of the DV</li>
                        </ul>
                        <ul>
                            <li>Vitamin K: 34% of the DV</li>
                            <li>Folate: 7% of the DV</li>
                            <li>Copper: 15% of the DV</li>
                            <li>Potassium: 4% of the DV</li>
                            <li>Magnesium: 4% of the DV</li>
                            <li>Vitamin C: 83% of the Daily Value (DV)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Kiwi_Overview;