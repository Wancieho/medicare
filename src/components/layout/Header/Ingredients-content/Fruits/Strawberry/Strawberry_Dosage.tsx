import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Strawberry_Dosage() {
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
                        <h2>What is the recommended dosage for consuming strawberries?</h2>
                        <p>
                            Fresh strawberry dosages have ranged from 250 to 500 g/day, given
                            for up to 1 month. Freeze-dried strawberry powder dosages have ranged
                            from 10 to 60 g/day for up to 6 months. In clinical studies, 1 g of
                            freeze-dried strawberries (at 10% of fresh weight) was equivalent
                            to approximately 10 g of fresh strawberries.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <div className="ingredient-benefits-a">
                        <ul>
                            <li>
                                <h3>Adverse Reactions:</h3>
                                <p>
                                    Allergic reactions (itching, dermatitis) to red ripe strawberries
                                    (but not the mutated white genotype) have been reported. A
                                    case report of a local reaction to an artificial strawberry-scented
                                    anesthetic face mask was reported in a 9-year-old girl. In
                                    clinical studies assessing adverse effects of dietary
                                    supplementation with strawberries, no adverse events occurred
                                    with 6 to 12 weeks of supplementation.
                                </p>
                                <h3>Toxicology:</h3>
                                <p>
                                    There is no toxicity according to most searches.
                                </p>
                                <h3>Contraindications:</h3>
                                <p>
                                    Known allergy to strawberries. Cross-sensitivity may occur in
                                    birch pollen-allergic individuals.
                                </p>
                                <h3>Pregnancy/Lactation:</h3>
                                <p>
                                    Information regarding safety and efficacy in pregnancy and
                                    lactation is lacking.
                                </p>
                                <h3>Interactions:</h3>
                                <p>
                                    So far Strawberries do not seems to have any interactions with any
                                    medications.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Strawberry_Dosage;