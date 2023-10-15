import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Licorice_Dosage() {
    return (
        <>
            <IngredientNameHeading ingredientName="Licorice" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Licorice_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Licorice_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Licorice_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Licorice_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Licorice_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Licorice">Grow Licorice</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Liquorice(Licorice)"
                        familyName="Fabaceae" origin="Native to Western Asia, North Africa, 
                    and Southern Europe"
                        geoLocation="Western Asia, North Africa, 
                    and Southern Europe" />
                    <div className="content-wrapper">
                        <h2>What is the recommended dosage for using Licorice?</h2>
                        <p>
                            If you are pregnant, having a lot of licorice is linked to a greater
                            chance of premature birth and health problems in the baby.
                        </p>
                        <p>
                            The risk may stem from the glycyrrhizin in licorice. Too much of it
                            can cause serious health problems. Exactly how much is too much isn
                            not clear because the amount of licorice in a product can vary.
                            The risks with potassium and blood pressure are greatest for people
                            who already have high blood pressure, heart disease, or kidney disease.
                        </p>
                    </div>
                </div>
                <div className="content-section2">

                    <p>
                        For people who are 40 or older, eating at least 2 ounces of genuine
                        black licorice daily for 2 weeks might lead to hospitalization for
                        heart palpitations. Genuine licorice can also interfere with some
                        medicines and supplements, so be sure to talk with your doctor if
                        you notice any changes in how your medicines or supplements work.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Licorice_Dosage