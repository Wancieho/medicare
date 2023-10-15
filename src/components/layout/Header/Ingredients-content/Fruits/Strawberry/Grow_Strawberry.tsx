import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Grow_Strawberry() {
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
                        <h2>How do I grow Strawberries?</h2>
                        <p>
                            The environmental and health-related impacts of conventional strawberry
                            growing is high, so if you are concerned with these issues, look for
                            locally-grown strawberries and ask your local farmer about his or her
                            production methods.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <div className="ingredient-benefits-a">
                        <ul>
                            <li>
                                <h3>Pesticides:</h3>
                                <p>
                                    Strawberries rank the highest, number 1 (out of 53 ) on the
                                    Environmental Working Group's Shoppers' Guide to Pesticides in
                                    Produce. Because one-third of all conventional strawberry samples
                                    contained 10 or more pesticides, the EWG recommends buying organic.
                                </p>
                                <p>
                                    Unfortunately, the pesticides used in conventional strawberry
                                    production are some of the very worst — including methyl bromide,
                                    which sterilizes the soil and acts as an insecticide (and is also used
                                    as a fumigant for many foods and spices, and as a weed killer).
                                </p>
                                <p>
                                    According to the US Environmental Protection Agency (EPA), methyl bromide
                                    is categorized as a "powerful ozone depleting substance." It was
                                    "phased out" in 2005 in the US's attempt to comply with the Montreal
                                    Protocol on Substances that Deplete the Ozone Layer, but the US lobbied
                                    for — and won — "exemptions" that include — guess what? — strawberry
                                    production, both for seedlings and fruit.
                                </p>
                                <p>
                                    Even organic strawberries' seedlings and seeds have been fumigated with
                                    methyl bromide — although there is been some exciting progress in the
                                    past few years making organic starts more available. And it is not just
                                    methyl bromide — a variety of other pesticides are also used in
                                    conventional strawberry production. Chemical fertilizers are also
                                    are the handmaidens of the monocropped, conventionally
                                    grown strawberry, as is heavy water usage.
                                </p>
                                <h3>Labor Issues With Some Strawberries:</h3>
                                <p>
                                    In addition to its effects on the ozone layer, methyl bromide is a highly
                                    toxic pesticide that can cause neurological, lung and kidney damage and an
                                    increased risk of prostate cancer. Most of the health-related affects of
                                    methyl bromide have been recorded in farm workers and pesticide appliers.
                                </p>
                                <p>
                                    Although modern strawberry breeding techniques have extended the season
                                    dramatically (especially conventionally-grown berries), in much of the
                                    country, locally grown strawberries are available only from the end of
                                    Spring through mid-to-late Summer.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Grow_Strawberry;