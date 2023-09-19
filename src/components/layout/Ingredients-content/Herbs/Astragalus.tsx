import "../../../../App.css"
import Ingredient from "../Ingredient"
import IngredientNameHeading from "../Ingredient-heading"


function Astragalus_Overview() {
    return (
        <>
            <div className="flex-content">
                <Ingredient ingredientName="Astragalus"
                    familyName="N/A" origin="Unknown"
                    geoLocation="Asian regions" />

                <div className="content-wrapper">
                    <h2>What is Astragalus?</h2>
                    <p className="paragraph-content">
                        Astragalus is a kind of flowering plant which is a root that
                        has been used for centuries in traditional chinese medicine.
                        Adaptogens are a class of natural
                        substances that are believed to stimulate the body's resistance to:
                        <ol>
                            <li>Physical</li>
                            <li>Environmental, and</li>
                            <li>Emotional stressors</li>
                        </ol>
                        The chemicals in astragalus also seem
                        to stimulate the immune system and reduce swelling.
                        People commonly use astragalus for:
                        <ul>
                            <li>hay fever</li>
                            <li>diabetes</li>
                            <li>kidney disease</li>
                        </ul>
                        and many other conditions, but there is no good scientific evidence to support
                        these uses.
                    </p>

                </div>
            </div>
            <div id="paragraph-content1">
                <p>
                    There is also no good evidence to support using astragalus for COVID-19.
                    There are many species of astragalus. Some species contain a nerve toxin
                    and have been linked to livestock poisonings. These include Astragalus
                    lentiginosus, Astragalus mollissimus, and others. But these species
                    usually aren't found in dietary supplements. Most astragalus supplements
                    contain Astragalus membranaceus. Also, don't confuse astragalus with tragacanth.
                    These are different plants.
                </p>
            </div>
        </>
    )
}

function SideAffects_Use() {
    return (
        <>
            <div className="flex-content">
                <Ingredient ingredientName="Astragalus"
                    familyName="N/A" origin="Unknown"
                    geoLocation="Asian regions" />

                <div className="content-wrapper">
                    <h2>Use of Astragalus?</h2>

                    <p className="paragraph-content">
                        Reducing side effects of chemotherapy. Early research suggests that
                        giving astragalus intravenously (by IV) or using Chinese herbal
                        mixtures containing astragalus might reduce:

                        <ul>
                            <li>nausea</li>
                            <li>vomiting</li>
                            <li>diarrhea, and </li>
                            <li>bone marrow suppression (a decrease in the cells that
                                provide immunity) that is associated with chemotherapy treatments.
                            </li>
                        </ul>
                    </p>
                    <p>
                        Diabetes. Early research suggests that astragalus, given intravenously
                        (by IV) or taken by mouth as a combination product, might help control
                        blood sugar and insulin levels in people with type 2 diabetes.
                    </p>
                </div>
            </div>
            <div id="paragraph-content2">
                <h3>What are the side affects of using Astragalus and what is it's dosage?</h3>
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
        </>)
}

function Disclaimer() {
    return (
        <></>)
}

function Interactions() {
    return (
        <></>)
}

function Dosage() {
    return (
        <>
            <p></p>
            <div id="span-heading">
                <span>Possibly effective against:</span>
            </div>
            <div className="Astragalus-content">
                <p>
                    Reducing side effects of chemotherapy. Early research suggests that
                    giving Astragalus intravenously or using chinese herbal mixtures
                    <span className="em">containing</span> Astragalus might reduce
                    <ul>
                        <li>
                            <span className="em">nausea</span>
                        </li>
                        <li>
                            <span className="em">vomiting</span>
                        </li>
                        <li>
                            <span className="em">diarrhea</span>, and
                        </li>
                        <li>
                            <span className="em">bone marrow suppression</span>(a decrease
                            in the cells that provide immunity)
                        </li>
                    </ul>
                    that is associated with chemotherapy
                    treatments.
                </p>
                <div>
                    <span>Diabetes</span>
                </div>
            </div>
        </>
    )
}

function Astragalus() {
    return (
        <>
            <IngredientNameHeading ingredientName="Astragalus" />
            <div className="Ingredient-hub">
                <ul>
                    <li>Overview</li>
                    <li>How to use</li>
                    <li>Side Affects</li>
                    <li>Disclaimer</li>
                    <li>Interactions</li>
                    <li>Dosage</li>
                </ul>
            </div>
            <div className="component-content-rendering">
                {/* Components will be rendered here */}
                <Astragalus_Overview />
                <SideAffects_Use />
            </div>
        </>
    )
}

export default Astragalus;