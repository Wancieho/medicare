import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Echinacea_Overview() {
    return (
        <>
            <IngredientNameHeading ingredientName="Echinacea" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Echinacea_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Echinacea_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Echinacea_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Echinacea_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Echinacea_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Echinacea">Grow Echinacea</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Echinacea"
                        familyName="Asteraceae" origin="Native to Northern, Eastern and Central America"
                        geoLocation="Eastern and Central America only" />
                    <div className="content-wrapper">
                        <h2>What is Echinacea?</h2>
                        <p>
                            Echinacea are a genus of herbaceous flowering plants in the daisy
                            family which are an endangered species. It has ten species which are
                            commonly called coneflowers. They are found only in eastern and
                            central North regions of America, where they grow in moist to dry prairies
                            and open wooded areas. They also have large, showy heads of
                            composite flowers, blooming in summer. The generic name is
                            inherited from the Greek word (ekhinos), meaning
                            "hedgehog", due to the spiny central disk of the plant.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Echinacea_Overview;