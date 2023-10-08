import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Grape_Seeds_HowToUse() {
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
                        <h2>How are Grape Seeds used?</h2>
                        <p>
                            Grape seed extract comes from Vitis vinifera, the wild
                            grape from which most wine grapes originate. This species is native to the
                            Mediterranean region, central Europe, and Southwestern Asia around the
                            Caspian Sea, but its use in winemaking and medicine first began around
                            the Caspian Sea and moved westward. Grape Seeds are used in:
                        </p>
                        <ul>
                            <li>Medicine</li>
                            <li>Food, Desserts, and Drinks</li>
                        </ul>
                        <p>
                            To make grape seed extract, manufacturers press grape seeds to remove the
                            oil, and then dry and pulverize them into a concentrated extract that they
                            form into a tablet, capsule, or liquid.
                            Grape seed extract seems to be rich in some nutrients, but there is not enough
                            evidence to know whether GSE has health benefits over the short or long term.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <p>
                        European folk healers made an ointment from the sap of grapevines to treat skin and eye diseases.
                        Grape leaves were used to stop bleeding, inflammation, and pain, such as the kind brought on by
                        hemorrhoids.
                    </p>
                    <p>
                        Unripe grapes were used to treat sore throats, and dried grapes (raisins) were used
                        for constipation and thirst. Round, ripe, sweet grapes were used to treat a range of health
                        problems including cancer, cholera, smallpox, nausea, eye infections, and skin, kidney, and
                        liver diseases.
                    </p>
                    <p>
                        Standardized extracts of grape seed may be used to treat a range of health problems related to
                        free radical damage, including heart disease, diabetes, and cancer. Grape seed extract has
                        also been shown to protect against bacterial infections, such as Staphylococcus aureus.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Grape_Seeds_HowToUse;