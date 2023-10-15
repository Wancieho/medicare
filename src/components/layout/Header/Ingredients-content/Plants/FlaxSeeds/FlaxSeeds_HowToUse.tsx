import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function FlaxSeeds_HowToUse() {
    return (
        <>
            <IngredientNameHeading ingredientName="Flax Seeds" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/FlaxSeeds_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/FlaxSeeds_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/FlaxSeeds_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/FlaxSeeds_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/FlaxSeeds_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_FlaxSeeds">Grow Flax Seeds</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Flax Seeds"
                        familyName="Linaceae" origin="Syria, Turkey"
                        geoLocation="Syria, Switzerland, China, and India" />
                    <div className="content-wrapper">
                        <h2>How are Flax Seeds used?</h2>
                        <p>
                            Flaxseed are available in the form of:
                        </p>
                        <div className="ingredient-benefits">
                            <ul>
                                <li>Seeds</li>
                                <li>Oils</li>
                                <li>Powder</li>
                            </ul>
                            <ul>
                                <li>Tablets</li>
                                <li>Capules</li>
                                <li>Flour</li>
                            </ul>
                        </div>
                        <p>Flax seeds are also used in:</p>
                        <div className="ingredient-benefits">
                            <ul>
                                <li>Cereals</li>
                                <li>Yogurt</li>
                                <li>Smoothies</li>
                                <li>Chili</li>
                            </ul>
                            <ul>
                                <li>Sauces</li>
                                <li>Gravies</li>
                                <li>Burritos</li>
                                <li>Lasagna</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="content-section2">
                    <p>
                        People use it as a dietary supplement to prevent constipation, diabetes,
                        high cholesterol, heart disease, cancer, and several other conditions.
                        The nutrients in flaxseed include lignans, antioxidants, fiber, protein,
                        and polyunsaturated fatty acids such as alpha-linolenic acid (ALA), or
                        omega-3. Consuming these nutrients may help lower the risk of various
                        conditions.
                    </p>
                    <p>
                        However, there is not currently enough evidence to support all of these
                        claims. Find out below, what the research says about flaxseed and its
                        possible health benefits.
                    </p>
                </div>
            </div>
        </>
    )
}

export default FlaxSeeds_HowToUse;