import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Grow_Ginger() {
    return (
        <>
            <IngredientNameHeading ingredientName="Ginger" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Ginger_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Ginger_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Ginger_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Ginger_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Ginger_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Ginger">Grow Ginger</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Ginger"
                        familyName="Zingiberaceae" origin="Southeast Asia"
                        geoLocation="All around the world" />
                    <div className="content-wrapper">
                        <h2>What do I grow Ginger?</h2>
                        <p>
                            Because ginger is a tropical plant, it will not live year-round in colder
                            climates. But that does not mean you cannot grow it at home. Plant it
                            during the beginning of spring (whenever you're sure there will not be
                            frost), or keep it potted indoors when temperatures are below 50 degrees
                            Fahrenheit.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <p>
                        Growing ginger is pretty simple. Like potatoes, you can start a new ginger plant
                        from a healthy root you buy at the produce market. Look for one that's about 3 to
                        5 inches and has some buds growing on it. Soak the root in water for a few hours
                        before planting to encourage growth.
                    </p>
                    <p>Follow these steps, too:</p>
                    <div className="ingredient-benefits">
                        <ul>
                            <li>
                                Select a pot that's deep enough for the root (a medium-size pot around
                                15 inches wide).
                            </li>
                            <li>
                                Fill the pot with healthy soil, something full of compost that lets
                                water in and out.
                            </li>
                            <li>Plant the root (buds facing up) 1 inch under the soil.</li>
                            <li>Place the pot somewhere to get sun for most of the day.</li>
                            <li>Water regularly to keep the soil slightly moist.</li>
                            <li>
                                Harvest the root once the plant is fully grown and the leaves start
                                to yellow.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Grow_Ginger;