import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Grape_Seeds_SideEffects() {
    return (
        <>
            <IngredientNameHeading ingredientName="Grape Seeds" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Grape-Seeds_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Grape-Seeds_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Grape-Seeds_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Grape-Seeds_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Grape-Seeds_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Grape-Seeds">Grow Grape Seeds</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Grape Seeds"
                        familyName="Vitaceae" origin="Native to the Mediterranean 
                    region, central Europe and southwest Asia"
                        geoLocation="Mediterranean 
                    region, central Europe and southwest Asia" />
                    <div className="content-wrapper">
                        <h2>What are the side effects of using Grape Seeds?</h2>
                        <p>
                            Grape seed extract is generally considered safe. Side effects may
                            include a headache, an itchy scalp, dizziness, and nausea. People allergic to
                            grapes should not use grape seed extract. If you have a bleeding disorder or high
                            blood pressure, talk to your doctor before you start using grape seed extract.
                            Interactions. If you take any medicines regularly, talk to your doctor before
                            you start using grape seed extract. It could interact with drugs like blood
                            thinners, NSAID painkillers (like aspirin, Advil, and Aleve), certain heart
                            medicines, cancer treatments, and others.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Grape_Seeds_SideEffects;