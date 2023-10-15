import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Kiwi_SideEffects() {
    return (
        <>
            <IngredientNameHeading ingredientName="Kiwifruit(Kiwi)" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Kiwi_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Kiwi_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Kiwi_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Kiwi_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Kiwi_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Kiwi">Grow Kiwi</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Kiwifruit(Kiwi)"
                        familyName="Actinidiaceae" origin="Native to central and eastern China"
                        geoLocation="New Zealand, Italy, California, France, Greece, and Chile" />
                    <div className="content-wrapper">
                        <h2>What are the side effects of using Kiwifruit(Kiwi)?</h2>
                        <p>
                            Eating kiwis regularly is beneficial for health and does not pose
                            any risks for most people. The main exception is for those who
                            have a kiwi allergy.
                        </p>
                        <p>
                            Kiwis contain many potential allergens, including actinidin,
                            which is kiwi's major allergen. Kiwis can cause minor to severe
                            allergic reactions in some people, particularly in children.
                            Signs of a kiwi allergy include:
                        </p>
                        <div className="ingredient-benefits">
                            <ul>
                                <li>Itchy throat</li>
                                <li>Swollen tongue</li>
                                <li>Trouble swallowing</li>
                                <li>Wheezing</li>
                            </ul>
                            <ul>
                                <li>Abdominal pain</li>
                                <li>Vomiting</li>
                                <li>Hives</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Kiwi_SideEffects;