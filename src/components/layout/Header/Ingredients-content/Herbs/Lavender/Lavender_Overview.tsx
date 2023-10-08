import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Lavender_Overview() {
    return (
        <>
            <IngredientNameHeading ingredientName="Lavender" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Lavender_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Lavender_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Lavender_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Lavender_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Lavender_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Lavender">Grow Lavender</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Lavandula(Lavender)"
                        familyName="LamiaCeae" origin="Europe,northern to eastern Africa, 
                    Mediterranean, southwest Asia, and India"
                        geoLocation="Europe,northern to eastern Africa, 
                    Mediterranean, southwest Asia, and India." />
                    <div className="content-wrapper">
                        <h2>What is Lavandula(Lavender)?</h2>
                        <p>
                            Lavandula(Lavender) is a genus of fourty-seven known species of flowering
                            plants in the mint family, Lamiaceae. It is native to the Old World and is
                            found in Cape Verde and the Canary Islands, and from Europe across to
                            northern and eastern Africa, the Mediterranean, southwest Asia to India.
                        </p>
                        <p>
                            Many members of the genus are cultivated extensively in temperate climates
                            as ornamental plants for garden and landscape use, for use as culinary
                            herbs, and also commercially for the extraction of essential oils. Lavender
                            is used in: baking traditional medicine and as an ingredient in cosmetics.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <h3>Plant and leaves:</h3>
                    <p>
                        The genus includes annual or short-lived herbaceous perennial plants, and shrub-like
                        perennials, subshrubs or small shrubs. Leaf shape is diverse across the genus. They
                        are simple in some commonly cultivated species; in other species, they are pinnately
                        toothed, or pinnate, sometimes multiple pinnate and dissected. In most species, the
                        leaves are covered in fine hairs or indumentum, which normally contain essential oils.
                    </p>
                    <h3>Flowers:</h3>
                    <p>
                        Flowers are contained in whorls, held on spikes rising above the foliage, the spikes
                        being branched in some species. Some species produce colored bracts at the tips of
                        the inflorescences. The flowers may be blue, violet, or lilac in the wild species,
                        occasionally blackish purple or yellowish. The Sepal calyx is tubular. The corolla is
                        also tubular, usually with five lobes (the upper lip often cleft, and the lower lip
                        has two clefts).
                    </p>
                </div>
            </div>
        </>
    )
}

export default Lavender_Overview;