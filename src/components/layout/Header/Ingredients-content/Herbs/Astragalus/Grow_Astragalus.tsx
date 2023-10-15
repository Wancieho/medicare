import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Grow_Astragalus() {
    return (
        <>
            <IngredientNameHeading ingredientName="Astragalus" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Astragalus_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Astragalus_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Astragalus_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Astragalus_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Astragalus_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Astragalus">Grow Grape Seeds</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Astragalus membranaceus"
                        familyName="Fabaceae" origin="Northern and Eastern China"
                        geoLocation="Northern and Eastern China" />
                    <div className="content-wrapper">
                        <h2>How do I grow Astragalus?</h2>
                        <p>
                            Growing Astragalus from seed is more difficult than other herbs. The
                            seeds require a minimum three week cold stratification period. To
                            further aid germination, soak the seeds in water or scarify the seed
                            coat with fine grade sandpaper before sowing. Seeds can take as long
                            as nine weeks to sprout.  Astragalus herb plants can be directly
                            seeded in the garden, but the general recommendation is to give them
                            a head start by sowing indoors during late winter.
                        </p>

                    </div>
                </div>
                <div className="content-section2">
                    <p>
                        Transplant seedlings as soon as the danger of frost has passed. Astragalus
                        forms a taproot and older plants don't transplant well. Explore More Here
                        is more info on growing Astragalus conditions:
                    </p>
                    <div className="ingredient-benefits">
                        <ul>
                            <li>Location: Full sun to partial shade</li>
                            <li>Soil: Well-drained sandy loam, neutral to alkaline pH.</li>
                            <li>Moisture preference: Dry</li>
                            <li>USDA hardiness: Zones 5-9.</li>
                            <li>Plant height: 4 feet (1 m.)</li>
                            <li>Plant spacing: 12 to15 inches (30.5-38 cm.)</li>
                            <li>Flower period: June to August</li>
                            <li>Flower color: Yellow-white</li>
                            <li>Lifespan: Perennial.</li>
                        </ul>
                    </div>
                    <p>
                        Harvesting Astragalus Root The roots are the medicinal
                        part of Astragalus herb plants. While it can take anywhere from two
                        to four years for the taproot to grow to a usable size, roots of any
                        age can be harvested. Older roots are considered more potent.
                    </p>
                    <p>
                        Harvest Astragalus in the fall by first removing the foliage and stems.
                        The Astragalus herb plants have no medicinal value and can be composted
                        or discarded. Next, carefully dig around the base of the stem to expose
                        the taproot. Continue digging and twisting until the majority of the root
                        can be extracted from the ground.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Grow_Astragalus;