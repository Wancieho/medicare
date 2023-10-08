import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";


function Dandelion_HowToUse() {
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
                        <h2>How is Dandelion used?</h2>
                        <p>
                            You can find dandelion herbs and roots fresh or dried in a variety
                            of forms, including tinctures, liquid extract, teas, tablets, and
                            capsules. Dandelion can be found alone or combined with other
                            dietary supplements.
                        </p>
                        <p>Dandelion parts used:</p>
                        <div className="ingredient-benefits">
                            <ul>
                                <li>
                                    Dandelion leaves act as a diuretic, increasing the amount of
                                    urine your body makes. The leaves are used to stimulate the
                                    appetite and help digestion.
                                </li>
                                <li>Dandelion flower has antioxidant properties.</li>
                                <li>
                                    Dandelion may also help improve the immune system.
                                </li>
                                <li>
                                    Herbalists use dandelion root to detoxify the liver and
                                    gallbladder, and dandelion leaves to help kidney function.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dandelion_HowToUse;