import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Ingredient_Overview() {
    return (
        <>
            <IngredientNameHeading ingredientName="Tea-Tree-Oil" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Tea-Tree-Oil_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Tea-Tree-Oil_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Tea-Tree-Oil_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Tea-Tree-Oil_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Tea-Tree-Oil_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Tea-Tree-Oil">Grow Tea Tree Oil</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Tea tree oil(Melaleuca oil)"
                        familyName="Myrtaceae" origin="Native to Australia"
                        geoLocation="Southeast coast of Australia" />
                    <div className="content-wrapper">
                        <h2>What is Tea-Tree-Oil?</h2>
                        <p>
                            Tea tree oil, also known as melaleuca oil, is an essential oil with a fresh, camphoraceous odor
                            and a colour that ranges from pale yellow to nearly colourless and clear.[1][2] It is derived
                            from the leaves of the tea tree, Melaleuca alternifolia, native to southeast Queensland and the
                            northeast coast of New South Wales, Australia.
                        </p>
                        <p>
                            The oil comprises many constituent chemicals, and its composition changes if it is exposed to
                            air and oxidizes. Commercial use of tea tree oil began in the 1920s, pioneered by the entrepreneur
                            Arthur Penfold. When used topically, tea tree oil is believed to be antibacterial. Tea tree oil
                            is commonly used to treat acne, athlete's foot, lice, nail fungus and insect bites.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ingredient_Overview;