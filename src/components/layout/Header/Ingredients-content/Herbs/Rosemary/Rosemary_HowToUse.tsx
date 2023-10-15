import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Rosemary_HowToUse() {
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
                        <h2>How is Rosemary used?</h2>
                        <p>The leaves and twigs of the rosemary plant are used :</p>
                        <ul>
                            <li>Foods, Beverages, Desserts</li>
                            <li>Medicine</li>
                            <li>Aromatherapy</li>
                            <li>Self-clean-care(Baths)</li>
                        </ul>
                    </div>
                </div>
                <div className="content-section2">
                    <div className="ingredient-benefits-a">
                        <ul>
                            <li>
                                <h3>Children:</h3>
                                <p>
                                    Because rosemary has not been studied in children, it is not recommended
                                    for medicinal use in those under age 18. It is safe to eat as a spice in
                                    food, however.
                                </p>
                            </li>
                            <li>
                                <h3>Adults:</h3>
                                <p>
                                    Rosemary can be used as a tea made from the dry herb, a tincture, fluid
                                    extract, decoction for a bath, or as an essential oil mixed with other
                                    oils for topical use. Speak to your doctor to find the right dose for
                                    your condition. Total daily intake <span className="span-em">
                                        should not exceed</span> 4 to 6 grams of the
                                    dried herb. <span className="span-em">Do NOT</span> take rosemary oil
                                    <span className="span-em">orally</span>.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rosemary_HowToUse;