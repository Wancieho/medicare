import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Lemon_Balm_Dosage() {
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
                        <h2>What are the recommended dosages for using Lemon-Balm?</h2>
                        <p>
                            You may be able to minimize side effects, such as stomach upset, by ingesting
                            lemon balm alongside food. You can also reduce your risk for side effects
                            by consuming fewer than 2 grams of lemon balm per day.Lemon balm should only
                            be used for a short period of time. A general rule of thumb is to take one week
                            off after every three weeks of use. You should not take lemon balm for longer
                            than four months at a time without a break.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <h2>
                        You should talk to your doctor before use if you are taking:
                    </h2>
                    <div className="ingredient-benefits">
                        <ul>
                            <li>Glaucoma medications</li>
                            <li>Thyroid medications</li>
                            <li>Barbiturates</li>
                            <li>Sedatives</li>
                            <li>Drugs that affect serotonin</li>
                        </ul>
                    </div>
                    <h2>
                        You should also talk to your doctor before use if:
                    </h2>
                    <div className="ingredient-benefits">
                        <ul>
                            <li>you are pregnant</li>
                            <li>you are breastfeeding</li>
                            <li>you want to administer lemon balm to an infant or child under
                                the age of 12</li>
                            <li>you have a scheduled surgery</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Lemon_Balm_Dosage;