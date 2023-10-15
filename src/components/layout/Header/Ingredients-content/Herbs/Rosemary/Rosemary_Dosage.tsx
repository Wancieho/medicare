import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Rosemary_Dosage() {
    return (
        <>
            <IngredientNameHeading ingredientName="Rosemary" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Rosemary_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Rosemary_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Rosemary_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Rosemary_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Rosemary_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Rosemary">Grow Rosemary</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Salvia rosmarinus(Rosemary)"
                        familyName="Lamiaceae" origin="Native to the Mediterranean region"
                        geoLocation="Mediterranean Region" />
                    <div className="content-wrapper">
                        <h2>What is the recommended dosage for using Rosemary?</h2>
                        <p>
                            Various rosemary preparations have been used for various indications; however,
                            clinical evidence is lacking to provide dosing recommendations for any indication.
                            Traditional uses include 2 g of chopped leaf infused in water, or 2 to 4 g of the
                            shoot.
                        </p>
                        <p>
                            Other decoctions have been described. Low oral doses (750 mg) of dried
                            rosemary leaf powder were used in a clinical study for improvement of memory speed
                            in elderly patients, while higher doses (6 g) impaired memory speed. Studies
                            evaluating rosemary aromatherapy used 3 to 4 drops for inhalation.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rosemary_Dosage;