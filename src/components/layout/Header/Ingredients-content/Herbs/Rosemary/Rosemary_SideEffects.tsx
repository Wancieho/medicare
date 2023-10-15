import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Rosemary_SideEffects() {
    return (
        <>
            <IngredientNameHeading ingredientName="Rosemary" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Rosemary_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Rosemary_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Rosemary_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Rosemary_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Rosemary_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Rosemary">Grow Rosemary</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Rosemary"
                        familyName="Lamiaceae" origin="Native to the Mediterranean region"
                        geoLocation="Mediterranean Region" />
                    <div className="content-wrapper">
                        <h2>What are the side effects of using Rosemary?</h2>
                        <p>
                            The use of herbs is a time-honored approach to strengthening the
                            body and treating disease. However, herbs can trigger side effects
                            and interact with other herbs, supplements, or medications. For these
                            reasons, you should take herbs with care, under the supervision of a
                            health care provider.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <div className="ingredient-benefits-a">
                        <ul>
                            <li>
                                <h2>Precautions:</h2>
                                <p>
                                    Rosemary is generally considered safe when taken in recommended doses.
                                    However, there have been occasional reports of allergic reactions.
                                    Because of their volatile oil content, large quantities of rosemary
                                    leaves can cause serious side effects, including: vomiting, spasms,
                                    coma and in some cases, pulmonary edema (fluid in the lungs)
                                </p>
                                <p>
                                    Because higher doses of rosemary may cause miscarriage, pregnant and
                                    nursing women should not take rosemary as a supplement. But it is safe
                                    to eat as a spice in food. People with high blood pressure, ulcers,
                                    Crohn's disease, or ulcerative colitis should not take rosemary.
                                    Rosemary oil can be toxic if ingested and should <span className="em-span">
                                        never</span>be taken orally.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rosemary_SideEffects;