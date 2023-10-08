import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import IngredientNameHeading from "../../Ingredient-heading";

function Kiwi() {
    return (
        <>
            <IngredientNameHeading ingredientName="Kiwifruit(Kiwi)" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Kiwi_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Kiwi_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Kiwi_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Kiwi_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Kiwi_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Kiwi">Grow Kiwi</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
            </div>
        </>
    )
}

export default Kiwi;