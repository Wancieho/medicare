import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Ginger_Dosage() {
    return (
        <>
            <IngredientNameHeading ingredientName="Ginger" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Ginger_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Ginger_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Ginger_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Ginger_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Ginger_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Ginger">Grow Ginger</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Ginger"
                        familyName="Zingiberaceae" origin="Southeast Asia"
                        geoLocation="All around the world" />
                    <div className="content-wrapper">
                        <h2>What is the recommended dosage of using Ginger?</h2>
                        <h3>Children:</h3>
                        <p>
                            Do <span className="em-span">Not</span> give ginger to children under two.
                            Children over 2 may take ginger to treat nausea, stomach cramping, and
                            headaches. Ask your doctor to find the right dose.
                        </p>
                        <h3>Adult:</h3>
                        <p>
                            Do <span className="em-span">Not</span> take more than 4 g of ginger
                            per day, including food sources. Pregnant women should not take more
                            than 1 g per day.
                        </p>
                        <p>
                            For nausea, gas, or indigestion: Some studies have used 1 g of ginger daily,
                            in divided doses. Ask your doctor to help you find the right dose for you.
                        </p>
                        <p>
                            For pregnancy-induced vomiting: Some studies have used 650 mg to 1 g per
                            day. Do <span className="em-span">Not</span> take ginger without talking
                            to your doctor first. For arthritis pain: One study used 250 mg, 4 times
                            daily.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ginger_Dosage;