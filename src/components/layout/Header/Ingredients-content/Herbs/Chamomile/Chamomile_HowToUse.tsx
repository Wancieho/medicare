import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Chamomile_HowToUse() {
    return (
        <>
            <IngredientNameHeading ingredientName="Chamomile" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Chamomile_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Chamomile_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Chamomile_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Chamomile_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Chamomile_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Chamomile">Grow Chamomile</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Chamomile"
                        familyName="Asteraceae" origin="Europe and western Asia"
                        geoLocation="Europe and western Asia" />
                    <div className="content-wrapper">
                        <h2>How Is Chamomile Cooked or Prepared?</h2>
                        <p>
                            To prepare chamomile tea:
                        </p>
                        <ol>
                            <li>Infuse 1 teaspoon of chamomile in 8 ounces of water.</li>
                            <li>Boil or slightly  heat under a boil at 200 degrees Fahrenheit.</li>
                            <li>Steep for two to five minutes.</li>
                            <li>Depending on how intense of flavor and strength you want, and then enjoy.</li>
                        </ol>
                    </div>
                </div>
                <div className="content-section2">
                    <h2>What are some other uses of Chamomile?</h2>
                    <p>
                        Although chamomile is most commonly used in tea form, there are supplements
                        the majority of which are marketed as sleep aids too.
                    </p>
                    <p>
                        Chamomile tea has been used in natural medicine for thousands of years, often with
                        encouraging results. For now, however, it remains a supplement and not a medication.
                        People interested in trying chamomile tea should use it as a supplement and not a
                        replacement for their usual medication regimen. In regular doses, such as 1-2 cups a
                        day, it is possible to see incremental health improvements.
                    </p>
                    <p>
                        It's important to remember that
                        supplements in general are not regulated by the U.S. Food and Drug Administration
                        (FDA), so if you're interested in trying one, look for labels that reference third
                        party testing and clinical studies. Bonus if they have a USP-verified seal of
                        approval.
                    </p>
                    <p>
                        In addition to supplements, chamomile essential oils are used in aromatherapy
                        (via inhaled steam or vapor) to improve mood and relieve stress, per the National
                        Cancer Institute. Research has found that chamomile can relax spasming muscles,
                        possibly because of the herb's abundance of anti-inflammatory flavonoids.

                    </p>
                    <p>
                        Chamomile is becoming increasingly common in cosmetics and skincare products as a
                        soothing agent, especially in sunburn relief sprays and acne scar treatments.
                        As long as you aren't allergic to chamomile and aren't taking other medication,
                        you should be safe to indulge with your doctor's okay.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Chamomile_HowToUse;