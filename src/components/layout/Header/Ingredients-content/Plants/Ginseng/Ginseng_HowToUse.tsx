import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Ginseng_HowToUse() {
    return (
        <>
            <IngredientNameHeading ingredientName="Ginseng" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Ginseng_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Ginseng_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Ginseng_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Ginseng_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Ginseng_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Ginseng">Grow Ginseng</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Ginseng"
                        familyName="Araliaceae" origin="Shangdang China"
                        geoLocation="Asia, Japan and Canada" />
                    <div className="content-wrapper">
                        <h2>How is Ginseng used?</h2>
                        <p>Ginseng comes in the form of:</p>
                        <div>
                            <ul>
                                <li>Roots</li>
                                <li>Extracts</li>
                                <li>Powders</li>
                                <li>Tablets</li>
                                <li>Capsules</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="content-section2">
                    <h3>Roots, extracts and powders:</h3>
                    <p>
                        Ginseng root, extract, and  powder can be dissolved in water, juice, or
                        smoothies. Powders are often in higher dosages than tablets or capsules.
                        You may also find smaller amounts of ginseng added to energy drinks
                        and herbal teas.
                    </p>
                    <p>
                        While not as common, you can consume ginseng in its plant form by:
                    </p>
                    <div className="ingredient-benefits">
                        <ul>
                            <li>Peeling and chewing the raw root</li>
                            <li>Soaking the peeled raw root in wine to create an extract</li>
                            <li>Boiling the peeled, raw root to make tea</li>
                            <li>Soaking or boiling dried ginseng root to create an extract.</li>
                        </ul>
                    </div>
                    <h3>Tablets and Capsules:</h3>
                    <p>
                        Tablets or capsules typically contain the ground-up root or an extract
                        of one or more types of ginseng root. People are usually advised to
                        take one to two ginseng capsules twice daily with food. The number
                        of capsules may vary depending on the supplement dosage.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Ginseng_HowToUse;