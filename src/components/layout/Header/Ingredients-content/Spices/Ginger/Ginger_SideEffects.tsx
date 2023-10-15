import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Ginger_SideEffects() {
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
                        <h2>What are the side effects of using Ginger?</h2>
                        <p>
                            Ginger is safe for most people to consume in moderation, but ut is rare
                            to have side effects from ginger. In high doses it may cause
                            mild heartburn, abdominal discomfort, diarrhea, and irritation of the mouth.
                            You may be able to avoid some of the mild stomach side effects, such as
                            belching, heartburn, or stomach upset, by taking ginger supplements in
                            capsules or taking ginger with meals.
                        </p>
                        <p>
                            People with gallstones should talk to their doctors before taking ginger.
                            Be sure to tell your doctor if you are taking ginger before having surgery
                            or being placed under anesthesia.
                        </p>
                        <p>
                            Pregnant or breastfeeding women, people with heart conditions, and people
                            with diabetes should not take ginger without talking to their doctors.
                            Do <span className="em-span">Not</span> take ginger if you have a bleeding
                            disorder or if you are taking blood-thinning medications, including aspirin.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ginger_SideEffects;