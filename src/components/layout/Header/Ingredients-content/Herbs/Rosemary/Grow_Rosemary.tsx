import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Grow_Rosemary() {
    return (
        <>
            <IngredientNameHeading ingredientName="Rosemary" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Rosemary_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Rosemary_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Rosemary_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Rosemary_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Rosemary_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Rosemary">Grow Rosemary</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Salvia rosmarinus(Rosemary)"
                        familyName="Lamiaceae" origin="Native to the Mediterranean region"
                        geoLocation="Mediterranean Region" />
                    <div className="content-wrapper">
                        <h2>How do I grow Rosemary at Home in my gargen?</h2>
                        <p>
                            Rosemary is a woody-stemmed plant with needle-like leaves that can
                            commonly reach 3 feet in height, eventually stretching to 5 feet in
                            warmer climates unless clipped. In zone 8 and farther south, rosemary
                            bushes make a good evergreen hedge. In zone 7 and colder, try growing
                            rosemary in a container you can bring inside in cold weather. You can
                            even train rosemary into topiary shapes. Plants are tolerant of salt
                            spray, making them a good choice for pots on the beach.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <p>
                        With the right soil and water conditions, rosemary can grow into a large
                        evergreen hedge in warm areas. Placed along a path or border, it wafts a
                        soothing minty aroma to those who pass by.
                        Plant rosemary in spring once all chances of frost have passed. This
                        delightful herb is an all-star in the kitchen and is a great option for
                        raised garden beds, containers, and in-ground gardens.
                        Space rosemary plants 2 to 3 feet apart in an area with abundant sunlight
                        and rich, well-drained soil with a pH of 6.0 to 7.0.
                    </p>
                    <p>

                        Before planting, set your garden up for success by mixing in several
                        inches of aged compost or other rich organic matter into your native soil.
                        For container growing, consider a premium bagged potting mix.
                        Promote spectacular growth by feeding rosemary regularly with a water-soluble
                        plant food.
                    </p>
                    <p>
                        It's important to water regularly but be sure to let the soil
                        dry out between waterings. Harvest rosemary stems by snipping them with
                        sharp gardening shears. Harvest often once the plant is established, but
                        avoid pruning more than one-third of the plant at a time.

                    </p>
                    <h3>Soil, Planting, and Care:</h3>
                    <p>
                        Set out rosemary in spring, planting starter plants 2 to 3 feet apart; you can
                        also plant in fall in zone 8 and south. Choose strong, vigorous Bonnie Plants
                        rosemary to get your garden off to a great start—after all, Bonnie has spent
                        over a century helping home gardeners successfully grow their own food.
                    </p>
                    <p>
                        Plants are slow growing at first, but pick up speed in their second year.
                        Rosemary prefers full sun and light, well-drained soil with a pH between 6 and 7.
                        Improve your existing soil by adding a few inches of aged compost-enriched
                        Miracle-Gro® Performance Organics All Purpose In-Ground Soil and mixing it in
                        with the top layer. Potted rosemary needs a lighter-weight soil mix, so fill
                        containers with Miracle-Gro® Performance Organics® All Purpose Container Mix instead.
                        Keep the soil uniformly moist, allowing it to dry out between waterings. Mulch
                        your plants to keep roots moist in summer and insulated in winter, but take care
                        to keep mulch away from the crown of the plant. In the spring, prune dead wood out
                        of the plants.
                        For best growth, it's not enough just to start with rich, nutritious soil. You'll
                        also want to feed rosemary regularly throughout the season with a plant food that
                        feeds both your plants and the soil, like Miracle-Gro® Performance Organics® Edibles
                        Plant Nutrition (following the directions on the label).
                    </p>
                    <h3>Troubleshooting:</h3>
                    <p>
                        Whiteflies, spider mites, scale, and mealybugs can all bother rosemary, as can powdery mildew and root rot, particularly in humid regions. To prevent mildew and rot, be sure your plants enjoy good drainage and air circulation. In zone 7 and northward, extreme cold will kill the tops of the rosemary plant. In areas where it is likely to be hurt by winter, plant in a protected spot such as one near a south-facing masonry wall and away from the prevailing winter wind; also mulch to protect the roots. In zone 8 and farther south, rosemary needs no winter protection.
                        Harvest and Storage
                        Cut stems at any time for fresh rosemary. To dry rosemary, use a rack or hang it upside down in bunches to dry. Once stems are dry, strip the leaves from them. You can also freeze rosemary sprigs, preserve them in vinegar, or use them to flavour oil or butter.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Grow_Rosemary;