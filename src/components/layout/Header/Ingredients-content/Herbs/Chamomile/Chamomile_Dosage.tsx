import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Chamomile_Dosage() {
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
                <div className="flex-content">
                    <Ingredient ingredientName="Chamomile"
                        familyName="Asteraceae" origin="Europe and western Asia"
                        geoLocation="Europe and western Asia" />
                    <div className="content-wrapper">
                        <h2>How much chamomile should you take?</h2>
                        <p>
                            For chamomile there is no standard dose, however, some studies have
                            used between 900 miligrams to 1200 miligrams faily in capsule form.
                            The most common form is a tea and some people drink one to four cups
                            of it daily.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chamomile_Dosage;