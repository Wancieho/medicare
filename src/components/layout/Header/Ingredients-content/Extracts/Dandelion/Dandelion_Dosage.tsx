import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Dandelion_Dosage() {
    return (
        <><IngredientNameHeading ingredientName="Dandelion" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to={"/Dandelion_Overview"}>Overview</Link>
                    </li>
                    <li>
                        <Link to={"/Dandelion_HowToUse"}>How to use</Link>
                    </li>
                    <li>
                        <Link to={"/Dandelion_Benefits"}>Benefits</Link>
                    </li>
                    <li>
                        <Link to={"/Dandelion_SideEffects"}>Side Effects</Link>
                    </li>
                    <li>
                        <Link to={"/Dandelion_Dosage"}>Dosage</Link>
                    </li>
                    <li>
                        <Link to={"/Grow_Dandelion"}>Grow Dandelion</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Taraxacum(Dandelion)"
                        familyName="Asteraceae" origin="Eurasia"
                        geoLocation="Eurasia and North America" />
                    <div className="content-wrapper">
                        <h2>What is the recommended dosage for using Dandelion?</h2>
                        <p>
                            There is no established dosing. Follow the manufacturers
                            recommendation for each product. Safe and effective use of
                            Taraxacum officinale supplement is not established for individuals
                            under the age of 18.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dandelion_Dosage;