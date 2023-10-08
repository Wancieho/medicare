import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Lavender_SideEffects() {
    return (
        <>
            <IngredientNameHeading ingredientName="Lavender" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Lavender_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Lavender_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Lavender_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Lavender_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Lavender_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Lavender">Grow Lavender</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Lavandula(Lavender)"
                        familyName="LamiaCeae" origin="Europe,northern to eastern Africa, 
                    Mediterranean, southwest Asia, and India"
                        geoLocation="Europe,northern to eastern Africa, 
                    Mediterranean, southwest Asia, and India." />
                    <div className="content-wrapper">
                        <h2>What are the side effects of using Lavender?</h2>
                        <p>
                            According to the <a href="https://www.nccih.nih.gov/health/lavender">
                                NCCIH</a>, it's likely safe to consume lavender in the amounts typically
                            used in foods. So go ahead and enjoy your lavender tea, muffins, or honey.
                        </p>
                        <p>
                            Safely using lavender as a topical oil will depend on your skin's sensitivity.
                            Some people experience an allergic reaction on the skin following the
                            application of lavender oil. Always use a carrier oil and do a patch test
                            before you use lavender on your skin.
                        </p>
                        <p>
                            More research is needed to determine the safety of lavender in people who
                            are pregnant or breastfeeding. If these conditions apply to you, talk with
                            your doctor before beginning any treatment with lavender.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Lavender_SideEffects;