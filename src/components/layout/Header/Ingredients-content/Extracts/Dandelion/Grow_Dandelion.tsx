import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Grow_Dandelion() {
    return (
        <>
            <IngredientNameHeading ingredientName="Dandelion" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to={"/Dandelion_Overview"}>Overview</Link>
                    </li>
                    <li>
                        <Link to={"/Dandelion_HowToUse"}>How to use</Link>
                    </li>
                    <li>
                        <Link to={"/Dandelion_Benefits"}>Benefits</Link>
                    </li>
                    <li>
                        <Link to={"/Dandelion_SideEffects"}>Side Effects</Link>
                    </li>
                    <li>
                        <Link to={"/Dandelion_Dosage"}>Dosage</Link>
                    </li>
                    <li>
                        <Link to={"/Grow_Dandelion"}>Grow Dandelion</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Taraxacum(Dandelion)"
                        familyName="Asteraceae" origin="Eurasia"
                        geoLocation="Eurasia and North America" />
                    <div className="content-wrapper">
                        <h2>How do I grow Dandelion?</h2>
                        <h3>When to plant Dandelion:</h3>
                        <p>
                            Dandelions are low-maintenance plants that thrive in USDA hardiness zones 3-9.
                            With a germination rate of about 10 to 14 days, dandelion seeds can be planted
                            from early spring (about six weeks before the last frost) through late summer
                            or early fall.
                        </p>
                        <p>
                            They can grow in soil temperatures as low as 50 degrees Fahrenheit, though they
                            prefer a warmer climate.
                        </p>

                    </div>
                </div>
                <div className="content-section2">
                    <h2>Follow the step below to grow Dandelion:</h2>
                    <div className="ingredient-benefits">
                        <ul>
                            <li>
                                <h3>Choose and prepare your planting spot:</h3>
                                <dt>
                                    Dandelion seeds can germinate
                                    successfully in a number of different light and soil conditions, but
                                    they usually thrive in loose, well-draining, and fertile soil. While
                                    a sunny spot may seem like the obvious choice for a spot, try to choose
                                    a location with partial shade (or even full shade) if you are growing
                                    dandelions to eat.
                                </dt>
                                <dt>
                                    A shadier spot will slow their growth and prevent the dandelion leaves
                                    from getting too bitter in the full sun.
                                </dt>
                            </li>
                            <li>
                                <h3>Sow your seeds:</h3>
                                <dt>
                                    Sow your dandelion seeds directly into your garden
                                    soil six weeks before the last frost of the spring. The ground
                                    temperature should be at least 50 degrees Fahrenheit.
                                </dt>
                                <dt>
                                    Plant your seeds a quarter of an inch below the soil surface and
                                    only lightly cover them with soil to help the sunlight germinate
                                    them. If you are planting your seeds in rows, sow each seed a
                                    few inches apart and give the rows about a foot of space in between
                                    them.
                                </dt>
                            </li>
                            <li>
                                <h3>Thin your plants:</h3>
                                <dt>
                                    Dandelion plants can grow up to six inches tall
                                    in six-inch-wide clusters. Once your dandelions have sprouted a few
                                    inches above the ground soil, thin them back to about six inches
                                    between each plant to prevent overgrowth.
                                </dt>
                            </li>
                        </ul>
                    </div>
                    <h2>How to Harvest Dandelion:</h2>
                    <p>

                    </p>
                    <p>
                        You only want to pick and consume the cleanest and healthiest-looking
                        dandelion flowers. Avoid harvesting dandelions from areas that have
                        been chemically treated with pesticides or herbicides.
                    </p>
                    <div className="ingredient-benefits">
                        <ul>
                            <li>
                                <h3>Choose a clean area for your harvest:</h3>
                                <dt>If you don not have a dedicated
                                    garden bed or container for your dandelions, make sure
                                    the area that you are harvesting your dandelions from
                                    is free of animal waste or foot traffic damage.
                                </dt>
                            </li>
                            <li>
                                <h3>Cover the area with dark fabric for a few days:</h3>
                                <dt>
                                    A few days before you harvest your dandelions, cover the area
                                    you will be harvesting with some dark fabric. This blocks out
                                    the light and slows down the maturing of the dandelion leaves
                                    which can make them more bitter.
                                </dt>
                            </li>
                            <li>
                                <h3>Snip your leaves and flowers:</h3>
                                <dt>
                                    Snip the dandelion head just
                                    below the blossom using a clean pair of scissors, leaving a
                                    small bit of stem attached. If the blossoms are already open,
                                    put their stems in cold water to keep them from closing until
                                    you are ready to use them. You can also snip away the young
                                    leaves from the center stem to use in salads.
                                </dt>
                            </li>
                            <li>
                                <h3>Extract the plant:</h3>
                                <dt>
                                    If you want to harvest the dandelion root, you will need to
                                    pull up the whole plant similar to how you would regularly
                                    remove a weed. You can also use a digging tool to loosen the
                                    soil around the plant, which can make it easier to pull it up
                                    without snapping the roots. Keep in mind that the dandelion
                                    plant can still regrow as long as a piece of its root remains
                                    behind.
                                </dt>
                            </li>
                        </ul>
                    </div>
                    <h2>Three Tips to Care for Dandelions:</h2>
                    <p>
                        Dandelions are self-pollinators and do not require a lot of upkeep. It usually takes
                        more effort to permanently get rid of them than it does to keep them growing.
                        However, for a few simple steps on maintaining your dandelions, see below:
                    </p>
                    <div className="ingredient-benefits">
                        <ul>
                            <li>
                                <h3>Water them regularly:</h3>
                                <dt>
                                    Dandelions like moist soil, so you should water them regularly to keep
                                    them hydrated. Make sure that the top two inches of the soil are dry
                                    before each round of watering.
                                </dt>
                            </li>
                            <li>
                                <h3>Watch the sunlight:</h3>
                                <dt>
                                    Make sure your dandelions get at least six hours of sun every day when
                                    you are growing them. Once they are well-established, make sure that
                                    they can get plenty of shade to prevent the greens from getting too
                                    bitter if you plan to eat them.
                                </dt>
                            </li>
                            <li>
                                <h3>Avoid mulching:</h3>
                                <dt>
                                    Mulching is a popular way to prevent weeds but it blocks out the light
                                    that dandelions need for their seeds to germinate. Avoid using mulch
                                    on your dandelions.
                                </dt>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Grow_Dandelion;