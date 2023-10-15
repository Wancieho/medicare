import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Grow_Licorice() {
    return (
        <>
            <IngredientNameHeading ingredientName="Licorice" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Licorice_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Licorice_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Licorice_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Licorice_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Licorice_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Licorice">Grow Licorice</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Liquorice(Licorice)"
                        familyName="Fabaceae" origin="Native to Western Asia, North Africa, 
                    and Southern Europe"
                        geoLocation="Western Asia, North Africa, 
                    and Southern Europe" />
                    <div className="content-wrapper">
                        <h2>How do I grow Licorice?</h2>
                        <h3>Where to Plant Licorice Plant:</h3>
                        <p>
                            While it's most commonly grown as an annual, licorice plant is a
                            woody tropical perennial that is winter hardy in Zones 9-11.
                            In the rest of the country, either plant it as an annual or in a
                            container that can be moved inside in cold temperatures.
                            Licorice plant is useful at the front of sunny beds and borders
                            and can be planted on slopes for erosion control. It also is a
                            good choice for containers and hanging baskets.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <h3>How and When to Plant Licorice Plant:</h3>
                    <p>
                        Plant licorice plant seeds (if you can find them) in late autumn in a
                        greenhouse or the house to develop plants that can go into the garden
                        when the weather warms the following spring. Gardeners who prefer to
                        buy nursery plants should put them out in the garden at the same time
                        they put out tomato plants. If you have a potted licorice plant, you
                        can take stem cuttings and root them in water timed for a late spring
                        planting outside.
                    </p>
                    <div className="ingredient-benefits">
                        <ol>
                            <li>In the garden, dig a hole as deep as your plant's nursery pot.</li>
                            <li>Remove the plant from the pot and loosen the soil around the roots. </li>
                            <li>Place the plant in the hole and backfill with soil.</li>
                            <li>Space multiple plants about 30 inches apart.</li>
                            <li>
                                Water new plants well to settle the soil around roots and help
                                the plants get established.
                            </li>
                        </ol>
                    </div>
                    <h3>Light:</h3>
                    <p>
                        Licorice plant is a fast grower and likes as much sun as possible.
                        In part shade, plants can become leggy and need pruning to keep from
                        looking messy. Also, shade-grown plants don't look quite as silvery, as the
                        hairs are not as dense when the plant grows in the shade.
                    </p>
                    <h3>Soil and Water:</h3>
                    <p>
                        When looking for a home for your licorice plant, make sure to plant it
                        in well-drained soil. Licorice plant doesn't appreciate sitting in too
                        much water. If it does, the plant may begin to rot. Once the plant is
                        established, it is drought-tolerant, although it prefers regular watering.
                    </p>
                    <h3>Temperature and Humidity:</h3>
                    <p>
                        Licorice plants grow best in dry, hot environments that receive little rainfall.
                        They do not tolerate any frost. Bring in the plants before the first frost
                        to winter them over, or take stem cuttings to begin a new crop for the
                        following spring.
                    </p>
                    <h3>Fertilizer:</h3>
                    <p>
                        Licorice plants are tolerant of many soil conditions and don't require
                        much fertilizer, but if the soil is poor, add compost or organic material
                        to enrich it. Then, a mid-season application of a balanced fertilizer
                        is all the plants need. For the amount to use, follow product label
                        instructions.
                    </p>
                    <h3>Pruning:</h3>
                    <p>
                        Licorice plant handles pruning well. It's a good idea to give trailing
                        varieties a pinch early in their growth to encourage good branching.
                    </p>
                    <h3>Potting and Repotting Licorice Plant:</h3>
                    <p>
                        This plant's semi-trailing or cascading growth habit works well in
                        containers and hanging baskets. Some varieties have a more upright habit,
                        so if you intend to use the plant as a spiller, check its habit before
                        purchasing. Repot a licorice plant yearly in a somewhat large container
                        being careful not to disturb the roots.
                    </p>
                    <h3>Pests and Problems:</h3>
                    <p>
                        Licorice plant is relatively pest-free, but watch for aphids, spider
                        mites and whiteflies, all of which can be treated with neem oil.
                        This plant likes hot, dry weather. If the plant is grown in a wet
                        area, it may develop root rot. If water stands on its leaves or the
                        plant grows in an area with high humidity, botrytis can occur.
                    </p>
                    <h3>How to Propagate Licorice Plant:</h3>
                    <p>
                        Licorice plant can be propagated by seeds, stem cuttings and root divisions.
                    </p>
                    <p>
                        In early spring in all but the warmest zones, prepare seeds by soaking them in
                        water for 24 hours. Then, sow the seeds on top of a seed-starting mix and do
                        not cover them. Supply bottom heat at about 68 degrees Fahrenheit, and
                        seedlings should appear two to three weeks later. Wait until the weather
                        warms to set them out in the garden. In Zones 9-11, sow seeds outside
                        in early spring in a full sun site. Cover them lightly with sand to keep
                        them from blowing away or being eaten by birds.
                    </p>
                    <p>
                        If you have a licorice plant and want more just like it, take stem cuttings
                        or root divisions for an exact duplicate of this hybrid plant. Take 6-inch
                        stem cuttings and remove the leaves from the bottom half. Dip it into rooting
                        hormone and settle it in a small pot of moist potting soil. Mist it every
                        day and tug on it slightly in a couple of weeks to determine whether it is
                        rooted.
                    </p>
                    <p>
                        The hands-down easiest way to make more licorice plants is to divide one.
                        Use a sharp shovel and cut a mature plant into four sections, each containing
                        a portion of leaves and roots. Replant the divisions immediately.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Grow_Licorice;