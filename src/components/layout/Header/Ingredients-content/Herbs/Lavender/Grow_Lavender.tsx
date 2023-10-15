import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Grow_Lavender() {
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
                        <h2>How do I grow Lavender?</h2>
                        <p>
                            lavender thrives in most soil qualities, from poor to moderately fertile.
                            Lavender makes only one demand for the soil: It must drain well. Standing
                            water and wet areas could encourage root rot. Amend compacted or clay
                            soil with compost or aged manure to improve drainage. Plant lavender in
                            a spot with at least 6 to 8 hours of sunlight each day, full sun.
                        </p>
                        <h2>When to Plant Lavender:</h2>
                        <ul>
                            <li>
                                Lavender is best planted as a young plant starting in the spring
                                after the soil has warmed up to at least (15 degrees Celcius or
                                59 degrees Fahrenheit) and the threat of frost has passed.
                            </li>
                            <li>
                                If planting in the fall, choose larger, more established plants to
                                ensure their survival through the winter.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="content-section2">
                    <h3>How to Plant Lavender:</h3>
                    <p>
                        Lavender is challenging to grow from seed; we recommend purchasing
                        small starter plants from a garden nursery or taking a softwood
                        cutting from an existing plant. Seeds may take up to three months to
                        germinate, and seedlings must be overwintered indoors in cool climates.
                    </p>
                    <p>
                        Plant lavender 2 to 3 feet apart. Plants typically reach between 1 and
                        3 feet in height. Add mulch (rock or pea gravel work particularly
                        well) to keep weeds minimal. Keep the mulch away from the crown of the
                        lavender plant, however, to prevent excess moisture and root rot.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Grow_Lavender;