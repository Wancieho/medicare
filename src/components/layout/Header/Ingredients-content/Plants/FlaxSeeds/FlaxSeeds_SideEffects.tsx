import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function FlaxSeeds_SideEffects() {
    return (
        <>
            <IngredientNameHeading ingredientName="Flax Seeds" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/FlaxSeeds_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/FlaxSeeds_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/FlaxSeeds_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/FlaxSeeds_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/FlaxSeeds_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_FlaxSeeds">Grow Flax Seeds</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Flax Seeds"
                        familyName="Linaceae" origin="Syria, Turkey"
                        geoLocation="Syria, Switzerland, China, and India" />
                    <div className="content-wrapper">
                        <h2>What are the side effects of using Flax Seeds?</h2>
                        <p>
                            Because of the high fiber content, flaxseeds may result in increased
                            bowel movements. They may also cause digestive issues, such as:
                        </p>
                        <div className="ingredient-benefits">
                            <ul>
                                <li>Bloating</li>
                                <li>Cramps</li>
                                <li>Gas</li>
                                <li>Abdominal pain</li>
                            </ul>
                            <ul>
                                <li>Constipation</li>
                                <li>Diarrhea</li>
                                <li>Stomachache</li>
                                <li>Nausea</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="content-section2">
                    <p>
                        You can avoid these side effects by moderately consuming flaxseeds.
                        It is most often an excessive intake that causes these digestive
                        issues. Also, ensure that you drink plenty of water throughout the
                        day when you have eaten flaxseeds. This will keep problems, such as
                        constipation, away.
                    </p>
                    <p>
                        Raw and unripe flaxseeds may contain toxic compounds. Hence, avoid
                        using them. Pregnant women should avoid flaxseeds, even flaxseed
                        oil or their supplements, due to the mild estrogenic (hormonal) effects.
                        It is rare for someone to develop allergic reactions to flaxseeds.
                    </p>
                </div>
            </div>
        </>
    )
}

export default FlaxSeeds_SideEffects;