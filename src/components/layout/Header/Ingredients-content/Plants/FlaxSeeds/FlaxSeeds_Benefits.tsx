import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function FlaxSeeds_Benefits() {
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
                        <h2>What are the benefits of using Flax Seeds?</h2>
                        <p>
                            Like other plant-based foods, flaxseed is rich in antioxidants. These
                            can help prevent disease by removing molecules called free radicals
                            from the body.
                        </p>
                        <p>
                            Free radicals occur as a result of natural processes and environmental
                            pressures. If there are too many free radicals in the body, oxidative
                            stress can develop, leading to cell damage and disease. Antioxidants
                            help remove free radicals from the body.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <h2>The health benefits of using Flax Seeds:</h2>
                    <h3>Reducing the risk of cancer:</h3>
                    <p>
                        Flaxseed contains omega-3 fatty acids. Research suggests that these
                        may help prevent different types of cancer cells from growing.
                        Flaxseed also contains lignans, which are antioxidants that may slow
                        tumor growth by preventing them from forming new blood vessels.
                    </p>
                    <p>
                        One <a href="https://link.springer.com/article/10.1007/s10552-013-0155-7">
                            2013</a> survey found a lower incidence of breast cancer among
                        females who consumed flaxseed regularly.
                    </p>
                    <p>
                        Also, in 2018, the
                        authors of a <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5808339/">
                            review</a> concluded that flaxseed may help
                        reduce the risk of breast cancer after menopause.
                    </p>
                    <p>
                        Lignans are a type of phytoestrogen, which is a plant-based nutrient that
                        acts in a similar way to estrogen. There has been some concern that
                        phytoestrogens may increase the risk of breast cancer, but recent research
                        suggests that they may play a protective role.
                    </p>
                    <h3>Improving cholesterol and heart health:</h3>
                    <p>
                        The American Heart Association (AHA) recommend eating more fiber and omega-3s
                        to boost heart health. Lignans, too, may help prevent cardiovascular disease.
                        Flaxseed contains all of these nutrients.
                    </p>
                    <p>
                        Flaxseed also contains phytosterols. Phytosterols have a similar structure
                        to cholesterol, but they help prevent the absorption of cholesterol in the
                        intestines.
                    </p>
                    <p>
                        Consuming phytosterols may therefore help reduce levels of low-density
                        lipoprotein (LDL), or “bad,” cholesterol in the body.
                        In 2010, researchers looked at the effect of flaxseed on the cholesterol
                        levels of males with moderately high cholesterol. Participants took either
                        a 20 milligram (mg) capsule containing lignans, a 100 mg capsule, or a
                        placebo for 12 weeks.
                    </p>
                    <p>
                        Cholesterol levels fell after taking lignans, especially in those who took
                        the 100 mg capsules.
                    </p>
                    <p>
                        The researchers behind a 2012 study involving 17 people found that consuming
                        flaxseed lowered LDL cholesterol levels and helped the body remove fat,
                        although they note that the overall diet may also play a role. The team
                        suggested that dietary flaxseed may be useful for lowering cholesterol
                        levels.
                    </p>
                    <p>
                        Some scientists have also linked omega-3 oils, which are usually present
                        in oily fish, to reductions in cardiovascular risk. Researchers have
                        suggested that flaxseed could offer an alternative to marine sources
                        of omega 3. This could make it a useful resource for people who follow
                        a plant-based diet.
                    </p>
                    <h3>Easing the symptoms of Arthiritis:</h3>
                    <p>
                        According to the Arthritis Foundation, flaxseed may help reduce joint
                        pain and stiffness. Some people take it for rheumatoid arthritis, lupus,
                        and Raynaud's phenomenon.

                        They add that there is a lack of evidence to support its use for this
                        purpose, but they say that the ALA in flaxseed may help reduce
                        inflammation. People can take it:
                    </p>
                    <div className="ingredient-benefits">
                        <ul>
                            <li>Ground (one tablespoon per day)</li>
                            <li>As an oil (one to three tablespoons per day)</li>
                            <li>In capsules (1300-3000 mg per day)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}


export default FlaxSeeds_Benefits;