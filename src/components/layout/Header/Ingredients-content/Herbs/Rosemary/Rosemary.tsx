import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import IngredientNameHeading from "../../Ingredient-heading";

function Rosemary() {
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
            </div>
        </>
    )
}

export default Rosemary;