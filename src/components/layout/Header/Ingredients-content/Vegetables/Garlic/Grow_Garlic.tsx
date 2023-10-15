import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Grow_Garlic() {
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
                        <h2>How do I grow Garlic?</h2>
                        <p>
                            There are three basic types of garlic: Hardneck, softneck, and elephant garlic.
                        </p>
                        <div className="ingredient-benefits">
                            <ul>
                                <li>
                                    Hardneck and softneck are different varieties of true garlic (Allium sativum).
                                </li>
                                <li>
                                    Elephant garlic, so-called, is technically a leek (Allium ampeloprasum).
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="content-section2">
                    <p>
                        There are many varieties within the three broad types.  One of the easiest ways
                        to find the best type of garlic to grow in your region is to get bulbs from a
                        local grower. If you do not know a grower in the area, the next best thing is
                        to consult your Cooperative Extension about varieties suited to your region.
                    </p>
                    <h3>Hardneck Garlic</h3>
                    <p>
                        Hardneck garlic is also called ophio garlic or bolting garlic. It produces a
                        hard seed stalk in the center of the plant before the bulb reaches maturity.
                        If you pinch these stalks off while they are still young and tender, you will
                        get garlic scapes to use in stir-fries, soups, and pesto. Allowed to mature,
                        the stalks will produce bulbils that resemble miniature garlic cloves. Hardneck
                        garlic generally produces a single ring of 6-10 cloves.
                    </p>
                    <h4>Where It Grow Best</h4>
                    <p>
                        Cooperative Extension writers from several Northern states recommend hardneck garlic
                        because it is better able to survive cold winters. The Georgia Cooperative Extension
                        advises growers in their warm climate to avoid hardneck garlic because it can bolt
                        early in erratic winters.
                    </p>
                    <p>
                        So if your climate has unpredictable weather patterns, it may be easier to stick to
                        growing softneck garlic. If you have a moderately warm climate, like in North
                        Carolina, you can try hardneck garlic varieties such as German extra hardy.
                    </p>
                    <p>
                        Subtypes of hardneck garlic include Rocambole, Music, Porcelain, and Purple Stripe.
                        There are different cultivars within each of these groups.
                    </p>
                    <h3>Softneck Garlic:</h3>
                    <p>
                        Softneck garlic is sometimes called Italian garlic. It does not form a hard seed
                        stalk unless it is stressed. Plants may produce a few bulbils low among their leaves,
                        or may not produce bulbils at all. Each head includes 12-20 cloves arranged in 3-6 layers.
                    </p>
                    <h4>Where It Grows Best:</h4>
                    <p>
                        Silverskin garlic has pale narrow upright leaves, thin pale bulb wrappers, and weak necks.
                        It is high-yielding and easy to grow in a range of soils and climates. Silverskins may form
                        a flower stalk if they are stressed by drought or cold. This type works well for braiding.
                        Ron Engeland says silverskins are the best for long storage, lasting six to twelve months.
                    </p>
                    <p>
                        Artichoke garlic has a mild flavor. Its tight-skinned cloves are hard to peel but have a
                        long storage life. Plants often produce large bulbils low on a soft stem. They may also
                        develop a hard stem if they are stressed.
                    </p>
                    <p>
                        It is broadly adapted to different soils and climates and will store for six to nine months.
                    </p>
                    <p>
                        The types of softneck garlic known as Creole, Early, Louisiana, or White Mexican are not
                        cold-hardy enough for the NC climate.
                    </p>
                    <h3>Elephant Garlic:</h3>
                    <p>
                        Elephant garlic is not a true garlic but a leek.  However, it produces cloves that look
                        like garlic cloves and have a mild garlic flavor.
                    </p>
                    <p>
                        Each head typically contains only 3 to 6 cloves whose large size gives this type its name.
                        The plant's naturally mild flavor may turn sharp in cold climates. In very cold regions
                        it may produce one undivided bulb like a pearl onion rather than dividing into cloves.
                    </p>
                    <p>
                        Elephant garlic may develop a bitter flavor. Like hardneck garlic, elephant forms flower
                        stalks. The lower parts of the seed stalk can be used in stir-fries and other dishes.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Grow_Garlic;