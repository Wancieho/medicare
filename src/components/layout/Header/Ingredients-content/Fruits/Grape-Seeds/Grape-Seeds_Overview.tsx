import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Grape_Seeds_Overview() {
    return (
        <>
            <IngredientNameHeading ingredientName="Grape Seeds" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Grape-Seeds_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Grape-Seeds_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Grape-Seeds_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Grape-Seeds_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Grape-Seeds_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Grape-Seeds">Grow Grape Seeds</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Grape (Vitis vinifera)"
                        familyName="Vitaceae" origin="Native to the Mediterranean 
                    region, central Europe and southwest Asia"
                        geoLocation="Mediterranean 
                    region, central Europe and southwest Asia" />
                    <div className="content-wrapper">
                        <h2>What is Grape Seed?</h2>
                        <p>
                            Grape Seeds are seeds from Grapes(Green,purple and red) used to get a
                            seed extract to make wine, juice, foods, beverages, drinks, desserts,
                            diet supplements & used in nutrition, beauty products and medicine.
                        </p>
                        <p>
                            Grapes (Vitis vinifera) have been heralded for their medicinal
                            and nutritional value for thousands of years. Egyptians ate grapes
                            at least six thousand years ago, and several ancient Greek
                            philosophers praised the healing power of grapes, usually in the
                            form of wine.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <h2>What are Grape Seeds made of?</h2>
                    <p>
                        Vitamin E, flavonoids, linoleic acid, and OPCs are highly concentrated in grape seeds.
                        Lower concentrations of these compounds are also available in the skin of the grape, as
                        well as grape juice and wine. Resveratrol is another compoud in grapes and grape skins that is
                        related to OPCs. Resveratrol has become very popular as an antioxidant and is being studied in
                        connection with a variety of diseases.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Grape_Seeds_Overview;