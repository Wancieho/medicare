import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Ingredient_SideEffects() {
    return (
        <>
            <IngredientNameHeading ingredientName="Tea-Tree-Oil" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Tea-Tree-Oil_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Tea-Tree-Oil_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Tea-Tree-Oil_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Tea-Tree-Oil_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Tea-Tree-Oil_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Tea-Tree-Oil">Grow Tea Tree Oil</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Tea tree oil(Melaleuca oil)"
                        familyName="Myrtaceae" origin="Native to Australia"
                        geoLocation="Southeast coast of Australia" />
                    <div className="content-wrapper">
                        <h2>What are the side effects of using Tea-Tree-Oil?</h2>
                        <p>
                            Tea tree oil is toxic when swallowed.
                        </p>
                        <p>
                            Most people can use tea tree oil topically with no problems. However,
                            tea tree oil can cause:
                        </p>
                        <div className="ingredient-benefits">
                            <ul>
                                <li>Skin irritation</li>
                                <li>Itching</li>
                                <li>Burning</li>
                                <li>Scaling</li>
                            </ul>
                            <ul>
                                <li>Redness</li>
                                <li>Dryness</li>
                                <li>Stinging</li>
                                <li>Allergic skin rash (dermatitis)</li>
                            </ul>
                        </div>
                        <p>
                            Don't use tea tree oil if you have eczema. Tea tree oil is toxic
                            when swallowed. Serious side effects can occur, including:
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <h3>Confusion:</h3>
                    <p>
                        A lack of muscle control or coordination of voluntary movements (ataxia)
                        Decreasing levels of consciousness
                        One study suggests that repeated exposure to lavender oil and tea tree
                        oil might have led to the swelling of the breast tissue (gynecomastia)
                        in young boys.
                    </p>
                    <h3>Interactions:</h3>
                    <p>
                        Although tea tree oil is often used in combination with other drugs when
                        treating bacterial or fungal skin conditions, there's currently no evidence
                        showing drug interactions.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Ingredient_SideEffects;