import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Echinacea_SideEffects() {
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
                        <h2>What are the side effects of using Echinacea?</h2>
                        <p>
                            The use of herbs is a time-honored approach to strengthening
                            the body and treating disease, however, herbs contain active substances
                            that may trigger <span className="em-span">side effects</span> and interact
                            with other herbs, supplements,or medications. For these reasons, you
                            should take herbs only under the supervision of a health care provider
                            knowledgeable in the field of botanical medicine.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <h3>Precautions:</h3>
                    <p>
                        People with <span className="em-span">tuberculosis, leukemia, diabetes,
                            connective tissue disorders,
                            multiple sclerosis, HIV or AIDS, any autoimmune diseases, or, possibly,
                            liver disorders should Not</span> take echinacea. There is some concern
                        that echinacea may reduce the effectiveness of medications that suppress
                        the immune system. For this reason, people receiving organ transplants
                        who must take immunosuppressant medications should avoid this herb.
                    </p>
                    <p>
                        In rare cases, echinacea may cause allergic reactions, ranging from a mild
                        rash to anaphylaxis (a life-threatening reaction accompanied by throat
                        tightening, shortness of breath, and, possibly fainting). People with asthma
                        and allergies may be at an increased risk for developing these adverse reactions.
                        People with allergies to plants in the daisy family (compositae) should not take
                        Echinacea without the supervision of a provider.
                        Minor side effects can include:
                    </p>
                    <div className="ingredient-benefits">
                        <ul>
                            <li>Stomach upset</li>
                            <li>Nausea</li>
                            <li>Dizziness</li>
                            <li>Dry eyes</li>
                        </ul>
                    </div>
                    <p>
                        There has been one report of an individual developing erythema nodosum
                        (a painful skin condition) after taking echinacea to treat the flu.
                        When taken by mouth, echinacea may cause temporary numbing and
                        tingling on the tongue.
                    </p>
                    <p>
                        Despite concerns that echinacea may be unsafe for pregnant or
                        breastfeeding women, evidence suggests that the use of echinacea
                        during pregnancy does not increase the risk of birth defects or
                        other pregnancy related health problems. More research is needed.
                        In the meantime, avoid using Echinacea during pregnancy or
                        breastfeeding until more conclusive studies are conducted.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Echinacea_SideEffects;