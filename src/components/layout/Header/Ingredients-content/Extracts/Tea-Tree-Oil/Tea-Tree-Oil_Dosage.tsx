import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Ingredient_Dosage() {
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
                        <h2>What is the recommeded dosage for using Tea-Tree-Oil?</h2>
                        <p>Dosages of Tea Tree Oil include:</p>
                        <h3>Acne</h3>
                        <div className="ingredient-benefits">
                            <ul>
                                <li>Apply 5% gel topically daily</li>
                            </ul>
                        </div>
                        <h3>Onychomycosis:</h3>
                        <div className="ingredient-benefits">
                            <ul>
                                <li>
                                    Apply 100% solution topically twice daily for 6
                                    months.
                                </li>
                            </ul>
                        </div>
                        <h3>Tinea pedis:</h3>
                        <div className="ingredient-benefits">
                            <ul>
                                <li>
                                    Apply 10% cream topically twice daily for 1 month OR
                                    25-50% solution applied twice daily for 1 month.
                                </li>
                            </ul>
                        </div>
                        <h3>Dosage Considerations:</h3>
                        <div className="ingredient-benefits">
                            <ul>
                                <li>
                                    There are no dosage considerations for the use of tea tree
                                    oil.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ingredient_Dosage;