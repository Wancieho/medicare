import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Astragalus_Overview() {
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
                        <h2>What is Astragalus ?</h2>
                        <p>
                            The scientific name of Astragalus root is Astragalus membranaceus. It is a
                            type of flowering plant which is celebrated throughout centuries. It is an
                            essential part of traditional Chinese medicine. In addition, it is an
                            adaptogen. Adaptogens are natural substances with the potential of stimulating
                            the body's immunity. They work in response to physical, environmental,
                            and emotional stressors. They strengthen your immune system and have the
                            capacity to reduce swelling. Astragalus is said to relieve the symptoms of
                            hay fever, diabetes, and other conditions that might threaten your well-being.
                            However, there is still a lack of scientific evidence to prove these. that are
                            believed to stimulate the body's resistance to:
                        </p>
                        <ol>
                            <li>Physical</li>
                            <li>Environmental, and</li>
                            <li>Emotional stressors</li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Astragalus_Overview;