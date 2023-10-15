import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Garlic_HowToUse() {
    return (
        <>
            <IngredientNameHeading ingredientName="Garlic(Allium sativum)" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Garlic_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Garlic_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Garlic_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Garlic_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Garlic_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Garlic">Grow Garlic</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Garlic(Allium sativum)"
                        familyName="Amaryllidaceae" origin="Native to South Asia, 
                    Central Asia and northeastern Iran"
                        geoLocation="South Asia, 
                    Central Asia and northeastern Iran" />
                    <div className="content-wrapper">
                        <h2>How is Garlic used?</h2>
                        <p>
                            Garlic is a commonly used food and flavoring agent. When used as a food product,
                            garlic is not likely to produce health benefits or side effects. When used as a
                            medicinal product, garlic may produce both desired and unwanted effects on the body.
                        </p>
                        <p>
                            Garlic taken orally (by mouth) has been used in alternative medicine as a possibly
                            effective aid in treating high blood pressure, coronary artery disease (hardened arteries),
                            stomach cancer, colon cancer or rectal cancer, and in preventing tick bites. Garlic
                            applied to the skin may also be possibly effective in treating fungal skin infections
                            such as ringworm, jock itch, or athlete's foot.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <p>
                        It is not certain whether garlic is effective in treating any medical condition. Medicinal
                        use of this product has not been approved by the FDA. Garlic should not be used in
                        place of medication prescribed for you by your doctor.
                    </p>
                    <p>
                        Garlic is often sold as an herbal supplement. There are no regulated manufacturing
                        standards in place for many herbal compounds and some marketed supplements have been found
                        to be contaminated with toxic metals or other drugs. Herbal/health supplements should be
                        purchased from a reliable source to minimize the risk of contamination.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Garlic_HowToUse;