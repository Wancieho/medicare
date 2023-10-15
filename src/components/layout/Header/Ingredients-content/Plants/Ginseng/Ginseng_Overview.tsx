import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Ginseng_Overview() {
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
                        <h2>What is Ginseng?</h2>
                        <p>
                            Ginseng is a name you have probably heard being thrown around,
                            especially in relation to natural healthcare products and supplements.
                            But there are actually many different species of ginseng, found all
                            over the world. There is Panax ginseng(Korean
                            ginseng), which is present in Asia. Then Panax quinquefolius(American
                            ginseng) as it is found naturally in Canada and the  USA.
                            Another is Panax japonicus(Japanese ginseng).
                            Panax ginseng originated in Asia, and today it is grown in the cold
                            temperate regions in North East China and Korean peninsula. It was
                            first recorded in Chinese medicine over 2000 years ago, and is
                            now one of the most heavily cultivated herbs in the world.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <p>
                        Panax ginseng is a perennial shrub, about 50-80cm in height. It
                        bears inconspicuous flowers which develop into red berries, and has
                        a turnip-shaped root that quite often, due to the way it branches,
                        appears like a human figure. Panax Ginseng  is a species of plant
                        whose root is the original source of ginseng. It is a perennial
                        plant that grows in the mountains of East Asia.
                    </p>
                    <p>
                        It is the root that is of the most interest medicinally. That is
                        because most of the important components and active ingredients are
                        found here.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Ginseng_Overview;