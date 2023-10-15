import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Peppermint_HowToUse() {
    return (
        <>
            <IngredientNameHeading ingredientName="Peppermint" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Peppermint_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Peppermint_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Peppermint_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Peppermint_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Peppermint_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Peppermint">Grow Peppermint</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Peppermint"
                        familyName="Lamiaceae" origin="Europe and Middle East"
                        geoLocation="North America, Europe and Middle East" />
                    <div className="content-wrapper">
                        <h2>How is Peppermint used?</h2>
                        <p>
                            Peppermint is used as:
                        </p>
                        <ol>
                            <li>Foods, Beverages and Desserts</li>
                            <li>Medicine</li>
                            <li>Aromatherapy</li>
                            <li>Personal care</li>
                            <li>Pest control</li>
                            <li>Home remedies</li>
                        </ol>
                    </div>
                </div>
                <div className="content-section2">
                    <h2>Detailed information for above list usage:</h2>
                    <h3>Foods, Benefits and Desserts:</h3>
                    <ul>
                        <li>Fresh Leaves:
                            <dt>Fresh peppermint leaves can be used in salads, as a
                                garnish for desserts, or infused in water to make a refreshing
                                beverage.
                            </dt>
                        </li>
                        <li>
                            Dried Leaves:
                            <dt>
                                Dried peppermint leaves are often used to make peppermint tea.
                                Simply steep a teaspoon of dried leaves in hot water for several
                                minutes, then strain and enjoy.
                            </dt>
                        </li>
                        <li>Peppermint Extract:
                            <dt>
                                Peppermint extract is a concentrated form of peppermint flavor
                                and is commonly used in baking. Add a few drops to your cookie,
                                cake, or icing recipes for a minty flavor.
                            </dt>
                        </li>
                        <li>
                            Candies and Desserts:
                            <dt>
                                Peppermint candies, such as peppermint sticks
                                or candy canes, are popular holiday treats. Crushed peppermint candies
                                are also used as toppings for desserts like ice cream or hot chocolate.
                            </dt>
                        </li>
                    </ul>
                    <h3>Medicine:</h3>
                    <ul>
                        <li>
                            Peppermint Oil:
                            <dt>
                                Peppermint oil is used for various medicinal purposes. It can be applied
                                topically when diluted with a carrier oil to soothe sore muscles or
                                relieve headaches. It can also be ingested in the form of enteric-coated
                                capsules for digestive issues like indigestion or IBS symptoms.
                            </dt>
                        </li>
                        <li>
                            Peppermint Tea:
                            <dt>
                                Peppermint tea is a common remedy for digestive problems. Steep peppermint
                                tea bags or dried leaves in hot water for about 5-10 minutes and drink it
                                to soothe an upset stomach or alleviate gas.
                            </dt>
                        </li>
                    </ul>
                    <h3>Aromatherapy:</h3>
                    <ul>
                        <li>
                            Essential Oil:
                            <dt>
                                Peppermint essential oil is used in aromatherapy. You can diffuse it in an
                                essential oil diffuser to create a refreshing and invigorating atmosphere.
                                Inhaling the aroma may help improve mental clarity and reduce fatigue.
                            </dt>
                        </li>
                    </ul>
                    <h3>Personal care:</h3>
                    <ul>
                        <li>
                            Toothpaste and Mouthwash:
                            <dt>
                                Many toothpaste and mouthwash products contain peppermint for its
                                freshening and breath-cleansing properties.
                            </dt>
                        </li>
                        <li>
                            Skincare:
                            <dt>
                                Some skincare products, such as creams and lotions, contain peppermint oil
                                for its cooling and soothing effects on the skin.
                            </dt>
                        </li>
                    </ul>
                    <h3>Pest control:</h3>
                    <ul>
                        <li>
                            Gardening:
                            <dt>
                                Planting peppermint in your garden can help deter pests like ants and aphids
                                due to its strong scent.
                            </dt>
                        </li>
                    </ul>
                    <h3>Home remedies:</h3>
                    <ul>
                        <li>
                            Steam Inhalation:
                            <dt>
                                Inhaling steam with a few drops of peppermint essential oil can help clear
                                nasal congestion and soothe respiratory discomfort.
                            </dt>
                        </li>
                        <li>
                            Compresses:
                            <dt>
                                You can make a peppermint-infused warm or cold compress to relieve muscle
                                aches or headaches. Soak a cloth in water mixed with a few drops of
                                peppermint oil, then apply it to the affected area.
                            </dt>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Peppermint_HowToUse;