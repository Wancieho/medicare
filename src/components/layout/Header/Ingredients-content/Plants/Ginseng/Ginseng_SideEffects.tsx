import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Ginseng_SideEffects() {
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
                <div className="flex-content">
                    <Ingredient ingredientName="Ginseng"
                        familyName="Araliaceae" origin="Shangdang China"
                        geoLocation="Asia, Japan and Canada" />
                    <div className="content-wrapper">
                        <h2>What are the side effects of using Ginseng?</h2>
                        <p>
                            People who take more than 3000 mg of
                            American ginseng and 3g of Asian ginseng per day are more likely to
                            encounter side effects. Taking ginseng for prolonged periods may also
                            increase your risk of side effects.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <p>
                        Sleep problems are the most common side effect of taking Asian and
                        American ginseng. Other side effects of ingesting ginseng include:
                    </p>
                    <div className="ingredient-benefits">
                        <ul>
                            <li>Headache</li>
                            <li>Nausea</li>
                            <li>Diarrhea</li>
                            <li>Changes in blood pressure</li>
                        </ul>
                        <ul>
                            <li>Increased heart rate</li>
                            <li>Loss of appetite</li>
                            <li>Breast pain</li>
                            <li>Menstrual problems</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ginseng_SideEffects;