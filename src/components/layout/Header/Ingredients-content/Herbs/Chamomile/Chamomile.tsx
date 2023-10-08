import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import IngredientNameHeading from "../../Ingredient-heading";

function Chamomile() {
    return (
        <>
            <IngredientNameHeading ingredientName="Chamomile" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Chamomile_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Chamomile_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Chamomile_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Chamomile_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Chamomile_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Chamomile">Grow Chamomile</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
            </div>
        </>
    )
}

export default Chamomile;