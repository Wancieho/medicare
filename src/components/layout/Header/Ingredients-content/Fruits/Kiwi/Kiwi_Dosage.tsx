import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Kiwi_Dosage() {
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
                        <h2>What is the recommended dosage for using Kiwifruit(Kiwi)?
                        </h2>
                        <p>
                            The appropriate dose of kiwi for use as treatment depends on several
                            factors such as the user's age, health, and several other conditions.
                            At this time there is not enough scientific information to determine an
                            appropriate range of doses for kiwi. Keep in mind that natural products
                            are not always necessarily safe and dosages can be important. Be sure to
                            follow relevant directions on product labels and consult your pharmacist
                            or physician or other healthcare professional before using.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Kiwi_Dosage;