import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";


function Licorice_Benefits() {
    return (
        <>
            <IngredientNameHeading ingredientName="Licorice" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Licorice_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Licorice_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Licorice_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Licorice_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Licorice_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Licorice">Grow Licorice</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Liquorice(Licorice)"
                        familyName="Fabaceae" origin="Native to Western Asia, North Africa, 
                    and Southern Europe"
                        geoLocation="Western Asia, North Africa, 
                    and Southern Europe" />
                    <div className="content-wrapper">
                        <h2>What are the benefits of using Licorice?</h2>
                        <p>
                            Licorice root is the root of the plant which is often
                            added to herbal teas to enhance the flavor which has been
                            used for centuries in ancient like Egypt, Europe, and Asia.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <h2>Health benefits:</h2>
                    <h3>Licorice Tea</h3>
                    <p>
                        There is a long tradition but not a lot of research.
                        There is not enough high-quality evidence to clearly support its use for
                        any health condition. The compounds in licorice root that may be helpful
                        include glycyrrhizin (which is 50 times sweeter than sugar), licoricidin,
                        and liquiritin.
                    </p>
                    <p>
                        Sore throat: For centuries, people have sipped licorice root tea to help
                        soothe a sore throat. A licorice compound called licoricidin has been
                        shown to have antibacterial properties that may help.
                    </p>
                    <div className="ingredient-benefits">
                        <ul>
                            <li>
                                <h3>It Could Help Your Teeth:</h3>
                                <dt>
                                    Antibacterial properties in licorice root extract might have
                                    potential to help prevent cavities. That is not certain,
                                    though.
                                </dt>
                                <dt>
                                    Researchers did a preliminary study using sugar-free
                                    lollipops containing the extract to see if it was worth studying
                                    further. It did help the preschoolers who used the lollipops twice
                                    daily.
                                </dt>
                                <dt>
                                    However, more studies are needed to see how well this strategy works.
                                    Two licorice compounds, licoricidin and glabridin, may be what helps
                                    counter cavities.
                                </dt>
                            </li>
                            <li>
                                <h3>It May Help With Digestion:</h3>
                                <dt>
                                    One small study focused exclusively on a product made with a compound
                                    extracted from licorice root. The researchers studied it in 50 people
                                    with functional dyspepsia, which includes symptoms like heartburn,
                                    nausea, and upset stomach.
                                </dt>
                                <dt>
                                    Half of the group took the product, the other half got a placebo,
                                    and they did not know which they would gotten. Those who took the
                                    product got more relief from their symptoms than those who got the
                                    placebo. The study did not show why that was.
                                </dt>
                            </li>
                            <li>
                                <h3>It May Help With Eczema:</h3>
                                <dt>
                                    Some studies have shown that gels that you put on your skin made
                                    with licorice root can help treat atopic dermatitis (also known
                                    as eczema). Licorice root can help reduce irritated, inflamed,
                                    and itchy skin caused by
                                    <a href="https://www.webmd.com/skin-problems-and-treatments/eczema/atopic-dermatitis-eczema">
                                        eczema</a>.
                                </dt>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Licorice_Benefits;