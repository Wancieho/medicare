import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Garlic_Dosage() {
    return (
        <>
            <IngredientNameHeading ingredientName="Garlic(Allium sativum)" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Garlic_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Garlic_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Garlic_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Garlic_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Garlic_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Garlic">Grow Garlic</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Garlic(Allium sativum)"
                        familyName="Amaryllidaceae" origin="Native to South Asia, 
                    Central Asia and northeastern Iran"
                        geoLocation="South Asia, 
                    Central Asia and northeastern Iran" />
                    <div className="content-wrapper">
                        <h2>What is the recommended dosage for using Garlic?</h2>
                        <p>
                            Although no official recommendations exist for how much garlic you should eat,
                            studies show that eating 1-2 cloves (3-6 grams) per day may have health
                            benefits. If you notice any side effects after eating more than this
                            amount, consider reducing your intake.

                            Cooking garlic before eating it may also help prevent side effects like
                            garlic breath, digestive issues, and acid reflux.

                            If you have any underlying health conditions or are taking medications, itis
                            best to talk with your doctor before making any changes to your diet or
                            using any herbal supplements.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Garlic_Dosage;