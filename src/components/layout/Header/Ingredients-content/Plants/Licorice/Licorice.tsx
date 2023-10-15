import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import IngredientNameHeading from "../../Ingredient-heading";

function Licorice() {
    return (
        <>
            <IngredientNameHeading ingredientName="Licorice" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Licorice_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Licorice_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Licorice_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Licorice_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Licorice_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Licorice">Grow Licorice</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
            </div>
        </>
    )
}

export default Licorice;