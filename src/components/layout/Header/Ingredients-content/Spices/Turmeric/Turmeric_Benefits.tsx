import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Turmeric_Benefits() {
    return (
        <>
            <IngredientNameHeading ingredientName="Turmeric" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Turmeric_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Turmeric_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Turmeric_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Turmeric_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Turmeric_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Turmeric">Grow Turmeric</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Turmeric"
                        familyName="Zingiberaceae" origin="Southeast Asia"
                        geoLocation="Indian subcontinent and southeast Asia" />
                    <div className="content-wrapper">
                        <h2>What are the benefits of using Turmeric?</h2>
                        <p>
                            Traditional claims that turmeric contains compounds with medicinal
                            properties. These compounds are called curcuminoids. The most important
                            one is curcumin. Curcumin is the main active ingredient in turmeric.
                            It has powerful anti-inflammatory effects and is a very strong antioxidant:
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <h3>Benefits of using Turmeric:</h3>
                    <div className="ingredient-benefits">
                        <ol>
                            <li>
                                <h3>
                                    Turmeric contains bioactive compounds with
                                    medicinal properties:
                                </h3>
                                <dt>
                                    The curcumin content of turmeric isn't that high. it is around 3%,
                                    by weight. Most of the studies on this herb use
                                    turmeric extracts that contain mostly curcumin itself, with
                                    dosages usually exceeding 1 gram per day.
                                </dt>
                                <dt>
                                    It would be very difficult to reach these levels just using
                                    turmeric as a spice in your foods. That's why some people choose
                                    to use supplements.
                                </dt >
                                <dt>
                                    Curcumin, however, is poorly absorbed into your bloodstream. In
                                    order to experience the full effects of curcumin, its
                                    bioavailability (the rate at which your body absorbs a substance)
                                    needs to improve.

                                    It helps to consume it with black pepper, which contains piperine.
                                    Piperine is a natural substance that enhances the absorption of
                                    curcumin by <a href="https://pubmed.ncbi.nlm.nih.gov/9619120/">
                                        2000%</a>.
                                </dt>
                                <dt>
                                    In fact, the best curcumin supplements contain piperine, and this
                                    makes them substantially more effective. Curcumin is also fat
                                    soluble, which means it breaks down and dissolves in fat or oil.
                                    That's why it may be a good idea to take curcumin supplements
                                    with a meal that's high in fat.
                                </dt>
                            </li>
                            <li>
                                <h3>Curcumin is a natural anti-inflammatory compound:</h3>
                                <dt>
                                    Inflammation is incredibly important. It helps fight foreign
                                    invaders and has a role in repairing damage in your body.
                                </dt>
                                <dt>
                                    Although acute, short-term inflammation is beneficial, it can
                                    be a concern if it becomes chronic and attacks your body's own
                                    tissues.
                                </dt>
                                <dt>
                                    Scientists now believe that chronic low-level inflammation can
                                    play a role in some health conditions and diseases.
                                    These include:
                                </dt>
                                <ul>
                                    <li>Heart disease</li>
                                    <li>Cancer</li>
                                    <li>Metabolic syndrome</li>
                                    <li>Alzheimer's disease</li>
                                    <li>Various degenerative conditions</li>
                                </ul>
                                <dt>
                                    That's why anything that can help fight chronic inflammation is
                                    potentially important in preventing and helping treat these
                                    conditions.
                                </dt>
                                <dt>
                                    While the topic of inflammation is multilayered and there's
                                    likely no simple answer, the key takeaway regarding curcumin
                                    is that it is a bioactive substance that can fight inflammation.
                                    However, very high doses are required to produce
                                    medicinal results.
                                </dt>
                            </li>
                            <li>
                                <h3>
                                    Turmeric can increase the antioxidant capacity of the body:
                                </h3>
                                <dt>
                                    Oxidative damage is believed to be one of the mechanisms behind
                                    aging and many diseases.
                                </dt>
                                <dt>
                                    It involves free radicals, highly reactive molecules with unpaired
                                    electrons. Free radicals tend to react with important organic
                                    substances, such as fatty acids, proteins, or DNA.
                                </dt>
                                <dt>
                                    The main reason antioxidants are so beneficial is that they protect
                                    your body from free radicals. Curcumin is a potent antioxidant
                                    that can neutralize free radicals due to its chemical structure.
                                </dt>
                                <dt>
                                    In addition, animal and cellular studies suggest that
                                    curcumin may block the action of free radicals and may stimulate
                                    the action of other antioxidants. Further clinical studies are
                                    needed in humans to confirm these benefits.
                                </dt>
                            </li>
                            <li>
                                <h3>
                                    Curcumin can boost brain-derived neurotrophic factor:
                                </h3>
                                <dt>
                                    Before scientists had a better understanding of neurons, it was
                                    believed that they weren't able to divide and multiply after
                                    early childhood. However, they now know that isn't the case.
                                    <dt>
                                        Neurons are capable of forming new connections, and in certain
                                        areas of the brain they can multiply and increase in number.

                                        One of the main drivers of this process is brain-derived
                                        neurotrophic factor (BDNF). This is a gene that's involved in
                                        making a protein responsible for promoting the life of neurons.
                                    </dt>
                                    <dt>
                                        The BDNF protein plays a role in memory and learning, and it can
                                        be found in areas of the brain responsible for eating, drinking,
                                        and body weight.

                                        Many common brain disorders have been linked to decreased levels
                                        of BDNF protein, including depression and
                                        Alzheimer's disease.
                                    </dt>
                                    <dt>
                                        Interestingly, animal studies have found that curcumin may increase
                                        brain levels of BDNF. By doing this, it may be effective in
                                        delaying or even reversing many brain diseases and age-related
                                        decreases in brain function. Still, since these studies were
                                        performed in animals, it is hard to say what the results mean
                                        for humans.
                                    </dt>
                                    <dt>
                                        It may also help improve memory and attention, which seems logical
                                        given its effects on BDNF levels. However, more studies are needed
                                        to confirm this.
                                    </dt>
                                </dt>
                            </li>
                            <li>
                                <h3>Curcumin may lower your risk of heart disease:</h3>
                                <dt>
                                    Heart disease is the number one cause of death in the world.
                                    Researchers have studied it for many decades and learned a lot
                                    about why it happens. Unsurprisingly, heart disease is incredibly
                                    complicated and various things contribute to it.
                                </dt>
                                <dt>
                                    Curcumin may help reverse many steps in the heart disease
                                    process. Perhaps the main benefit of curcumin when it comes to
                                    heart disease is improving the function of the endothelium, the
                                    lining of your blood vessels.
                                </dt>
                                <dt>
                                    The endothelial dysfunction is a major driver of heart disease.
                                    This is when your endothelium is unable to regulate blood pressure,
                                    blood clotting, and various other factors.

                                </dt>
                                <dt>
                                    Several studies suggest that curcumin can lead to improvements
                                    in heart health. Additionally, one study found that it is as
                                    effective as exercise in post-menopausal women.
                                </dt>
                                <dt>
                                    In addition, curcumin can help reduce inflammation and oxidation
                                    (as discussed above), which can play a role in heart disease.
                                    In one study of 121 people undergoing coronary artery bypass
                                    surgery, researchers assigned them either a placebo or 4 grams of
                                    curcumin per day a few days before and after the surgery.
                                </dt>
                                <dt>
                                    The curcumin group had a 65% decreased risk of experiencing a
                                    heart attack in the hospital.
                                </dt>
                            </li>
                            <li>
                                <h3>
                                    Turmeric may help prevent cancer:
                                </h3>
                                <dt>
                                    Cancer is a disease, characterized by uncontrolled cell growth.
                                    There are many different forms of cancer that appear to be affected
                                    by curcumin supplements.
                                </dt>
                                <dt>
                                    Curcumin has been studied as a beneficial herb in cancer
                                    treatment and been found to affect cancer
                                    growth and development.
                                </dt>
                                <dt>
                                    Studies have shown that it can:
                                </dt>
                                <ul>
                                    <li>
                                        Contribute to the death of cancerous cells.
                                    </li>
                                    <li>
                                        Reduce angiogenesis (growth of new blood vessels in tumors)
                                        Reduce metastasis (spread of cancer)
                                    </li>
                                    <li>
                                        Whether high-dose curcumin — preferably with an absorption
                                        enhancer like piperine - can help treat cancer in humans has
                                        yet to be studied properly.
                                    </li>
                                </ul>
                                <dt>
                                    However, there is evidence that it may prevent cancer
                                    from occurring in the first place, especially cancers of the digestive
                                    system like colorectal cancer. In a 30-day study in
                                    44 men with lesions in the colon that sometimes turn cancerous,
                                    4 grams of curcumin per day reduced the number of lesions by 40%.
                                </dt>
                            </li>
                            <li>
                                <h3>
                                    Curcumin may be useful in treating Alzheimer's disease:
                                </h3>
                                <dt>
                                    Alzheimer's disease is the most common form of dementia and may
                                    contribute to up 70% of dementia cases.
                                    While treatment exits for some of its symptoms, there is no
                                    cure for Alzheimer's yet. That's why preventing it from occurring
                                    in the first place is so important.
                                </dt>
                                <dt>
                                    There may be good news on the horizon because curcumin has been
                                    shown to cross the blood-brain barrier.
                                </dt>
                                <dt>
                                    it is known that inflammation and oxidative damage play a role in
                                    Alzheimer's disease, and curcumin has beneficial effectsTrusted
                                    Source on both.
                                </dt>
                                <dt>
                                    In addition, a key feature of Alzheimer's disease is a buildup of
                                    protein tangles called amyloid plaques. Studies show that curcumin
                                    can help clear these plaques.
                                </dt>
                                <dt>
                                    Whether curcumin can slow or even reverse the progression of
                                    Alzheimer's disease in people is currently unknown and needs to be
                                    studied.
                                </dt>
                            </li>
                            <li>
                                <h3>Arthritis patients respond well to curcumin supplements:</h3>
                                <dt>
                                    Arthritis is a common problem in Western countries. There are several
                                    different types of arthritis, most of which involve inflammation in
                                    the joints.
                                </dt>
                                <dt>
                                    Given that curcumin is a potent anti-inflammatory compound, it makes
                                    sense that it may help with arthritis. In fact, several studies show
                                    that there is an association.
                                </dt>
                                <dt>
                                    In a study in people with rheumatoid arthritis,
                                    curcumin was even more effective than an anti-inflammatory drug.

                                    May other studies have looked at the effects of
                                    curcumin on arthritis and noted improvements in various symptoms.
                                </dt>
                            </li>
                            <li>
                                <h3>Curcumin has benefits against depression:</h3>
                                <dt>
                                    Curcumin has shown some promise in treating depression.
                                    In a controlled trial, 60 people with depression
                                    were randomized into three groups. One group took Prozac, another
                                    group took 1 gram of curcumin, and the third group took both
                                    Prozac and curcumin.
                                </dt>
                                <dt>
                                    After 6 weeks, curcumin had led to improvements similar to those
                                    of Prozac. The group that took both Prozac and curcumin fared best.
                                    According to this small study, curcumin is as effective as an
                                    antidepressant.
                                </dt>
                                <dt>
                                    Depression is also linked to reduced levels of BDNF and a shrinking
                                    hippocampus, a brain area with a role in learning and memory.
                                    Curcumin can help boost BDNF levels, potentially reversing some of
                                    these changes.
                                </dt>
                                <dt>
                                    There's also some evidence that curcumin can boost the brain
                                    neurotransmitters serotonin and dopamine.
                                </dt>
                            </li>
                            <li>
                                <h3>Curcumin may help delay aging and fight age-related
                                    chronic diseases:
                                </h3>
                                <dt>
                                    If curcumin can really help prevent heart disease, cancer, and
                                    Alzheimer's, it may have benefits for longevity as well.
                                    This suggests that curcumin may have potential as an anti-aging
                                    supplement.
                                </dt>
                                <dt>
                                    Given that oxidation and inflammation are believed to play a
                                    role in aging, curcumin may have effects that go way beyond just
                                    preventing disease.
                                </dt>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Turmeric_Benefits;