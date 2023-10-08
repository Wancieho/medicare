import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Kiwi_HowToUse() {
    return (
        <>
            <IngredientNameHeading ingredientName="Kiwifruit(Kiwi)" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Kiwi_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Kiwi_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Kiwi_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Kiwi_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Kiwi_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Kiwi">Grow Kiwi</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Kiwifruit(Kiwi)"
                        familyName="Actinidiaceae" origin="Native to central and eastern China"
                        geoLocation="New Zealand, Italy, California, France, Greece, and Chile" />
                    <div className="content-wrapper">
                        <h2>How is Kiwifruit(Kiwi) used?</h2>
                        <p>
                            Kiwi is used in:
                        </p>
                        <div className="ingerdient-benefits">
                            <ul>
                                <li>Food</li>
                                <li>Medicine</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="content-section2">
                    <h2>Kiwi in Food:</h2>
                    <p>
                        Many people enjoy eating kiwis raw. You can also incorporate them into a
                        number of recipes, both sweet and savory. Most species of kiwi should be
                        peeled before you eat them. However, some particular varieties, including
                        Zespri SunGold kiwis, can be eaten whole, including the outer peel.
                        You can enjoy kiwis on their own or add them to dishes like fruit salads.
                        Here are a few ways to use them:
                    </p>
                    <div className="ingredient-benefits">
                        <ul>
                            <li>
                                Mix sliced kiwi with berries and bananas to create a
                                nutrient-dense fruit salad.
                            </li>
                            <li>
                                Use diced kiwi in your favorite salsa recipe.</li>
                            <li>
                                Top smoothie bowls and Greek yogurt with sliced kiwi.</li>
                            <li>
                                Add fresh kiwi to smoothies and protein shakes.</li>
                            <li>
                                Top salads with diced kiwi for a sweet, tart twist.</li>
                            <li>
                                Blend kiwi into homemade salad dressings.</li>
                            <li>
                                Make marinades for meat and fish with blended kiwi,
                                Worcestershire sauce, soy sauce, garlic, and olive oil.
                            </li>
                        </ul>
                    </div>
                    <h2>What Goes Well With Kiwifruit?</h2>
                    <h3>Fruit and Vegetables:</h3>
                    <p>
                        Apple, avocado, banana, blackberry, blueberry, celeriac, celery, cherry,
                        coconut, ginger, grape, guava, honeydew, kale, lemon, lime, lychee, mango,
                        orange, peach, persimmon, pineapple, radish, rambutan, raspberry,
                        rockmelon, strawberry, watermelon, zucchini.
                    </p>
                    <h3>Herbs and Nuts:</h3>
                    <p>
                        Almond, basil, coriander, mint, pistachio, rosemary, walnut.
                    </p>
                    <h3>Protein and Other Ingredients:</h3>
                    <p>
                        Balsamic vinegar, beef, chicken, chocolate, fish, honey, maple syrup, pork.
                    </p>
                    <h2>Kiwi in Medicine:</h2>
                    <p>
                        Check out the Benefits tab for more information.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Kiwi_HowToUse;