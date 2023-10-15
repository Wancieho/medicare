import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Turmeric_HowToUse() {
    return (
        <>
            <IngredientNameHeading ingredientName="Turmeric" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Turmeric_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Turmeric_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Turmeric_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Turmeric_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Turmeric_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Turmeric">Grow Turmeric</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Turmeric"
                        familyName="Zingiberaceae" origin="Southeast Asia"
                        geoLocation="Indian subcontinent and southeast Asia" />
                    <div className="content-wrapper">
                        <h2>How is Turmeric used?</h2>
                        <p>
                            Turmeric is a spice used in cooking in many parts of the world.
                            In India, it is used in curries, in Japan it is served in tea,
                            and in the U.S. it is used as a supplement and a spice. The
                            curcumin in turmeric is also available in creams, energy drinks,
                            cosmetics, and soap.
                        </p>
                        <p>
                            The curcumin in turmeric is poorly absorbed by the human body unless
                            black pepper is added to it. If using turmeric in cooking, try
                            adding black pepper to get the most health benefits.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <p>
                        Turmeric is used in:
                    </p>
                    <div className="ingredient-benefits">
                        <ul>
                            <li>Cooking</li>
                            <li>Medicine</li>
                        </ul>
                    </div>
                    <h3>How it is used:</h3>
                    <p>
                        Fresh or dried, turmeric has an earthy, pleasantly bitter taste that
                        magnifies the flavors of other spices. Its peppery, citrusy notes
                        also make it a delicious spice for seasoning dishes all on its own,
                        though it's wise to always add a sprinkling of black pepper, which
                        provides a spicy kick that counterbalances turmeric's astringent side.
                    </p>
                    <div className="ingredient-benefits">
                        <ul>
                            <li>
                                <h3>Ground/Dried Turmeric:</h3>
                                <dt>
                                    Ground turmeric can also be used to add appetizing color to a breakfast
                                    scramble, a creamy batch of mac and cheese, and even cakes and desserts.

                                </dt>
                            </li>
                            <li>
                                <h3>Fresh Turmeric:</h3>
                                <dt>
                                    If you are lucky enough to come across fresh turmeric root, grab a few
                                    knobby pieces and keep them on hand. Then it's just a matter of grating
                                    the root (the way you woulld grate fresh ginger) and adding it to dishes
                                    where you want turmeric's unique flavors to shine. Fresh turmeric will
                                    stain your hands, so use kitchen gloves when peeling and grating it.
                                </dt>
                            </li>
                            <li>
                                <h3>Substituting fresh for dried:</h3>
                                <dt>
                                    To substitute grated fresh turmeric for dried/ground turmeric, count 1
                                    tablespoon grated fresh turmeric per 1 teaspoon dried/ground.
                                </dt>
                            </li>
                            <li>
                                <h3>How to make Turmeric Tea:</h3>
                                <dt>
                                    For a hot beverage that is a healthy indulgence, you cannot beat a
                                    steaming cup of turmeric tea. In a mug stir ½ teaspoon of ground
                                    turmeric into ½ to 1 teaspoon of pure maple syrup. Add 1 cup of
                                    boiling water. Add a few grinds of black pepper, and stir to
                                    combine. Doctor the drink up the way you would any cup of tea,
                                    with a squeeze of lemon or a splash of plant milk.
                                </dt>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Turmeric_HowToUse;