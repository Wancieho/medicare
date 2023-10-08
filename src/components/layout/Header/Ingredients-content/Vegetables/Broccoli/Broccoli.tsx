import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import IngredientNameHeading from "../../Ingredient-heading";

function Broccoli() {
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
            </div>
        </>
    )
}

export default Broccoli;