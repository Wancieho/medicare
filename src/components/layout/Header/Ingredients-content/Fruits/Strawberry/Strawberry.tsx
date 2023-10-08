import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import IngredientNameHeading from "../../Ingredient-heading";

function Strawberry() {
    return (
        <>
            <IngredientNameHeading ingredientName="Strawberries" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Strawberry_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Strawberry_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Strawberry_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Strawberry_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Strawberry_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Strawberry">Grow Strawberry</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
            </div>
        </>
    )
}

export default Strawberry;