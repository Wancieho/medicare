import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Broccoli_Dosage() {
    return (
        <>
            <IngredientNameHeading ingredientName="Broccoli" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Broccoli_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Broccoli_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Broccoli_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Broccoli_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Broccoli_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Broccoli">Grow Broccoli</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Broccoli"
                        familyName="Brassicaceae" origin="Italy"
                        geoLocation="China, India, US, Spain, Mexico" />
                    <div className="content-wrapper">
                        <h2>What is the recommended dosage for using Broccoli?</h2>
                        <p>
                            Broccoli 500 g daily and broccoli sprouts 50 g daily have been used in clinical
                            trials. Preparation methods affect bioavailability of active chemical compounds
                            and relevant endogenous enzymes.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Broccoli_Dosage;