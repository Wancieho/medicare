import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Grow_FlaxSeeds() {
    return (
        <>
            <IngredientNameHeading ingredientName="Flax Seeds" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/FlaxSeeds_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/FlaxSeeds_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/FlaxSeeds_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/FlaxSeeds_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/FlaxSeeds_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_FlaxSeeds">Grow Flax Seeds</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Flax Seeds"
                        familyName="Linaceae" origin="Syria, Turkey"
                        geoLocation="Syria, Switzerland, China, and India" />
                    <div className="content-wrapper">
                        <h2>How do I grow Flax Seeds?</h2>
                        <p>
                            Growing Flax Seeds on a commercial level
                            can be a complicated process, but planting flax from seed in your
                            garden is easier than you may think. In fact, you have likely grown
                            its wildflower cousins, blue flax and scarlet flax before, or know
                            someone who has. Common flax, like its cousins, is a cool-season
                            plant, and the seeds should be planted as soon as the ground can
                            be worked in spring.
                        </p>
                        <p>
                            A late frost will not usually harm the plants
                            once they emerge, as seedlings with at least two leaves can tolerate
                            temperatures as low as 28 F. (-2 C.). Look for a sunny, sheltered
                            planting site when planting flax from seed. Although flax will
                            adapt to most well-drained soil types, rich soil is optimum.
                            Dig in a generous amount of compost, manure, or other organic
                            matter, especially if your soil is poor.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Grow_FlaxSeeds;