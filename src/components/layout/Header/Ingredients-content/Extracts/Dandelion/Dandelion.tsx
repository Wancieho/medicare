import IngredientNameHeading from "../../Ingredient-heading";
import "../../../../../../App.css";
import { Link, Outlet } from "react-router-dom";

function Dandelion() {
    return (
        <>
            <IngredientNameHeading ingredientName="Dandelion" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to={"/Dandelion_Overview"}>Overview</Link>
                    </li>
                    <li>
                        <Link to={"/Dandelion_HowToUse"}>How to use</Link>
                    </li>
                    <li>
                        <Link to={"/Dandelion_Benefits"}>Benefits</Link>
                    </li>
                    <li>
                        <Link to={"/Dandelion_SideEffects"}>Side Effects</Link>
                    </li>
                    <li>
                        <Link to={"/Dandelion_Dosage"}>Dosage</Link>
                    </li>
                    <li>
                        <Link to={"/Grow_Dandelion"}>Grow Dandelion</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
            </div>
        </>
    )
}

export default Dandelion;