import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Astragalus_Dosage() {
    return (
        <>
            <IngredientNameHeading ingredientName="Astragalus" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Astragalus_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Astragalus_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Astragalus_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Astragalus_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Astragalus_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Astragalus">Grow Grape Seeds</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Astragalus membranaceus"
                        familyName="Fabaceae" origin="Northern and Eastern China"
                        geoLocation="Northern and Eastern China" />
                    <div className="content-wrapper">
                        <h2>What is the recomended Dosage for using Astragalus?</h2>
                        <p>
                            Astragalus is available as the dried root, as an extract, and as a
                            liquid decoction. It is also often used in combination with other
                            herbs. Speak with a healthcare provider to find out what type of
                            product and dose might be best for a specific condition.
                        </p>
                        <p className="paragraph-content">
                            These are the various oral doses that might be helpful in specific conditions:
                        </p>
                        <ul>
                            <li>
                                Congestive heart failure: taking 2-7.5 grams of powdered astragalus twice a
                                month can benefit.
                            </li>
                            <li>
                                Blood sugar control: taking 40-60 grams of astragalus for four months help
                                control blood sugar levels. Please take it in the form of decoction.
                            </li>
                            <li>
                                Kidney disease: including 7.5-15 grams of astragalus powder twice daily
                                provides some benefits. However, following this for six months is adequate.
                            </li>
                            <li>
                                Chronic fatigue syndrome: taking 30 grams of astragalus root help with
                                chronic fatigue syndrome. One can combine it with other herbs as a
                                decoction.
                            </li>
                            <li>
                                Seasonal allergies: take two 80mg capsules of astragalus extract daily.
                                One can expect positive results after continuing it for approximately
                                six weeks.
                            </li>
                            <li>
                                In general, 60 grams of oral doses per day for four months is the
                                safest option. It is said to work wonders in the long term.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="content-section2">
                    <h3>Wounds:</h3>
                    <p className="paragraph-content">
                        Serious wounds should always receive prompt medical attention.
                        However, if you would like to try astragalus on a small, superficial
                        cut or scrape, here's how to do in a professional manor:
                    </p>
                    <ul>
                        <li>Clean the cut thoroughly.</li>
                        <li>Mix pure astragalus powder with purified water to make a paste.</li>
                        <li>Apply the paste directly to the cut and cover it with a bandage.</li>
                        <li>Change the paste and bandage every few hours and observe the effects
                            yourself.
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Astragalus_Dosage;