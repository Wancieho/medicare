import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";


function Ginger_Overview() {
    return (
        <>
            <IngredientNameHeading ingredientName="Ginger" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Ginger_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Ginger_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Ginger_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Ginger_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Ginger_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Ginger">Grow Ginger</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Ginger"
                        familyName="Zingiberaceae" origin="Southeast Asia"
                        geoLocation="All around the world" />
                    <div className="content-wrapper">
                        <h2>What is Ginger?</h2>
                        <p>
                            Ginger root or ginger, is widely used as a spice and a folk medicine.
                            It is a herbaceous perennial which grows annual pseudostems (false stems
                            made of the rolled bases of leaves) about one meter tall, bearing narrow
                            leaf blades. The inflorescences bear flowers having pale yellow petals
                            with purple edges, and arise directly from the rhizome on separate shoots.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <p>
                        Ginger is in the family Zingiberaceae, which also includes turmeric (Curcuma
                        longa), cardamom (Elettaria cardamomum), and galangal. Ginger originated
                        in Southeast Asia and was likely domesticated first by the
                        Austronesian peoples. It was transported with them throughout the Indo-Pacific
                        during the Austronesian expansion (c.5,000 BP), reaching as far as Hawaii.
                    </p>
                    <p>
                        Ginger is one of the first spices to have been exported from Asia, arriving
                        in Europe with the spice trade, and was used by ancient Greeks and Romans.
                        The distantly related dicots in the genus Asarum are commonly called wild
                        ginger because of their similar taste.
                    </p>
                    <p>
                        Used in traditional medicine in China, India and Japan for centuries, and
                        as a dietary supplement, research shows that ginger may be helpful for
                        mild nausea and vomiting associated with pregnancy, although its safety
                        has not been demonstrated. It remains uncertain whether ginger is effective
                        for treating any disease, and use of ginger as a drug has not been approved
                        by the FDA.
                    </p>
                    <p>
                        In 2020, world production of ginger was 4.3 million tonnes, led by India
                        with 43% of the world total.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Ginger_Overview;