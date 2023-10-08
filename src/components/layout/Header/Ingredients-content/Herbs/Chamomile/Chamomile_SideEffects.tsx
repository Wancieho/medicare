import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Chamomile_SideEffects() {
    return (
        <>
            <IngredientNameHeading ingredientName="Chamomile" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Chamomile_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Chamomile_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Chamomile_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Chamomile_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Chamomile_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Chamomile">Grow Chamomile</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Chamomile"
                        familyName="Asteraceae" origin="Europe and western Asia"
                        geoLocation="Europe and western Asia" />
                    <div className="content-wrapper">
                        <h2>Are there any side effects or health risks for using Chamomile?</h2>
                        <p>
                            People sensitive to ragweed and chrysanthemums or other members
                            of the Compositae family are more prone to develop contact allergies
                            to chamomile, Rarely, people have had
                            a severe enough allergic reaction to go into anaphylaxis, a potentially
                            life-threatening condition that can involve shock, <a target="_blank"
                                href="https://www.everydayhealth.com/hives/">hives</a>, trouble
                            breathing, vomiting, and unconsciousness. Anaphylaxis requires immediate
                            medical attention and possible administration of emergency <a target="_blank"
                                href="https://www.everydayhealth.com/reviews/best-over-counter-allergy-medications/">
                                allergy medicine</a>,
                            according to MedlinePlus. </p>
                    </div>
                </div>
                <div className="content-section2">
                    <p>Chamomile can also trigger allergic contact
                        dermatitis (a type of eczema) in some people, which can cause skin redness,
                        itching, and swelling, <a target="_blank" href="https://www.ncbi.nlm.nih.gov/books/NBK447113/">
                            InformedHealth.org</a> reports.
                        Also, adverse interactions between chamomile and cyclosporine (Restasis), a medication
                        used to prevent organ transplant rejection, and the blood thinner warfarin
                        (Coumaden, Jantoven) have been reported, according to the NCCIH. If you take
                        either of these drugs, speak with your doctor before adding chamomile to your
                        routine, especially in supplement form.
                    </p>
                    <p>
                        MedlinePlus deems Roman chamomile as
                        <span>"likely unsafe"</span> to ingest in <span>"medicinal amounts during
                            pregnancy"</span> because of the long-standing belief that it can induce
                        pre-term birth, shorter newborns, or low birth weight, per a review
                        published in Obstetrics & Gynecology in 2019. In general there's a lack
                        of information about its safety for pregnant women. If you're pregnant,
                        be sure to speak with your doctor before adding any herbs to your diet.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Chamomile_SideEffects;