import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Grow_Turmeric() {
    return (
        <>
            <IngredientNameHeading ingredientName="Turmeric" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Turmeric_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Turmeric_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Turmeric_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Turmeric_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Turmeric_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Turmeric">Grow Turmeric</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Turmeric"
                        familyName="Zingiberaceae" origin="Southeast Asia"
                        geoLocation="Indian subcontinent and southeast Asia" />
                    <div className="content-wrapper">
                        <h2>How do I grow Turmeric?</h2>
                        <p>
                            One of the great joys of gardening (and among the most satisfying) is tasting
                            the fruits of our labor, especially when those labors include adding herbs
                            and spices to the garden mix. Even in climates such as ours with its short
                            growing season and freezing winter weather, it's possible to grow tropical
                            spices like ginger and turmeric (U.S. hardiness zones 8-10). You just need
                            to grow them indoors.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <h3>Growing Turmeric:</h3>
                    <p>
                        Two spices, ginger (Zingiber officinale) and turmeric (Curcuma longa), are
                        easy to grow in containers and adapt well to living inside although they do
                        benefit from time outside during the warm weather months. Indoors or out,
                        both grow best at temperatures of at least 68 degrees Fahrenheit and should
                        not be exposed to temperatures below 50.
                    </p>
                    <p>

                        Both ginger and turmeric grow from a rhizome (a fleshy root) that is the
                        edible part of the plant. The rhizomes often can be purchased through a
                        mail-order nursery or at a grocery store. Try an organic market if you cannot
                        find these in your local supermarket.
                    </p>
                    <p>
                        Select one that is firm (not shriveled), several inches long and with several
                        buds or "eyes." Cut it into 2-3-inch pieces, making sure that each piece
                        includes at least 2-3 buds.
                    </p>
                    <p>
                        Choose a pot at least 12 inches in diameter. Fill the pot almost to the top
                        with a nutrient-rich soil that will drain well. Place the rhizome
                        horizontally on the surface with the eyes facing up. Cover with about 2
                        inches of soil.
                    </p>
                    <p>
                        Water sparingly until sprouts appear. The soil should be moist, but never wet.
                        Too much moisture may rot the rhizome.Put the pot in a warm location (70-80 degrees
                        Fahrenheit). If the room is cool, a heat mat such as those used for seed starting
                        can be used to warmthe soil. Remove from the heat mat once you see sprouts.
                    </p>
                    <p>
                        Now comes the most difficult part. Patience. It will take 3-8 weeks for
                        sprouts to appear. Ginger will likely sprout sooner, turmeric later. When
                        they do, move the pot to a sunny spot near a window. If necessary, supplement
                        with a grow light. Water as needed to keep the soil moist (not wet), and mist
                        often if the air is dry.
                    </p>
                    <p>
                        For the most part, ginger and turmeric plants are relatively care free with
                        ginger growing 2-3 feet in height and turmeric 3-4 feet. As they mature,
                        you'll get a lovely display of tropical foliage and perhaps a flower or two.
                    </p>
                    <p>
                        When the weather gets warmer, and after your plants have begun to leaf out,
                        you can move your ginger and turmeric plants outside to benefit from the
                        fresh air and sunshine. Daytime temperatures should be at least 68 degrees
                        Fahrenheit, with nighttime temperatures not below 50.
                    </p>
                    <p>
                        Gradually introduce the plants to sunlight over the course of several days
                        to avoid burning the foliage. When the weather begins to turn colder, or
                        temperatures drop below 50, bring them back inside.
                    </p>
                    <p>
                        After 8-10 months, the foliage will begin to fade. When the plant has
                        yellowed and dried out, it's time to harvest. Simply dig up the entire plant,
                        brush the soil away from the rhizomes, and cut the stalk off.
                    </p>
                    <p>
                        Save a piece or two of the rhizomes to replant. Rinse off the rest and
                        allow to dry. The whole rhizome can be stored in the refrigerator for up
                        to three months, or cut in pieces and stored in the freezer for up to six
                        months.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Grow_Turmeric;