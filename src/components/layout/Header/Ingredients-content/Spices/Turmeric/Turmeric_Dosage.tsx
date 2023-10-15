import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Turmeric_Dosage() {
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
                        <h2>What is the recommended dosage for using Turmeric?</h2>
                        <p>
                            Some companies are developing turmeric or curcumin products
                            that have increased bioavailability so they are absorbed better. It's
                            important to remember that herbs that are reformulated to be absorbed
                            better may also increase the harmful effects of the supplement too.
                            The Food and Drug Administration (FDA) has approved curcuminoids—anything
                            isolated from turmeric—and calls them generally recognized as safe.
                            Supplements from turmeric with 4,000 to 8,000 milligrams per day are
                            recognized as safe.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Turmeric_Dosage;