import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Peppermint_Dosage() {
    return (
        <>
            <IngredientNameHeading ingredientName="Peppermint" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Peppermint_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Peppermint_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Peppermint_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Peppermint_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Peppermint_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Peppermint">Grow Peppermint</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Peppermint"
                        familyName="Lamiaceae" origin="Europe and Middle East"
                        geoLocation="North America, Europe and Middle East" />
                    <div className="content-wrapper">
                        <h2>What is the recommended dosage for using Peppermint?</h2>
                        <ul>
                            <li>Peppermint Tea</li>
                            <li>Peppermint Essential Oil</li>
                            <li>Peppermint Oil Capsules (Enteric-Coated):</li>
                            <li>Fresh or Dried Peppermint Leaves:</li>
                        </ul>
                    </div>
                </div>
                <div className="content-section2">
                    <div className="ingredient-benefits">
                        <ol>
                            <li>Peppermint Tea:
                                <ul>
                                    <li>You typically use 1 to 2 teaspoons of dried peppermint leaves per
                                        8 ounces (240 ml) of hot water. Steep the leaves for about 5-10
                                        minutes, then strain and drink. You can drink peppermint tea up
                                        to 3 times a day, especially for digestive issues or relaxation.
                                    </li>
                                </ul>
                            </li>
                            <li>Peppermint Essential Oil:
                                <ul>
                                    <li>When using peppermint essential oil topically, it's important to
                                        dilute it with a carrier oil (such as coconut oil or almond oil)
                                        to avoid skin irritation. A common dilution ratio is 1-2 drops of
                                        peppermint oil per tablespoon of carrier oil. For massage, use the
                                        diluted oil sparingly, as the menthol in peppermint oil can have a
                                        cooling and sometimes intense sensation on the skin.
                                    </li>
                                </ul>
                            </li>
                            <li>Peppermint Oil Capsules (Enteric-Coated):
                                <ul>
                                    <li>If you are using peppermint oil capsules for digestive issues like
                                        irritable bowel syndrome (IBS), it's essential to follow the
                                        manufacturer's recommended dosage, typically 0.2-0.4 ml (200-400 mg)
                                        per capsule. The usual recommendation is to take one capsule before
                                        meals, up to three times a day, as directed by your healthcare
                                        provider.
                                    </li>
                                </ul>
                            </li>
                            <li>Fresh or Dried Peppermint Leaves:
                                <ul>
                                    <li>When using fresh peppermint leaves in cooking or as a garnish,
                                        there's no strict dosage. Use the leaves to suit your taste and the
                                        recipe. For dried peppermint leaves in tea, as mentioned earlier, 1
                                        to 2 teaspoons per cup of hot water is a common guideline.
                                    </li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Peppermint_Dosage;