import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import IngredientNameHeading from "../../Ingredient-heading";

function Ginseng() {
    return (
        <>
            <IngredientNameHeading ingredientName="Ginseng" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Ginseng_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Ginseng_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Ginseng_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Ginseng_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Ginseng_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Ginseng">Grow Ginseng</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
            </div>
        </>
    )
}

export default Ginseng;