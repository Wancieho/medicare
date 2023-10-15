import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Peppermint_SideEffects() {
    return (
        <>
            <IngredientNameHeading ingredientName="Peppermint" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Peppermint_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Peppermint_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Peppermint_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Peppermint_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Peppermint_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Peppermint">Grow Peppermint</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Peppermint"
                        familyName="Lamiaceae" origin="Europe and Middle East"
                        geoLocation="North America, Europe and Middle East" />
                    <div className="content-wrapper">
                        <h2>What are the side effects is using Peppermint?</h2>
                        <p>
                            The following Side affects include:
                        </p>
                        <ul>
                            <li>Heartburn, nausea, and vomiting in patients with IBS, after
                                taking peppermint oil.
                            </li>
                            <li>Dermatitis following external application of peppermint oil.</li>
                            <li>Toxicity: Acute lung injury has been reported following intravenous
                                injection of peppermint oil.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Peppermint_SideEffects;