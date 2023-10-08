import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Grow_Lemon_Balm() {
    return (
        <>
            <IngredientNameHeading ingredientName="Lemon-Balm" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Lemon-Balm_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Lemon-Balm_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Lemon-Balm_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Lemon-Balm_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Lemon-Balm_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Lemon-Balm">Grow Lemon-Balm</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Lemon-Balm"
                        familyName="Lamiaceae" origin="South-central Europe, the Mediterranean
                    Basin, Iran, and Central Asia"
                        geoLocation="south-central Europe, the Mediterranean
                    Basin, Iran, and Central Asia" />

                    <div className="content-wrapper">
                        <h2>How do I grow Lemon-Balm?</h2>
                        <p>
                            Lemon balm seeds require light and a minimum temperature of 20 °C (68 °F) to
                            germinate. The plant grows in clumps and spreads vegetatively (a new plant can
                            grow from a fragment of the parent plant), as well as by seed. In mild temperate
                            zones, the plant stems die off at the start of the winter, but shoot up again
                            in spring. Lemon balm grows vigorously.
                        </p>
                        <p>
                            From March to May every year the seeds are sowed and planted from April to June,
                            then harvested from July to September.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <ol>
                        <li>
                            <dt>
                                <h3>Sowing:</h3>
                                <p>
                                    Lemon balm (Melissa officinalis) is easy to grow from seed in spring,
                                    but named varieties are only available as ready-grown plants.
                                </p>
                                <p>
                                    Sow seeds indoors from March to May, scattering a few seeds into a small pot
                                    or tray of seed compost. Cover with a thin layer of perlite, vermiculite or
                                    finely sieved compost, then water gently. Place the pot in a heated
                                    propagator or cover with a clear plastic bag and place in a warm spot.
                                </p>
                                <p>
                                    As soon as seedlings appear, which can take up to three weeks, take the pot out of
                                    the propagator or remove the cover. Prick out the seedlings into individual pots
                                    when they are large enough to handle.
                                </p></dt>
                        </li>
                        <li>
                            <dt>
                                <h3>Planting:</h3>
                                <p>
                                    Traditional lemon balm is a vigorous plant that eventually makes a large leafy
                                    clump, and sends up flower stems that can reach 80cm (32in) tall. There are several
                                    cultivars too, with variegated leaves or a more compact form. The flowers are a
                                    magnet for bees.
                                </p>
                                <ol>
                                    <li>
                                        <dt>
                                            <h4>Watering</h4>
                                            <p>
                                                Keep plants well watered during dry spells in summer, and cut back after flowering
                                                to encourage a fresh flush of leaves.
                                            </p>
                                        </dt>
                                    </li>
                                    <li>
                                        <dt>
                                            <h4>Cutting back:</h4>
                                            <p>
                                                Lemon balm will self-seed readily, so if you do not want more plants, remember
                                                to remove the faded flowers before they set seed. With variegated cultivars, cut back in early summer to encourage fresh, strongly
                                                coloured shoots.
                                            </p>
                                        </dt>
                                    </li>
                                    <li>
                                        <dt>
                                            <h4>Dividing:</h4>
                                            <p>
                                                Lemon balm is a long-lived plant than can form a congested clump - so lift and divide
                                                every few years in autumn to rejuvenate plants.
                                            </p>
                                        </dt>
                                    </li>
                                    <li>
                                        <dt>
                                            <h4>Protecting:</h4>
                                            <p>
                                                Protect plants in pots from excessive winter wet by moving them into a sheltered
                                                position and raising up on pot feet to allow excess rainfall to drain away easily.
                                            </p>
                                        </dt>
                                    </li>
                                </ol>
                            </dt>
                        </li>
                        <li>
                            <dt>
                                <h3>Harvesting:</h3>
                                <p>
                                    Pick fresh leaves as required throughout summer. Leaves for drying are best harvested
                                    before plants start to flower.
                                </p>
                            </dt>
                        </li>
                    </ol>
                </div>
            </div>
        </>
    )
}

export default Grow_Lemon_Balm;