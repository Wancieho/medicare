import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Lemon_Balm_Overview() {
    return (
        <>
            <IngredientNameHeading ingredientName="Lemon-Balm" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Lemon-Balm_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Lemon-Balm_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Lemon-Balm_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Lemon-Balm_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Lemon-Balm_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Lemon-Balm">Grow Lemon-Balm</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Lemon-Balm"
                        familyName="Lamiaceae" origin="South-central Europe, the Mediterranean
                    Basin, Iran, and Central Asia"
                        geoLocation="south-central Europe, the Mediterranean
                    Basin, Iran, and Central Asia" />
                    <div className="content-wrapper">
                        <h2>What is Lemon-Balm?</h2>
                        <p>
                            Lemon balm (Melissa officinalis) is a perennial herbaceous plant in the
                            mint family Lamiaceae, and native to south-central Europe, the Mediterranean
                            Basin, Iran, and Central Asia, but now also naturalized in the America
                            and elsewhere. Lemon balm plants grow bushy and upright to a maximum height
                            of 100 cm (39 in). The heart-shaped leaves are 2-8 centimetres (0.79-3.15 inch)
                            long, and have a rough, veined surface. They are soft and hairy with scalloped
                            edges, and have a mild lemon scent. During summer, small white or pale pink
                            flowers appear. The plants live for ten years; the crop plant is replaced
                            after five years to allow the ground to rejuvenate.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Lemon_Balm_Overview;