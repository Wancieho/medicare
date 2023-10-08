import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import IngredientNameHeading from "../../Ingredient-heading";

function Lavender() {
    return (
        <>
            <IngredientNameHeading ingredientName="Lavender" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Lavender_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Lavender_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Lavender_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Lavender_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Lavender_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Lavender">Grow Lavender</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
            </div>
        </>
    )
}

export default Lavender;