import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Ginseng_Dosage() {
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
                        <h2>What is the recommended dosage of using Ginseng?</h2>
                        <p>
                            There is no standard ginseng dosage recommendation. The dosage depends
                            on the type of ginseng and the amount of ginsenosides. Research suggests
                            adults may safely take 100-3000 mg of American ginseng. Safe Asian ginseng
                            dosages range from 200mg to 3g per day.
                        </p>
                        <h3>Can you consume too much Ginseng?</h3>
                        <p>
                            Yes, you can take too much ginseng and experience uncomfortable side
                            effects. However, there has not been enough testing to prove a toxic
                            amount of ginseng for adults.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ginseng_Dosage;