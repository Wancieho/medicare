import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Astragalus_SideEffects() {
    return (
        <>
            <IngredientNameHeading ingredientName="Astragalus" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Astragalus_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Astragalus_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Astragalus_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Astragalus_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Astragalus_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Astragalus">Grow Grape Seeds</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Astragalus membranaceus"
                        familyName="Fabaceae" origin="Northern and Eastern China"
                        geoLocation="Northern and Eastern China" />
                    <div className="content-wrapper">
                        <h2>What are the side effects of using Astragalus?</h2>
                        <p>
                            Taken orally: Astragalus is possibly safe for most adult, however,
                            doses of up to 60 grams daily have been safely used for up to 4 months.
                            Astragalus is usually well-tolerated.
                        </p>
                        <p>
                            When applied to the skin: Speak with your medical provider before
                            applying it to your skin.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <h3>Precausions:</h3>
                    <p>
                        Breast-feeding: There isn't enough reliable information to know if astragalus is safe to
                        use when pregnant or breast-feeding. But some research in animals suggests
                        that it can be toxic during pregnancy and to the fetus. Stay on the safe side
                        and avoid use.
                    </p>
                    <p>
                        Auto-immune diseases such as multiple sclerosis (MS), lupus (systemic lupus
                        erythematosus, SLE), rheumatoid arthritis (RA), or other immune system conditions:
                        Astragalus might make the immune system more active. This could worsen the symptoms
                        of auto-immune diseases. Avoid using astragalus if you have any of these conditions.
                    </p>
                    <p>
                        Below are some cases when Astragalus root will not benefit you. However, it
                        is safe to use astragalus orally and appropriately. The adequate dosage is 60
                        grams for approximately four months. Symptoms include:</p>
                    <ul>
                        <li>Rashes</li>
                        <li>Itching</li>
                        <li>Nasal symptoms</li>
                        <li>Stomach discomfort</li>
                    </ul>
                    <p>
                        The below side effects of chemotherapy can be reduced by
                        giving astragalus intravenously (by IV) or using Chinese herbal
                        mixtures containing astragalus.
                    </p>
                    <ul>
                        <li>Nausea</li>
                        <li>Vomiting</li>
                        <li>Diarrhea, and </li>
                        <li>Bone marrow suppression (a decrease in the cells that
                            provide immunity) that is associated with chemotherapy treatments.
                        </li>
                    </ul>
                    <p>
                        It's important to note that these are uncommon. Some astragalus species
                        are toxic to livestock. These are usually not present in dietary supplements.
                        Several species have a neurotoxin. They are known as swainsonine, which
                        causes locoweed poisoning. Other species contain higher levels of selenium.
                        The symptoms are:
                    </p>
                    <ul>
                        <li>Diarrhoea</li>
                        <li>Irritability</li>
                        <li>Nausea</li>
                        <li>Skin rashes</li>
                        <li>Nerve problems</li>
                    </ul>
                    <p>
                        There is a lack of evidence in astragalus use during pregnancy or breastfeeding.
                        The repercussions might be toxic to the mother and fetus. Hence, it would help
                        if you used this herb wisely. It is essential to take the advice of a
                        healthcare professional to avoid complications.
                    </p>
                    <h2>Interaction with other Drugs:</h2>
                    <p>
                        Astragalus may react with other medications that you might be taking. In such a
                        case, it suppresses your immune system. Here are some medicines that might
                        interact with astragalus and elevate your problems.
                    </p>
                    <h3>Cyclophosphamide</h3>
                    <p>
                        Cyclophosphamide reduces the immune response. Astragalus, on the other hand,
                        increases its functioning. Thus, it might disrupt its positive effects if you
                        consume it with astragalus.
                    </p>
                    <h3>Immunosuppressant</h3>
                    <p>
                        Immunosuppressant is similar to cyclophosphamide. However, it also decreases
                        the activity of the immune system. Thus it is not advisable to combine both.
                        In addition, medications after a transplant can worsen your condition.
                    </p>
                    <h3>Lithium</h3>
                    <p>
                        Astragalus slows down the ability of the body to get rid of lithium. As a
                        result, it elevates lithium levels in the body and causes severe side effects.
                        It would help if you talked to your doctor or physician before changing the
                        combination to your body's requirements.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Astragalus_SideEffects;