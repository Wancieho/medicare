import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Ingredient_HowToUse() {
    return (
        <>
            <IngredientNameHeading ingredientName="Tea-Tree-Oil" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Tea-Tree-Oil_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Tea-Tree-Oil_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Tea-Tree-Oil_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Tea-Tree-Oil_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Tea-Tree-Oil_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Tea-Tree-Oil">Grow Tea Tree Oil</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Tea tree oil(Melaleuca oil)"
                        familyName="Myrtaceae" origin="Native to Australia"
                        geoLocation="Southeast coast of Australia" />
                    <div className="content-wrapper">
                        <h2>How is Tea-Tree-Oil used?</h2>
                        <p>
                            According to the Committee on Herbal Medicinal Products (CHMP) of the European Medicines Agency,
                            traditional usage suggests that tea tree oil is a possible treatment for "small, superficial
                            wounds, insect bites, and small boils" and that it may reduce itching in minor cases of athlete's
                            foot. The CHMP states that tea tree oil products should not be used on people under 12 years of age.
                        </p>
                        <p>
                            <span className="em-span">
                                It should only be used externally!
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ingredient_HowToUse;