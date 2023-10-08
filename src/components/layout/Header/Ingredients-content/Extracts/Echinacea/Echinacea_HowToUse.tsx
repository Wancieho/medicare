import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Echinacea_HowToUse() {
    return (
        <>
            <IngredientNameHeading ingredientName="Echinacea" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Echinacea_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Echinacea_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Echinacea_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Echinacea_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Echinacea_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Echinacea">Grow Echinacea</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Echinacea"
                        familyName="Asteraceae" origin="Native to Northern, Eastern and Central America"
                        geoLocation="Eastern and Central America only" />
                    <div className="content-wrapper">
                        <h2>How is Echinacea used?</h2>
                        <p>
                            In America, Echinacea is used for treating common cold and
                            upper respiratory tract infections.
                        </p>
                        <p>It is available in the form of:</p>
                        <div className="ingredient-benefits">
                            <ul>
                                <li>Liquid Extracts</li>
                                <li>Tinctures</li>
                                <li>Capsules</li>
                                <li>Tablets</li>
                                <li>Ointments</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="content-section2">
                    <h2>Echinacea is used by
                        some in an attempt to:</h2>
                    <div className="ingredient-benefits">
                        <ul>
                            <li>Reduce the severity and duration of the common cold</li>
                            <li>Reduce the incidence of upper respiratory infections</li>
                            <li>Reduce inflammation in the body and brain</li>
                            <li>Lower blood sugar</li>
                            <li>Reduce feelings of anxiety</li>
                            <li>Treat acne</li>
                            <li>Heal wounds</li>
                        </ul>
                    </div>
                    <h2>What is Echinacea made of?</h2>
                    <p>
                        Echinacea contains several chemicals that play a role in its therapeutic
                        effects. These include polysaccharides, glycoproteins, alkamides,
                        volatile oils, and flavonoids.
                    </p>
                    <p>
                        The chemicals contained in the root differ considerably from those
                        in the upper part of the plant. For example, the roots have high
                        concentrations of volatile oils (odorous compounds) while the
                        above-ground parts of the plant tend to contain more polysaccharides
                        (substances known to trigger the activity of the immune system).
                        The combination of these active substances is responsible for
                        echinacea's beneficial effects, though research suggests that the
                        above ground portion of Echinacea purpurea is the most effective.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Echinacea_HowToUse;