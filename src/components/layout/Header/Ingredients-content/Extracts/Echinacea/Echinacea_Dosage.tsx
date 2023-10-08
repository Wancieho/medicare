import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";


function Echinacea_Dosage() {
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
                        <h2>What is the recommended dosage for using Echinacea?</h2>
                        <h3>Children:</h3>
                        <p>
                            Since herbal supplements are not regulated, there is no official safe
                            dosage recommendation of echinacea for children.
                        </p>
                        <p>
                            If you choose to give your child echinacea, the dosing
                            instructions provided on the product you buy may be your
                            best guide for determining an appropriate dosage for your
                            child's age and weight, though this is not established.
                        </p>
                        <h3>Adults:</h3>
                        <p>
                            For general immune system stimulation, during colds, flu, upper
                            respiratory tract infections, or bladder infections, take echinacea
                            three times a day until you feel better, but not for more than ten days.
                            Do <span className="em-span">Not</span> take echinacea on an empty stomach.
                            Instead, take it with food or a large glass of water. Apply creams or
                            ointments for slow-healing wounds as needed.
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Echinacea_Dosage;