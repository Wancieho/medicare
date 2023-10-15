import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Lavender_Dosage() {
    return (
        <>
            <IngredientNameHeading ingredientName="Lavender" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Lavender_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Lavender_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Lavender_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Lavender_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Lavender_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Lavender">Grow Lavender</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Lavandula(Lavender)"
                        familyName="LamiaCeae" origin="Europe,northern to eastern Africa, 
                    Mediterranean, southwest Asia, and India"
                        geoLocation="Europe,northern to eastern Africa, 
                    Mediterranean, southwest Asia, and India." />
                    <div className="content-wrapper">
                        <h2>What is the recommended dosage for using Lavandula?</h2>
                        <p>
                            A single to several drops of lavender essential oil (20 mg to 120 mg)
                            diluted in a base or carrier oil, or added to hot water in a diffuser or
                            humidifier, infiltrated on a cotton pad, or dripped in a jar for inhalation
                            has been described for aromatherapy. For consumption as a tea, 1 to 2 tsp
                            (5 to 10 mL) of lavender herb can be steeped in 1 cup of boiling water. A
                            proprietary oral product, Silexan, is usually dosed at 80 or 160 mg/day for
                            use in anxiety.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <p>
                        Lavender is used in many different types of products. A specific lavender oil
                        product (Silexan) has most often been used by adults in doses of 80-160 mg by
                        mouth daily for up to 10 weeks. Lavender essential oil is commonly used in
                        aromatherapy and various topical products such as massage oils and lotions.
                        Speak with a healthcare provider to find out what type of product and dose
                        might be best for a specific condition.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Lavender_Dosage;