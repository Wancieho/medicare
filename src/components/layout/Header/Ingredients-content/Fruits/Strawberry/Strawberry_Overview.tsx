import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Strawberry_Overview() {
    return (
        <>
            <IngredientNameHeading ingredientName="Strawberries" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Strawberry_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Strawberry_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Strawberry_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Strawberry_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Strawberry_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Strawberry">Grow Strawberry</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Strawberries"
                        familyName="Rosaceae" origin="Brittany, France"
                        geoLocation="China, US, Turkey, Mexico, Egypt, Spain" />
                    <div className="content-wrapper">
                        <h2>What is a Strawberry?</h2>
                        <p>
                            The garden strawberry (or simply strawberry; Fragaria ) is a widely
                            grown hybrid species of the genus Fragaria, collectively known
                            as the strawberries, which are cultivated worldwide for their
                            fruit. The fruit is widely appreciated for its characteristic
                            aroma, bright red color, juicy texture, and sweetness.
                        </p>
                        <p>
                            It is consumed in large quantities, either fresh or in such
                            prepared foods as jam, juice, pies, ice cream, milkshakes, and
                            chocolates. Artificial strawberry flavorings and aromas are also
                            widely used in products such as candy, soap, lip gloss, perfume,
                            and many others.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <h3>Its Origin:</h3>
                    <p>
                        The garden strawberry was first bred in Brittany, France, in the 1750's
                        via a cross of Fragaria virginiana from eastern North America and Fragaria
                        chiloensis, which was brought from Chile by Amédée-François Frézier in 1714.
                        Cultivars of Fragaria replaced the woodland strawberry (Fragaria vesca),
                        which was the first strawberry species cultivated in the early 17th century.
                    </p>
                    <p>
                        From a botanical point of view, the strawberry is not a berry but an aggregate
                        accessory fruit, meaning that the fleshy part is derived not from the plant's
                        ovaries but from the receptacle that holds the ovaries. Each apparent "seed"
                        (achene) on the outside of the fruit is actually one of the ovaries of the
                        flower, with a seed inside it.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Strawberry_Overview;