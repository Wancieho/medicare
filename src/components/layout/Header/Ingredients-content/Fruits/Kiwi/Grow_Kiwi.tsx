import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Grow_Kiwi() {
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
                        <h2>How do I grow Kiwifruit(Kiwi)?</h2>
                        <h3>When to Plant Kiwi Vines:</h3>
                        <p>
                            Plant kiwi plants in the spring after the threat of frost has passed.
                            Kiwis typically begin bearing fruit 3 to 5 years after planting.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <h2>Planting:</h2>
                    <h3>Choosing and Preparing a Planting Site:</h3>
                    <p>
                        Kiwi vines need a sunny spot to produce the best growth and fruit. Plant in a protected
                        area of the garden to avoid wind damage. Plant the vines on the north side of the yard
                        in colder regions to minimize the risk of freeze-thaw damage in early spring, when
                        plants are especially susceptible.
                    </p>
                    <p>
                        Kiwi plants require well-drained soil, as they are prone to root rot if kept too wet.
                        Kiwi vines are slow growers and need sturdy supports. Erect a tall, heavy-duty trellis
                        system that can support the vines that can grow 15 feet wide and 20 feet long, and
                        produce up to 100 pounds of fruit.
                    </p>
                    <h2>Growing:</h2>
                    <h3>How to Plant Kiwi Vines:</h3>
                    <div className="ingredient-benefits">
                        <ul>
                            <li>
                                To get a good crop from kiwi, you will need to plant male and female plants.
                                The females produce the fruit.
                                <ul>
                                    <li>
                                        Tip: The best ratio is said to be at least one male plant for every
                                        six female plants.
                                    </li>
                                </ul>
                            </li>
                            <li>Plant the vines 10 to 15 feet apart.</li>
                            <li>When planting, you may need to trim the roots if too long.</li>
                            <li>Plant vines just deep enough to cover the roots well with soil.</li>
                            <li>Water well at the time of planting.</li>
                        </ul>
                    </div>
                    <h2>How to Grow Kiwi Vines</h2>
                    <div className="ingredient-benefits">
                        <ul>
                            <li>Unless it has been rainy, give the plants supplemental watering
                                during the height of summer or during other dry periods.
                            </li>
                            <li>
                                Do not fertilize in the first year. After that, fertilize with a
                                well-balanced fertilizer or soybean meal in the spring.
                            </li>
                            <li>
                                Start training the flexible vines up a support during the first
                                year of planting.
                            </li>
                            <li>
                                Prune the lateral growth (if not flowering) 2 to 3 times during
                                the growing season.
                            </li>
                            <li>Kiwi plants flower and fruit on old wood</li>
                            <li>
                                Regularly remove water sprouts (vigorous shoots originating from
                                older wood) and shoots from the trunk.
                            </li>
                            <li>
                                Prune female vines during the winter months, when the plant is dormant.
                                Prune male vines in early summer after bloom.
                            </li>
                            <li>
                                In cold areas, the vines of hardy kiwi may die back to the ground
                                each year. Remove the dead stems and mulch with leaves or straw.
                            </li>
                        </ul>
                    </div>
                    <h3>How to Propagate Kiwi Vines:</h3>
                    <p>
                        Kiwi can be propagated from seeds:
                    </p>
                    <div className="ingredient-benefits">
                        <ol>
                            <li>
                                Remove the seeds from a mature kiwi and let the seeds dry for
                                two days.
                            </li>
                            <li>
                                Place the seeds in a container with moist perlite and
                                refrigerate at 40 degrees F (4 degrees C) for 2 months.
                            </li>
                            <li>
                                Plant the seeds 1/8 inch deep in moist sterile potting mix and
                                cover the container with plastic wrap.
                            </li>
                            <li>
                                Place the container in a warm, bright spot and keep the soil
                                moist.
                            </li>
                            <li>
                                When seedlings start growing, uncover the container.
                            </li>
                            <li>When the plants have four true leaves, transplant them into
                                individual pots.
                            </li>
                            <li>
                                When the plants are several inches tall, transplant them outdoors.
                            </li>
                        </ol>
                    </div>

                    <p>
                        Kiwis can also be propagated from softwood cuttings (cuttings taken from
                        new growth during the summer):
                    </p>
                    <div className="ingredient-benefits">
                        <ol>
                            <li>Cut a kiwi stem into six-inch lengths and cut off any growing tip.</li>
                            <li>Put the cuttings into a glass with an inch of water.</li>
                            <li>In about 3 weeks, the cuttings will have tiny roots at the ends
                                of the cuttings.
                            </li>
                            <li>Plant the cuttings in pots or plant outdoors.</li>
                        </ol>
                    </div>
                    <h2>Recommended Varieties:</h2>
                    <h3>Hardy Kiwi(Kiwiberries):</h3>
                    <div className="ingredient-benefits">
                        <ul>
                            <li>
                                A. arguta Ananasnaya (also called Anna) has jade-colored skin, bright
                                green flesh, black seeds and tastes like pineapple.
                            </li>
                            <li>
                                A. arguta Issai is self-fertile (does not require a male pollinator) and
                                produces small, juicy fruit. Pollinators love the fragrant white flowers
                                in early summer.</li>
                            <li>
                                A. arguta Geneva ripens earlier than either Anna or Issai and has
                                sweet, honey-flavored fruit.
                            </li>
                            <li>
                                A. arguta Kens Red has fruit with reddish-purple skins. The flesh inside
                                is dark green with deep-red streaks.
                            </li>
                            <li>
                                A. kolomikta Red Beauty fruit ripens earlier than most hardy kiwi species,
                                but A. kolomikta can be more temperamental in general. Fruit is skinny and
                                sweet. Foliage turns a brilliant red in the fall.
                            </li>
                        </ul>
                    </div>
                    <h3>Kiwifruit:</h3>
                    <div className="ingredient-benefits">
                        <ul>
                            <li>
                                Hayward is the main female variety of A. deliciosa grown commercially. It
                                produces the fuzzy brown fruit with green interiors that can be found in
                                grocery stores.
                            </li>
                            <li>
                                Male varieties include Chico, Matua, and Tamori.
                            </li>
                        </ul>

                    </div>
                    <h2>Harvesting:</h2>
                    <h3>When to Harvest Kiwi Fruit:</h3>
                    <div className="ingredient-benefits">
                        <ol>
                            <li>
                                The fruit typically reaches maturity in September/October, which can make
                                it susceptible to early fall frosts in some areas.
                            </li>
                            <li>Harvest the fruit when they are soft to the touch and ready to be eaten.</li>
                            <li>
                                Alternatively, if early fall frosts are a concern, harvest kiwi fruits
                                when they are still firm but have black seeds. This fruit can be stored
                                in the refrigerator for up to six weeks. Remove it from the refrigerator
                                and allow it to soften for a couple of days before eating.
                            </li>
                        </ol>
                    </div>
                    <h3>How to Store Kiwi Fruit:</h3>
                    <div className="ingredient-benefits">
                        <ol>
                            <li>
                                Store firm kiwi in the refrigerator or a cooler for up to six
                                weeks.
                            </li>
                            <li>
                                Freeze firm whole hardy kiwis on a cookie sheet and then put
                                them into plastic freezer bags.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Grow_Kiwi;