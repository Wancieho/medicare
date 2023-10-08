import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Strawberry_SideEffects() {
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
                        <h2>What are the side effects of using Strawberries?</h2>
                        <p>
                            Strawberries are a common type of fruit that can be eaten
                            as a nutritious and refreshing treat on hot days or used
                            as a topping for desserts such as ice cream and cake.
                            Strawberries offer numerous nutritional benefits,
                            such as supplying essential vitamins and minerals,
                            but they aren't ideal for all diets. You may find some
                            nutritional aspects of strawberries to be drawbacks
                            considering your personal nutritional needs, so
                            focusing on a different fruit may be more appropriate.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <div className="ingredient-benefits-a">
                        <ul>
                            <li>
                                <h3>Low in Calories:</h3>
                                <p>
                                    If you're an athlete or have high calorie needs due to a demanding job or fast
                                    metabolism, eating strawberries may be an inefficient way to get the calories
                                    you need. A cup of whole strawberries contains just 49 calories, which is
                                    much less than other carbohydrate-based foods. A cup of cooked oatmeal
                                    provides 147 calories. Because strawberries are not high in calories,
                                    it would take very large portions to obtain significant amounts of calories.
                                </p>
                                <h3>Low in Protein:</h3>
                                <p>
                                    Strawberries are low in protein, with about 1 g in each cup. Protein is
                                    an essential nutrient that your body uses to build and maintain muscles
                                    and other tissues. In addition, research indicates that diets with a
                                    high ratio of carbohydrates to protein, which is similar to the nutritional
                                    profile of strawberries, can be detrimental for body composition. A study
                                    published in the March 2011 issue of "Nutrition & Metabolism" found that
                                    increasing the ratio of carbohydrates to protein in diets resulted in more
                                    energy storage in fat cells and less storage in muscle, in other words,
                                    more fat gain and less muscle gain.
                                </p>
                                <h3>Low in Fat:</h3>
                                <p>
                                    Strawberries, as with many other fruits, are very low in fat.
                                    A cup of strawberries provides less than .5 g of fat. While this keeps
                                    the calorie content low, it means that eating strawberries won't
                                    be very filling, as fat encourages satiety. Additionally, dietary
                                    fat is required for the absorption of some vitamins, so taking a
                                    multivitamin with strawberries alone would be less than ideal.
                                </p>
                                <h3>High in Sugar:</h3>
                                <p>
                                    Strawberries are high in sugar, with 7 g in each cup, an amount
                                    comprising 63 percent of the total carbohydrates. While sugar does
                                    provide energy, it can also "reactive low blood sugar," or a sugar
                                    crash after the initial spike in energy, which can leave you feeling
                                    fatigued. Additionally, sugar can promote tooth decay, as this simple
                                    carbohydrate forms an acid that attacks your teeth when it comes into
                                    contact with the plaque that covers them.
                                </p>
                                <h3>Low in Vitamins:</h3>
                                <p>
                                    Although strawberries provide a number of essential minerals and high
                                    levels of vitamin C, the fruit provides very low amounts of other
                                    vitamins, such as vitamins A, E, D or K. They contain minimal levels
                                    of the B vitamins with the exception of folate. While vitamin C is
                                    beneficial, you do need other vitamins for optimal health.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Strawberry_SideEffects;