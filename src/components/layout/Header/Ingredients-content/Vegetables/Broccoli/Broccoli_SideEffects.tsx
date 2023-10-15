import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Broccoli_SideEffects() {
    return (
        <>
            <IngredientNameHeading ingredientName="Broccoli" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Broccoli_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Broccoli_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Broccoli_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Broccoli_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Broccoli_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Broccoli">Grow Broccoli</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Broccoli"
                        familyName="Brassicaceae" origin="Italy"
                        geoLocation="China, India, US, Spain, Mexico" />
                    <div className="content-wrapper">
                        <h2>What are the side effects of using Broccoli?</h2>
                        <p>
                            Consuming too much have the following side effects:
                        </p>
                        <div className="ingredient-benefits">
                            <ul>
                                <li>
                                    An excess consumption of broccoli by smokers can increase the risk of
                                    developing lung cancer due to increase in antioxidants.
                                </li>
                                <li>
                                    As broccoli is rich in Potassium that causes lowering of blood pressure,
                                    an excess consumption can result in hypotension.
                                </li>
                                <li>
                                    An excess broccoli consumption can also increase the risk of
                                    hemorrhagic stroke.
                                </li>
                                <li>
                                    Patient on blood thinners can have increased risk of bleeding due to
                                    the presence of Vitamin K in broccoli.
                                </li>
                                <li>
                                    Broccoli contains isothiocyanates which are goitrogens and can alter
                                    iodine uptake, functioning of thyroid gland and can cause
                                    hypothyroidism.
                                </li>
                                <li>
                                    In some people it may cause headaches, nasal congestion, wheezing
                                    and skin rashes.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}

export default Broccoli_SideEffects;