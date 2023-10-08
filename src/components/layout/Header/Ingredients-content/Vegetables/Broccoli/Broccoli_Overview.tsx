import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Broccoli_Overview() {
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
                        <h2>What is Broccoli?</h2>
                        <p>
                            Broccoli is a cruciferous vegetable rich in antioxidants and
                            other beneficial plant compounds. Broccoli contains many vitamins,
                            minerals, fiber, and antioxidants. Broccoli's benefits include
                            helping reduce inflammation, keeping blood sugar stable, and
                            strengthening the immune system.
                        </p>
                        <p>
                            Broccoli (Brassica oleracea) is a cruciferous vegetable related
                            to cabbage, kale, cauliflower, and Brussels sprouts
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <h2>Nutrition facts</h2>
                    <p>
                        Raw broccoli contains almost 90% water, 7% carbs, 3% protein, and almost no fat.
                        Broccoli is very low in calories, providing only 35 calories per cup, or 90 grams (g).
                        The nutrition facts for 1 cup (90 g) of raw broccoli are:
                    </p>
                    <div className="ingredient-benefits">
                        <ul>
                            <li>Calories: 35</li>
                            <li>Protein: 2.3 g</li>
                            <li>Carbs: 5.6 g</li>
                            <li>Fiber: 2.2 g</li>
                            <li>Fat: 0.3 g</li>
                            <li>Vitamin C: 91% of the Daily Value (DV)</li>
                            <li>Vitamin K: 77% of the DV</li>
                            <li>Folate: 15% of the DV</li>
                            <li>Each serving also contains a small amount of potassium, magnesium, iron, and calcium.</li>
                        </ul>
                    </div>
                    <h3>Carbs:</h3>
                    <p>
                        Broccoli's carbs mainly consist of fiber and sugars. The sugars are fructose, glucose, and sucrose,
                        with small amounts of lactose and maltose. However, the total carb content is very low, with only
                        3.4 grams of digestible carbs or total carbs minus fiber per cup (90 g).
                    </p>

                    <h3>Fiber:</h3>
                    <p>
                        Fiber is an important part of a healthy diet. It can promote gut health, help reduce the risk of
                        various diseases, and aid weight loss. Each cup (90 g) of raw broccoli provides 2.2 g of fiber,
                        which is about 8% of the DV.
                    </p>
                    <h3>Vitamins and minerals:</h3>
                    <p>
                        Broccoli contains a variety of vitamins and minerals, including:
                    </p>
                    <div className="ingredient-benefits">
                        <ul>
                            <li>
                                Vitamin C: This micronutrient doubles as an antioxidant and is important for immune function
                                and skin health.
                            </li>
                            <li>
                                Vitamin K1: Broccoli contains high amounts of vitamin K1, which is important for blood
                                clotting and may promote bone health.
                            </li>
                            <li>
                                Folate (vitamin B9): Particularly important for pregnant people, folate is needed for normal
                                tissue growth and cell function.
                            </li>
                            <li>
                                Potassium: In addition to being an essential mineral, potassium is beneficial for blood
                                pressure control and heart disease prevention.
                            </li>
                            <li>
                                Manganese: This trace element is found in high amounts in whole grains, legumes, fruits, and
                                vegetables.
                            </li>
                            <li>
                                Iron: This mineral has many important functions in your body, such as the transport of oxygen
                                in red blood cells.
                            </li>
                            <li>
                                Broccoli also contains numerous other vitamins and minerals in smaller amounts.
                            </li>
                        </ul>
                    </div>
                    <h3>Other plant compounds:</h3>
                    <p>
                        Broccoli is rich in various antioxidants and plant compounds, which contribute to its health benefits.
                        These include:
                    </p>
                    <div className="ingredient-benefits">
                        <ul>
                            <li>
                                Sulforaphane: One of the most abundant and extensively studied plant compounds in broccoli, sulforaphane
                                may protect against various types of cancer.
                            </li>
                            <li>
                                Indole-3-carbinol: A unique nutrient found in cruciferous vegetables, this compound may be beneficial
                                against cancer.
                            </li>
                            <li>
                                Carotenoids: Broccoli contains lutein, zeaxanthin, and beta carotene, which may all contribute to better
                                eye health.
                            </li>
                            <li>
                                Kaempferol: An antioxidant with many benefits for health, this compound may protect against heart disease,
                                cancer, inflammation, and allergies.
                            </li>
                            <li>
                                Quercetin: This antioxidant has numerous benefits, including lowering blood pressure in people with high
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Broccoli_Overview;