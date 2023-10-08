import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Grow_Echinacea() {
    return (
        <>
            <IngredientNameHeading ingredientName="Echinacea" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Echinacea_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Echinacea_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Echinacea_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Echinacea_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Echinacea_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Echinacea">Grow Echinacea</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Echinacea"
                        familyName="Asteraceae" origin="Native to Northern, Eastern and Central America"
                        geoLocation="Eastern and Central America only" />
                    <div className="content-wrapper">
                        <h2>How do I grow Echinacea?</h2>
                        <p>
                            Echinacea plants grow well in the home garden, when provided with the right
                            conditions. Echinacea are important sources of nectar for butterflies and
                            many birds (particularly goldfinches), who flock to the plants to devour
                            the seed. Echinacea are, in this way, two for one plants. You get to enjoy
                            the gorgeous flowers, as well as the colorful wildlife they attract.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <h2>When and Where to plant Echinacea:</h2>
                    <div className="ingredient-benefits">
                        <ol>
                            <li>
                                <h3>Light:</h3>
                                <dt>
                                    Echinacea thrives in full to partial sun.
                                    Plants need <span className="em-span">at least</span> four hours of sunlight
                                    per day. The plants grow natively along the edges of woodlands, so they will
                                    thrive in spots with morning shade and afternoon sun or vice versa.
                                </dt>
                            </li>
                            <li>
                                <h3>Soil:</h3>
                                <dt>
                                    Echinacea will tolerate poor rocky soil, but will not grow in wet,
                                    mucky soil. Mulch plants with compost at the time of planting.
                                </dt>
                            </li>
                            <li>
                                <h3>Spacing:</h3>
                                <dt>
                                    Coneflowers are clumping plants. One plant will tend to get larger,
                                    but it will not spread and overtake the garden via roots or rhizomes.
                                    The eventual size of the plant clump depends on the cultivar, so check
                                    the mature size listed in the plant description to help you decide on
                                    spacing.
                                </dt>
                                <dt>
                                    If a plant is estimated to grow to eighteen inches wide, leave eighteen
                                    inches between plants. Because Echinacea establish deep taproots,
                                    you need to plant them where you want them. They do not like to be
                                    moved once established.
                                </dt>
                            </li>
                            <li>
                                <h3>Planting:</h3>
                                <dt>
                                    Plant Echinacea plants in the spring or the fall, in well-drained soil
                                    in full to part sun. Echinacea is easy to grow from seed, as well, but
                                    requires a cold, moist period—called stratification—in order to germinate.
                                </dt>
                                <dt>
                                    Sow seeds thickly in the fall (after hard-frost in the north and before
                                    winter rains elsewhere), covering lightly to discourage birds from eating
                                    them. Seeds will germinate in the spring. Most plants will bloom during
                                    the second year—one reason it is advantageous to start with transplants.
                                </dt>
                            </li>
                        </ol>
                    </div>
                    <h2>How to Grow Echinacea Throughout the Season:</h2>
                    <div>
                        <div className="ingredient-benefits">
                            <ol>
                                <li>
                                    <h3>Growth Habit:</h3>
                                    <dt>
                                        Echinacea are clump-forming perennials that grow to a mature
                                        size of between 12-36 inches wide and up to four feet tall.
                                        The size depends on the variety. Plants have an upright habit
                                        with large flowers with cone-shaped centers borne on tall,
                                        straight stalks.
                                    </dt>
                                </li>
                                <li>
                                    <h3>Staking:</h3>
                                    <dt>
                                        These plants are sturdy and rarely require staking. Occasionally, plants growing in partial shade will become tall and floppy. You can stake plants using a single stake and connecting individual stalks to the stake with soft twine.

                                    </dt>
                                </li>
                                <li>
                                    <h3>Watering:</h3>
                                    <dt>
                                        Echinacea is a low-water plant; however, you will need to water young
                                        plants to help them establish new roots. That is usually a sequence
                                        of every day or every other day right after planting, moving to a
                                        couple of times per week, to once per week, to every other week,
                                        to watering only when your area is experiencing extreme drought.
                                    </dt>
                                    <dt>
                                        The second year after planting and beyond you should not have to
                                        water Echinacea at all unless you have gone eight weeks or more
                                        without rain. They are that drought-tolerant.
                                    </dt>
                                </li>
                                <li>
                                    <h3>Fertilizing:</h3>
                                    <dt>
                                        Most perennials like to live lean, and do not need seasonal
                                        fertilizer applications. Mulching Echinacea plants in the spring with
                                        compost should be enough unless your garden has specific nutrient
                                        deficiencies. If your plants are growing lots of leaves but no flowers, or
                                        the leaves are strangely colored (purple or yellow) get a soil test to
                                        determine which nutrients plants are missing and fertilize accordingly.
                                    </dt>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Grow_Echinacea;