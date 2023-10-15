import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Grow_Chamomile() {
    return (
        <>
            <IngredientNameHeading ingredientName="Chamomile" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Chamomile_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Chamomile_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Chamomile_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Chamomile_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Chamomile_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Chamomile">Grow Chamomile</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Chamomile"
                        familyName="Asteraceae" origin="Europe and western Asia"
                        geoLocation="Europe and western Asia" />
                    <div className="content-wrapper">
                        <h2>How to Grow Chamomile?</h2>
                        <p>
                            If you decide to grow your own chamomile, follow the below steps given or view <a
                                href="https://hort.extension.wisc.edu/articles/chamomile-matricaria-chamomilla/">
                                UWHD</a>.
                        </p>

                        <ul>
                            <li>
                                Grow the plant in full sunlight. Pick the flowers when they're near full bloom,
                                or when they're full and lay flat around the center of the flower.
                            </li>
                            <li>
                                Pop the flower head off with your fingers, and leave behind any stems.
                            </li>
                            <li>
                                Spread the flowers out on a surface in a warm and well-ventilated
                                place away from sunlight to dry out completely (or put them in a
                                food dehydrator on the lowest heat setting for 12 to 24 hours).
                            </li>
                        </ul>
                        <p>
                            Store them in a sealed, airtight container away from sunlight, at room
                            temperature for up to a year.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Grow_Chamomile;