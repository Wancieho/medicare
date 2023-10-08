import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Broccoli_HowToUse() {
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
                        <h2>How is Broccoli used?</h2>
                        <p>
                            Broccoli can be eaten cooked or raw. The florets, leaves and stems are
                            fully edible and have several ways of consumption. This versatile
                            vegetable can be used in various recipes, as a standalone ingredient
                            in salads, steamed and sprinkled with seasoning of choice and consumed
                            as a side dish. It can also be stir-fried or boiled and prepared as a
                            soup.
                        </p>
                        <p>
                            There are three main varieties of broccoli:
                        </p>
                        <ul>
                            <li>Clabrese brccoli</li>
                            <li>Sprouting brccoli</li>
                            <li>Purple Cauliflower</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Broccoli_HowToUse;