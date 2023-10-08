import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Lemon_Balm_SideEffects() {
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
                        <h2>What are the side effects of using Lemon-Balm?</h2>
                        <p>
                            The Lemon balms' leaves are used as a herb in teas and a flavouring. The plant
                            is also used to attact bees for honey production. It is grown as an ornamental
                            plant and for its oil (to use in perfumery). Lemon balm has been cultivated at
                            least since the 16th century.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <p>Lemon balm has the potential to cause the following side effects:</p>
                    <div className="ingredient-benefits">
                        <ul>
                            <li>headache</li>
                            <li>painful urination</li>
                            <li>increased body temperature</li>
                            <li>nausea</li>
                            <li>vomiting</li>
                        </ul>
                        <ul>
                            <li>stomach pain</li>
                            <li>dizziness</li>
                            <li>wheezing</li>
                            <li>skin irritation</li>
                            <li>allergic reaction</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Lemon_Balm_SideEffects;