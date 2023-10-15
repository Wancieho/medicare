import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Grape_Seeds_Dosage() {
    return (
        <>
            <IngredientNameHeading ingredientName="Grape Seeds" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Grape-Seeds_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Grape-Seeds_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Grape-Seeds_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Grape-Seeds_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Grape-Seeds_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Grape-Seeds">Grow Grape Seeds</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Grape Seeds"
                        familyName="Vitaceae" origin="Native to the Mediterranean 
                    region, central Europe and southwest Asia"
                        geoLocation="Mediterranean 
                    region, central Europe and southwest Asia" />
                    <div className="content-wrapper">
                        <h2>What is the recommended dosage for using Grape Seeds?</h2>
                        <p>
                            Drinking alcohol to protect against heart disease is not advocated by the American Heart Association
                            and other organizations because of the potential for addiction and other serious problems, such as
                            car accidents and the increased risk of hypertension, liver disease, breast cancer, and weight gain.
                            If you do drink red wine, you should have no more than 2 glasses (20 g ethanol) per day if you are a
                            man, and no more than 1 glass per day if you are a woman.
                        </p>
                        <p>
                            Given the lack of evidence about its safety, grape seed extract is not recommended
                            for children or for women who are pregnant or breastfeeding.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Grape_Seeds_Dosage;