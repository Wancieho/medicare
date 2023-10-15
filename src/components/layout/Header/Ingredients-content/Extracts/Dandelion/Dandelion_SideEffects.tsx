import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Dandelion_SideEffects() {
    return (
        <>
            <IngredientNameHeading ingredientName="Dandelion" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to={"/Dandelion_Overview"}>Overview</Link>
                    </li>
                    <li>
                        <Link to={"/Dandelion_HowToUse"}>How to use</Link>
                    </li>
                    <li>
                        <Link to={"/Dandelion_Benefits"}>Benefits</Link>
                    </li>
                    <li>
                        <Link to={"/Dandelion_SideEffects"}>Side Effects</Link>
                    </li>
                    <li>
                        <Link to={"/Dandelion_Dosage"}>Dosage</Link>
                    </li>
                    <li>
                        <Link to={"/Grow_Dandelion"}>Grow Dandelion</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Taraxacum(Dandelion)"
                        familyName="Asteraceae" origin="Eurasia"
                        geoLocation="Eurasia and North America" />
                    <div className="content-wrapper">
                        <h2>What are the side effects of using Dandelion:</h2>
                        <p>
                            When too much Dandelion is used, it can cause the following:
                        </p>
                        <div className="ingredient-benefits">
                            <ul>
                                <li>Abdominal discomfort</li>
                                <li>Diarrhea</li>
                                <li>Heartburn</li>
                                <li>Increased heart rate</li>
                            </ul>
                            <ul>
                                <li>Bruising and bleeding</li>
                                <li>Excessive urination</li>
                                <li>Increased potassium levels (hyperkalemia)</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="content-section2">
                    <h2>More:</h2>
                    <p>
                        This is not a complete list of side effects and others may
                        occur such as: If you have any signs of allergic reaction:
                    </p>
                    <div className="ingredient-benefits">
                        <ul>
                            <li>Hives</li>
                            <li>Difficulty breathing</li>
                            <li>
                                Swelling of your face, lips, tongue, or
                                throat
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dandelion_SideEffects;