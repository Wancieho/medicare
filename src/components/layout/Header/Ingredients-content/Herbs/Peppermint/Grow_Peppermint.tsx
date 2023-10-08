import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Grow_Peppermint() {
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
                        <h2>How do I grow Peppermint at home in my Garden?</h2>
                        <p>
                            Peppermint generally grows best in moist, shaded locations ,and expands by
                            underground rhizomes. Young shoots are taken from old stocks and dibbled
                            into the ground about 0.5 m (1.5 ft) apart.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <h2>When to Plant Peppermint:</h2>
                    <p>
                        Mint is a prodigious and invasive grower in many different types of climates,
                        so consider planting your peppermint inside in a container instead of your
                        herb garden. Peppermint should be planted in early spring after the last frost
                        of the winter has passed. Peppermint grows in USDA hardiness zones 5 to 9.
                        It can tolerate quick spurts of frost, but cannot survive temperatures that
                        stay cold for extended periods of time.
                    </p>
                    <p>
                        Growing peppermint is faster when you propagate it from cuttings rather than
                        planting from mint seeds. Follow these steps to plant and grow your own
                        peppermint at home.
                    </p>
                    <ol>
                        <li>
                            Prepare your stem cutting. To start propagating your new plants, cut a
                            five to six inch piece of peppermint from a plant that is already
                            established. Remove the leaves from the bottom two inches of the piece.
                            Place your stems in a glass of water that is placed in the full sun.
                            When it has new roots that are a couple inches long, it is ready to
                            plant.
                        </li>
                        <li>
                            Choose your container. Many people choose to grow peppermint in a container
                            because it can easily take over a garden bed. Go with a plastic container
                            to keep the soil moist, because peppermint thrives in consistently-moist
                            soil.
                        </li>
                        <li>
                            Fill your container with soil. Fill your container with moist potting
                            soil. If you are growing your peppermint indoors, do not use manure or
                            emulsion. A layer of mulch can help the soil retain moisture. Place
                            your container in a location that gets full sunlight.
                        </li>
                        <li>Plant your peppermint stems. Carefully plant each cutting in the moist
                            soil, spacing the stems at least 10 inches apart.
                        </li>
                        <li>Regularly water your peppermint. Unlike other plants, you should not allow
                            peppermint soil to dry out between waterings. The soil should always be
                            moist. Water your peppermint everyday or every other day.
                        </li>
                        <li>Harvest your peppermint. When your peppermint leaves are fragrant, they
                            are ready to harvest. For small harvests, simply pinch or snip off the
                            fresh leaves or sprigs you would like to remove. For larger harvests, cut
                            the entire plant down to just above the first set of leaves. This removes
                            the lower leaves, which may have already begun to yellow, and helps the plant
                            grow bushier for the second or third harvest.
                        </li>
                    </ol>
                    <h3>Care Tips for growing Peppermint:</h3>
                    <p>
                        Peppermint is a hardy plant, but it still requires attention and care.
                        Here are some tips for growing your peppermint:
                    </p>
                    <ol>
                        <li>Prune your peppermint regularly. Peppermint is a wild grower that you will need
                            to prune to make sure your leaves are flavorful and to ensure healthy new growth.
                            Prune the top half of your plant back before and during its growing season in late
                            spring to mid-summer. Keep an eye out for stems that appear 'woody' or dry and
                            remove them. Cut back and replace your peppermint plants every two to three years.
                            You may also remove flower buds to keep the leaves at peak oil concentration.
                        </li>
                        <li>Give your plant enough light. As long as the soil is moist, peppermint prefers
                            exposure to full sun which helps the plant produce its oils. They can tolerate
                            partial shade, but the flavor is strongest when your plant receives full sun.
                        </li>
                        <li>Keep the soil moist. Peppermint is not as susceptible to root rot as many other
                            plants, and it thrives in moist soil. Make sure that this thirsty plant gets
                            enough water.
                        </li>
                        <li>Monitor your plant for pests. Mint plants usually repel pests like deer and
                            rodents, smaller insects such as aphids and spider mites. Spray your plants
                            with a hose to knock them off your plant.
                        </li>
                    </ol>
                    <h2>When to Harvest Peppermint:</h2>
                    <p>
                        Depending on the health of your plant, peppermint can be harvested two to three
                        times per growing season. The ideal time to harvest is right before your plant
                        begins to bloom. This is when the oil concentration in the leaves is its highest.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Grow_Peppermint;