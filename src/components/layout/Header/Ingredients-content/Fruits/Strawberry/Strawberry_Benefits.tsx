import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Strawberry_Benefits() {
    return (
        <>
            <IngredientNameHeading ingredientName="Strawberries" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Strawberry_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Strawberry_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Strawberry_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Strawberry_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Strawberry_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Strawberry">Grow Strawberry</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Strawberries"
                        familyName="Rosaceae" origin="Brittany, France"
                        geoLocation="China, US, Turkey, Mexico, Egypt, Spain" />
                    <div className="content-wrapper">
                        <h2>What are the benefits of using Strawberries?</h2>
                        <p>
                            Eating strawberries is associated with a reduced risk of many
                            chronic diseases. Strawberries may improve heart health, lower
                            blood sugar levels, and help prevent cancer.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <h2>Health benefits of strawberries</h2>
                    <div className="ingredient-benefits-a">
                        <ul>
                            <li>
                                <h3>Heart health:</h3>
                                <dt>
                                    Heart disease is the most common cause of death worldwide.
                                    Studies have found a relationship between berries or berry
                                    anthocyanins and improved heart health. Large observational
                                    studies in thousands of people link berry consumption
                                    to a lower risk of heart-related deaths.
                                </dt>
                                <dt>
                                    According to a study in middle-aged people with well-established
                                    risk factors for heart disease, berries may improve HDL(good)
                                    cholesterol, blood pressure, and blood platelets function.
                                </dt>
                                <h4>Strawberries may also:</h4>
                                <div className="ingredient-benefits">
                                    <ol>
                                        <li>Improve blood antioxidant status</li>
                                        <li>Decrease oxidative stress</li>
                                        <li>Reduce inflammation</li>
                                        <li>Improve vascular function</li>
                                        <li>Improve your blood lipid profile</li>
                                        <li>Reduce the harmful oxidation of LDL (bad) cholesterol</li>
                                        <li>The effects of freeze-dried strawberry supplements on type 2
                                            diabetes or metabolic syndrome have been studied intensely
                                            — mainly in overweight or obese individuals.
                                        </li>
                                    </ol>
                                </div>
                                <dt>
                                    After 4-12 weeks of supplementing, participants experienced a significant
                                    decrease in several major risk factors, including LDL(bad) cholesterol,
                                    inflammatory markers, and oxidized LDL particles.
                                </dt>
                            </li>
                            <li>
                                <h3>Blood sugar regulation:</h3>
                                <p>
                                    When carbs are digested, your body breaks them down into simple sugars
                                    and releases them into your bloodstream. Your body then starts s
                                    ecreting insulin, which tells your cells to pick up the sugar
                                    from your bloodstream and use it for fuel or storage. Imbalances
                                    in blood sugar regulation and high-sugar diets are associated with an
                                    increased risk of obesity, type 2 diabetes, and heart disease.
                                </p>
                                <p>
                                    Strawberries seem to slow down glucose digestion and reduce spikes in both
                                    glucose and insulin following a carb-rich meal, compared to a carb-rich
                                    meal without strawberries.
                                    Thus, strawberries may be particularly useful for preventing metabolic
                                    syndrome and type 2 diabetes.
                                </p>
                                <h3>Cancer prevention:</h3>
                                <p>
                                    Cancer is a disease characterized by uncontrolled growth of abnormal
                                    cells. Cancer formation and progression is often linked to oxidative
                                    stress and chronic inflammation.
                                </p>
                                <p>
                                    A number of studies suggest that berries may help prevent several types
                                    of cancer through their ability to fight oxidative stress and inflammation .
                                    Strawberries have been shown to inhibit tumor formation in animals with
                                    mouth cancer and in human liver cancer cells.
                                </p>
                                <dt>
                                    The protective effects of strawberries may be driven by ellagic acid
                                    and ellagitannins, which have been shown to stop the growth of cancer
                                    cells. More human research is needed to improve the understanding of the effects
                                    of strawberries on cancer before any solid conclusions can be reached.
                                </dt>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Strawberry_Benefits;