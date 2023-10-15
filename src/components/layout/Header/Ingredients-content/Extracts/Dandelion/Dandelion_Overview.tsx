import Ingredient from "../../Ingredient";
import "../../../../../../App.css";
import IngredientNameHeading from "../../Ingredient-heading";
import { Link, Outlet, } from "react-router-dom";

function Dandelion_Overview() {
    return (
        <>
            <IngredientNameHeading ingredientName="Dandelion" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to={"/Dandelion_Overview"}>Overview</Link>
                    </li>
                    <li>
                        <Link to={"/Dandelion_HowToUse"}>How to use</Link>
                    </li>
                    <li>
                        <Link to={"/Dandelion_Benefits"}>Benefits</Link>
                    </li>
                    <li>
                        <Link to={"/Dandelion_SideEffects"}>Side Effects</Link>
                    </li>
                    <li>
                        <Link to={"/Dandelion_Dosage"}>Dosage</Link>
                    </li>
                    <li>
                        <Link to={"/Grow_Dandelion"}>Grow Dandelion</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Taraxacum(Dandelion)"
                        familyName="Asteraceae" origin="Eurasia"
                        geoLocation="Eurasia and North America" />
                    <div className="content-wrapper">
                        <h2>What is Dandelion?</h2>
                        <p>
                            Dandelions, also known as Taraxacum officinale, are a type of
                            flowering plant native to Europe, Asia and North America.
                        </p>
                        <p>
                            As a member of the daisy family of plants, dandelions are related
                            to dahlias, thistle, ragweed, lettuce, artichokes and sunflowers.
                            Dandelions produce many small yellow flowers, called florets,
                            which collectively form one flower head.
                        </p>
                        <p>
                            Once it has finished flowering,
                            the flower head dries out, the florets drop off and a seed head is
                            formed.
                            The dandelion seeds are then naturally dispersed by the wind … or those
                            looking to score a free wish.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dandelion_Overview;