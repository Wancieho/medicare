import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Garlic_Overview() {
    return (
        <>
            <IngredientNameHeading ingredientName="Garlic(Allium sativum)" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Garlic_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Garlic_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Garlic_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Garlic_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Garlic_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Garlic">Grow Garlic</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Garlic(Allium sativum)"
                        familyName="Amaryllidaceae" origin="Native to South Asia, 
                    Central Asia and northeastern Iran"
                        geoLocation="to South Asia, 
                    Central Asia and northeastern Iran" />
                    <div className="content-wrapper">
                        <h2>What is Garlic</h2>
                        <p>
                            Garlic (Allium sativum) is a species of bulbous flowering plant in
                            the genus Allium. Its close relatives include the onion, shallot,
                            leek, chive, Welsh onion, and Chinese onion. It is native to South
                            Asia, Central Asia and northeastern Iran and has long been used as
                            a seasoning worldwide, with a history of several thousand years of
                            human consumption and use. It was known to ancient Egyptians and has
                            been used as both a food flavoring and a traditional medicine.
                            China produces 76% of the world's supply of garlic.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Garlic_Overview;