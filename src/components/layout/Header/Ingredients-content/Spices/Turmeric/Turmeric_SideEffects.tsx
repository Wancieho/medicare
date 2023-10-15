import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Turmeric_SideEffects() {
    return (
        <>
            <IngredientNameHeading ingredientName="Turmeric" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Turmeric_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Turmeric_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Turmeric_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Turmeric_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Turmeric_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Turmeric">Grow Turmeric</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Turmeric"
                        familyName="Zingiberaceae" origin="Southeast Asia"
                        geoLocation="Indian subcontinent and southeast Asia" />
                    <div className="content-wrapper">
                        <h2>What are the side effects of using Turmeric?</h2>
                        <p>
                            It is possible to take too much turmeric, but it is not
                            likely. One study found that heavy doses may be toxic
                            to cells, but other research shows that supplements of
                            less than 8,000mg daily is safe. More research is
                            needed to find the best dose for turmeric.
                        </p>
                        <p>
                            Turmeric is complex and difficult to study because it
                            easily changes in your body and little reaches your
                            bloodstream. Because of that, some manufacturers have
                            produced turmeric or curcumin products that have better
                            absorption rates.
                        </p>
                        <p>
                            It is important to read the label clearly and speak with
                            your healthcare provider about the amount of turmeric
                            you take, if you choose to take it.
                        </p>
                        <p>The side effects may include:</p>
                        <div className="ingredient-benefits">
                            <ul>
                                <li>Skin rash</li>
                                <li>Diarrhea or other gastrointestinal discomfort</li>
                                <li>Nausea</li>
                                <li>Headache</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Turmeric_SideEffects;