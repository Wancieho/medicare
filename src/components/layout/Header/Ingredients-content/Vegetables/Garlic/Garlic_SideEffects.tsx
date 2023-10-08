import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Garlic_SideEffects() {
    return (
        <>
            <IngredientNameHeading ingredientName="Garlic(Allium sativum)" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Garlic_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Garlic_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Garlic_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Garlic_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Garlic_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Garlic">Grow Garlic</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Garlic(Allium sativum)"
                        familyName="Amaryllidaceae" origin="Native to South Asia, 
                    Central Asia and northeastern Iran"
                        geoLocation="South Asia, 
                    Central Asia and northeastern Iran" />
                    <div className="content-wrapper">
                        <h2>What are the side effects of using Garlic?</h2>
                        <p>
                            Although garlic is a healthy addition to a balanced diet, eating too much may cause
                            several side effects.
                        </p>
                        <p>
                            In one case study, a person experienced excessive discoloration and bruising
                            after surgery. The possible cause was a dietary supplement the person had been taking,
                            which contained fish oil and 10 mg of garlic concentrate, both of which affect blood
                            clot formation.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <h2>Side effects of garlic:</h2>
                    <p>
                        Although garlic-induced bleeding is uncommon, one report detailed a case in which a
                        person experienced increased bleeding after they regularly ate 12 grams of garlic -
                        approximately 4 cloves - per day before surgery.
                    </p>
                    <h3>Increased risk of bleeding</h3>
                    <p>
                        One of the most serious side effects of eating too much garlic is an increased risk
                        of bleeding, especially if you are taking blood thinners or undergoing surgery.
                    </p>
                    <p>
                        This is because garlic has antithrombotic properties, meaning that it may prevent
                        blood clots from forming.
                    </p>
                    <p>
                        It is important to talk with your healthcare professional before using garlic supplements.
                        If you are taking any medications or set to have surgery, you should also consult a healthcare
                        professional before adding garlic to your diet.
                    </p>
                    <h3>Garlic breath:</h3>
                    <p>
                        Garlic contains a variety of sulfur compounds, which are often credited with its many health
                        benefits.
                    </p>
                    <p>
                        However, these compounds may cause bad breath, especially when eaten in large amounts.
                        This is especially true for raw garlic, as cooking decreases the content of these
                        beneficial sulfur compounds. Still, you can try several home remedies to get rid of
                        garlic breath.
                    </p>
                    <h3>Digestive issues</h3>
                    <p>
                        Like onions, leeks, and asparagus, garlic is high in fructans, a type of carb that may
                        cause bloating, gas, and stomach pain in some people.
                    </p>
                    <p>
                        In fact, when those with a fructan intolerance eat a high fructan food, it is not fully
                        absorbed in the small intestine. Instead, it travels to the colon intact and is fermented
                        in your gut, a process that may contribute to digestive issues.
                    </p>
                    <p>
                        As such, people following a low FODMAP diet — an elimination diet intended to identify
                        specific foods that trigger digestive issues — are often encouraged to limit their
                        garlic intake.
                    </p>
                    <h3>Heartburn</h3>
                    <p>
                        If you have gastroesophageal reflux disease (GERD), you may want to consider lowering your
                        garlic intake.
                    </p>
                    <p>
                        GERD is a common condition that occurs when stomach acid flows back up into your esophagus,
                        causing symptoms like heartburn and nausea.
                    </p>
                    <p>
                        Garlic may decrease lower esophageal sphincter (LES) tone, which is the ability of the muscles
                        at the bottom of your esophagus to close and prevent acid from entering. In turn, this may
                        trigger acid reflux.
                    </p>
                    <p>
                        However, certain foods affect people with GERD differently. If you find that eating a lot of
                        garlic does not cause symptoms, it is likely unnecessary to limit your intake.
                    </p>
                    <h4>Health Note:</h4>
                    <p>
                        Eating large amounts of garlic may cause garlic breath, digestive issues, and heartburn.
                        In rare instances, it may increase your risk of bleeding, particularly during surgery or if
                        you are taking blood thinners.
                    </p>
                    <h3>How much should you eat?</h3>
                    <p>
                        Although no official recommendations exist for how much garlic you should eat, studies show
                        that eating 12 cloves (3-6 grams) per day may have health benefits.
                    </p>
                    <p>
                        If you notice any side effects after eating more than this amount, consider reducing
                        your intake.
                    </p>
                    <p>
                        Cooking garlic before eating it may also help prevent side effects like garlic breath,
                        digestive issues, and acid reflux.
                    </p>
                    <p>
                        If you have any underlying health conditions or are taking medications, it is best
                        to talk with your doctor before making any changes to your diet or using any herbal
                        supplements.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Garlic_SideEffects;