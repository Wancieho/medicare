import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Astragalus_HowToUse() {
    return (
        <>
            <IngredientNameHeading ingredientName="Astragalus" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Astragalus_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Astragalus_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Astragalus_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Astragalus_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Astragalus_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Astragalus">Grow Grape Seeds</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Astragalus membranaceus"
                        familyName="Fabaceae" origin="Northern and Eastern China"
                        geoLocation="Northern and Eastern China" />
                    <div className="content-wrapper">
                        <h3>How is Astragalus used?</h3>
                        <p>
                            Specifically, the root of the plant is made into many different
                            forms of supplements, including liquid extracts, capsules,
                            powders and teas.
                        </p>
                        <p>
                            Astragalus is sometimes also given as an injection or by IV
                            in a hospital setting.
                        </p>
                        <p>
                            The root contains many active plant compounds, which are
                            believed to be responsible for its potential benefits
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Astragalus_HowToUse;