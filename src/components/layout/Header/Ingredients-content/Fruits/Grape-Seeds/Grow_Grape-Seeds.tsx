import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Grow_Grape_Seeds() {
    return (
        <>
            <IngredientNameHeading ingredientName="Grape Seeds" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Grape-Seeds_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Grape-Seeds_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Grape-Seeds_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Grape-Seeds_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Grape-Seeds_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Grape-Seeds">Grow Grape Seeds</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Grape Seeds"
                        familyName="Vitaceae" origin="Native to the Mediterranean 
                    region, central Europe and southwest Asia"
                        geoLocation="Mediterranean 
                    region, central Europe and southwest Asia" />
                    <div className="content-wrapper">
                        <h2>How do I grow Grape Seeds?</h2>
                        <p>
                            Grapevines are both beautiful and useful, and are one of
                            the oldest plants to be cultivated. Grapes are typically
                            reproduced from cuttings or grafts; however, if you are
                            determined and patient, you can grow grapes from seeds.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <h2>Growing Grapes:</h2>
                    <h2>1# Selecting your Grape Seeds:</h2>
                    <div className="ingredient-benefits">
                        <ol>
                            <li>
                                <h3>Choose the right variety:</h3>
                                <p>
                                    There are thousands of grape varieties in the world. For
                                    the greatest success in growing grapes, choose the
                                    variety that will work best for you. Do some research on
                                    grape varieties, while keeping the following in mind:
                                </p>
                                <ul>
                                    <li>
                                        Your reasons for growing grapes. You may want to eat the fruit, make jam,
                                        make wine, or just add the beauty of grapevines to your yard. Find out which
                                        varieties are best for your intended purpose.
                                    </li>
                                    <li>
                                        Your climate conditions. Different varieties of grapes are better suited to
                                        certain geographic areas and climate conditions. Learn about grapes that are
                                        known to perform well in your area.
                                    </li>
                                    <li>
                                        Natural variation among grapes grown from seed. There are some genetic differences
                                        even among grapes of the same type, so the grapes you grow may not turn out exactly
                                        the way you expect. Go into your project with an open mind, and be prepared to
                                        experiment.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h3>Obtain the grape seeds:</h3>
                                <p>
                                    Once you identify the variety of grapes you want to grow, get your seeds. You can get them
                                    from grapes you've purchased, from a nursery, from your yard's wild grapevines (in some areas),
                                    or from another gardener.
                                </p>
                            </li>
                            <li>
                                <h3>Ensure the seeds are viable:</h3>
                                <p>
                                    Examine the seeds to make sure they are healthy and in good condition. Squeeze the seed gently
                                    between two fingers. A healthy seed is firm to the touch.
                                </p>
                                <ul>
                                    <li>
                                        Look at the seed's color. In a healthy grape seed, you will be able to see a pale
                                        gray or white endosperm under the seed coat.
                                    </li>
                                    <li>
                                        Put them in water. Healthy, viable seeds will sink when placed in water.
                                        Discard any seeds that float.
                                    </li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                    <h2>2# Readying Your Seeds for Growth:</h2>
                    <div className="ingredient-benefits">
                        <ol>
                            <li>
                                <h3>Prepare the seeds:</h3>
                                <p>
                                    Take the viable seeds and wash them thoroughly to remove any pulp or other matter. Soak
                                    them in a small amount of distilled water for up to 24 hours
                                </p>
                                <ol></ol>
                            </li>
                            <li>
                                <h3>Stratify your seeds:</h3>
                                <p>
                                    Many seeds require a period of cold, moist conditions to begin the germination process.
                                    In nature, this is achieved when seeds sit in the ground over the winter. You can mimic
                                    these conditions through the process of stratification. For grape seeds, the best time
                                    to begin stratification is in December (the northern hemisphere winter).
                                </p>
                                <ul>
                                    <li>
                                        Prepare a bed for your seeds. Fill an airtight bag or other capsule with a soft medium
                                        like wet paper towels or sand, vermiculite or peat moss that has been dampened. Peat
                                        moss is the best choice for grape seeds because its anti-fungal properties will help
                                        eliminate seed-damaging mold.
                                    </li>
                                    <li>
                                        Tuck the seeds into the bed. Cover them with about 1/2"(inch) (1.25 cm) of growing medium.
                                    </li>
                                    <li>
                                        Refrigerate the seeds. The ideal temperature for stratification is a steady 35-40 degrees
                                        F (1-3 degrees C), so the refrigerator is a good place for this process. Keep the seeds
                                        refrigerated for two to three months. Do not allow them to freeze.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h3>Plant your seeds:</h3>
                                <p>
                                    In early spring, remove the seeds from the refrigerator and plant them in pots filled with good
                                    soil. Plant seeds individually in small pots, or in larger pots with at least 1 1/2"(inch)
                                    (3.8 cm) between them.
                                </p>
                                <ul>
                                    <li>
                                        Make sure your seeds stay warm enough. To properly germinate, the seeds need daytime
                                        temperatures of at least 70 degrees F (20 egrees C) and nighttime temperatures around
                                        60 degrees F (15 degrees C). Use a greenhouse or warming mats to keep your seeds at the
                                        correct temperature.
                                    </li>
                                    <li>
                                        Keep the soil moist but not too wet. Mist the surface with a fine spray of water when
                                        it starts to look dry
                                    </li>
                                    <li>
                                        Check for growth. Grape seeds typically take between 2-8 weeks to sprout.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h3>Transplant your seedlings:</h3>
                                <p>
                                    When your seedlings have grown to about 3"(inch) (8 cm), transplant them to 4"(inch) (10 cm) pots.
                                    For the healthiest plants, keep your seedlings indoors or in a greenhouse until they have
                                    reached a height of 12"(inch) (30 cm), have a good network of roots and have at least 5-6 leaves.
                                </p>
                            </li>
                        </ol>
                    </div>
                    <h2>3# Moving Your Grapes Outdoors:</h2>
                    <div className="ingredient-benefits">
                        <ol>
                            <li>
                                <h3>Select a good location for your grapevines:</h3>
                                <p>
                                    To thrive, grapevines need the right amount of sun, proper drainage and a form of support.
                                </p>
                                <ul>
                                    <li>
                                        Choose a sunny spot. Grapes need 7-8 hours of full sun daily for best results.
                                    </li>
                                    <li>
                                        Make sure you have plenty of space. Space your plants about 8"(inch) (2.5 m) apart to
                                        allow for growth.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h3>Prepare your soil before planting:</h3>
                                <p>
                                    Grapes require well drained soil. If you have clay or other poorly drained soil, augment
                                    it with decomposed compost, sand or other soil amendments to increase drainage. Alternatively,
                                    use a raised bed filled with a good sandy loam mixed with compost.
                                </p>
                                <ul>
                                    <li>
                                        Check the pH of your soil before planting your grapes. Different types of grapes thrive
                                        best with different soil pH levels (5.5-6.0 for natives, 6.0-6.5 for hybrids, and
                                        6.5-7.0 for vinifera), so it is best to either plant in an area with a pH level in the
                                        right range, or adjust your soil's pH before planting.
                                    </li>
                                    <li>
                                        If you are planning to grow grapes for wine, be aware that different types of soil (e.g.,
                                        sandy, silty, rich in limestone, or rich in clay) will affect the flavor of the wine.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h3>Fertilize your grapes after planting:</h3>
                                <p>
                                    Two weeks after planting, add a small amount of 10-10-10 fertilizer to the soil around the base
                                    of your young plants. Repeat this process once per year every spring after that.
                                </p>
                            </li>
                            <li>
                                <h3>Properly support your grapes:</h3>
                                <p>
                                    Grapevines need a trellis or arbor for proper support. The first year in the vineyard (2 years
                                    after starting from seed), when your plants are still small, stakes will be sufficient to support
                                    them and keep them off the ground. As they grow, you will need to train them to the trellis or
                                    arbor. Tie the tip of the shoots to the wire, and allow it to grow along the wire.
                                </p>
                            </li>
                            <li>
                                <h3>Take proper care of your plants, and prepare to wait:</h3>
                                <p>
                                    Grapevines take up to three years to start producing fruit. During that time, proper care and
                                    training of your plants is essential for the best fruit yield.
                                </p>
                                <ul>
                                    <li>
                                        Year One: Watch for growth. Choose the strongest three shoots on the plant and allow those
                                        to grow. Pinch off all others. The three remaining shoots will grow stronger and more vigorous.
                                    </li>
                                    <li>
                                        Year Two: Fertilize using a balance fertilizer. Remove flower clusters as they emerge, allowing
                                        the vine to fruit this early will deplete its energy. Remove any buds or shoots that grow below
                                        the three main ones you selected the prior year. Prune properly. Loosely tie long shoots to the
                                        arbor or trellis.
                                    </li>
                                    <li>
                                        Year Three: Continue fertilizing and removing low buds and shoots. During this year, you can
                                        allow a few flower clusters to remain and produce a small crop of grapes.
                                    </li>
                                    <li>
                                        Year Four and Later: Continue fertilizing and pruning. This year and thereafter, you can let all
                                        the flower clusters fruit if you wish.
                                    </li>
                                    <li>
                                        As you prune, be aware that grapes will fruit on one-year-old wood (i.e., wood that grew during
                                        the previous season).
                                    </li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Grow_Grape_Seeds;