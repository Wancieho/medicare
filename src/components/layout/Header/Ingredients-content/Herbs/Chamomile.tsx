import "../../../../../App.css"
import Ingredient from "../Ingredient";
import IngredientNameHeading from "../Ingredient-heading";
// import Ingredient from "../Ingredient"
// import IngredientNameHeading from "../Ingredient-heading"


function Chamomile_Overview() {
    return (
        <>
            <div className="flex-content">
                <Ingredient ingredientName="Chamomile"
                    familyName="Asteraceae" origin="Europe and western Asia"
                    geoLocation="Europe and western Asia" />

                <div className="content-wrapper">
                    <h2>What is Chamomile ?</h2>
                    <p className="paragraph-content">
                        Chamomile is a plant which is used as a herb for medicinal tea purposes.
                        Its related names: Chamaemelum nobile(Roman chamomile), Matricaria
                        recutita(German chamomile), belong to the Asteraceae family of flowering
                        plants that include daisies and sunflowers, but the most common variety
                        is the German Chamomile which is native to Europe and western Asia but
                        has also been found around the globe over the years.
                    </p>

                </div>
            </div>

            <div id="paragraph-content1">
                <p className="paragraph-content">
                    Given the sun-like appearance of chamomile blossoms, which are typically
                    yellow in the middle with ray-like white blossoms radiating outward, it
                    should come as no surprise that the ancient Egyptians used it in
                    offerings to the sun god Ra and burned it as incense according to
                    Chamomile: Medicinal, Biochemical, and Agricultural Aspects.
                    During the Middle Ages, Europeans used it as an air freshener and a
                    cure-all for health ailments
                </p>
                <h2>German Chamomile versus Roman Chamomile:</h2>
                <p className="paragraph-content">
                    As a result they aren't just different species of flowering asteraceae, but
                    they also have similar repuations for medicinal powers:
                    <span className="span-em">
                        "German Chamomile is said to have a more sweet straw-like taste and Roman
                        more light fresh apple type frgrance"
                    </span>
                    German chamomile, which is the more widely used of the two, is an annual herb
                    also known as Hungarian chmomile.
                </p>
                <p className="paragraph-content">
                    Also the taller type of chamomile, the German variety reaches up to 3 feet tall and
                    grows in a bush-like shrub. It has sparse, fernlike green leaves and silver-white
                    petals blooming from a hollow receptacle. Its essential oil is dark blue, according
                    to Herbal Medicine: Biomolecular and Clinical Aspects, and it's thought to have
                    anti-inflammatory, anti-spasmodic, and anti-microbial properties, in part due to the
                    chemical compounds bisabolol and azulene.
                </p>
                <h2>What are the potential health benefits of Chamomile?</h2>
                <p className="paragraph-content">
                    As Chamomile is renowned for its diverse health benefits: SLeep, Digestive aid, and
                    anti-infammatory and more below which are supported by research:
                    <ul>
                        <li>
                            It helps you relax:
                            <dt>
                                A cup of of chamomile tea is well known for its
                                soothing properties, and there may be something to those tales.
                                According to <a target="_blank" href="https://onlinelibrary.wiley.com/doi/10.1002/ptr.6349">
                                    PhytoTherapy research on Chamomile</a>, chamomile can help help with your
                                sleeping quality, anxiety disorders in humans.
                            </dt>
                        </li>
                        <li>
                            It can soothe gastrointestinal discomfort:
                            <dt>
                                Some animal studies have shown that
                                chamomile has antidiarrheal effects. A similar effect was observed in humans:
                                when the flower's extract was combined with myrrh and coffee charcoal, it was
                                found to effectively diminish irritable bowel syndrome (IBS) symptoms in humans
                                according to past research in <a target="_blank" href="https://pubmed.ncbi.nlm.nih.gov/24463157/">
                                    BMJ Open Gastroenterology</a>.
                            </dt>
                        </li>
                        <li>
                            It's a good adjunct therapy for the common cold:
                            <dt>
                                While evidence is limited, some past research indicates that a cup or two of chamomile
                                tea is a safe and potentially beneficial as supportive therapy for the common cold.
                            </dt>
                        </li>
                        <li>
                            It may help regulate blood sugar:
                            <dt>A study published in 2018 in Nature found its active polyphenols to be promising
                                agents for regulating carbohydrate digestion and sugar absorption at the site
                                of the gastrointestinal tract. A past small study found it to benefit glycemic
                                control in patients with type 2 diabetes.
                            </dt>
                        </li>
                        <li>
                            It can help fight gingivitis.
                            <dt>
                                Research found that chamomile's antimicrobial and anti-inflammatory properties,
                                combined with pomegranate, rivaled an antibacterial mouth rinse in effectiveness.
                            </dt>
                        </li>
                    </ul>
                </p>
                <h2>How Is Chamomile Cooked or Prepared?</h2>
                <p className="paragraph-content">
                    To prepare chamomile tea:
                    <ol>
                        <li>Infuse 1 teaspoon of chamomile in 8 ounces of water.</li>
                        <li>Boil or slightly  heat under a boil at 200 degrees Fahrenheit.</li>
                        <li>Steep for two to five minutes.</li>
                        <li>Depending on how intense of flavor and strength you want, and then enjoy.</li>
                    </ol>
                </p>
                <h2>What Are Some Other Uses of Chamomile?</h2>
                <p className="paragraph-content">
                    Although chamomile is most commonly used in tea form, there are supplements
                    the majority of which are marketed as sleep aids too.

                    <h3>Benefits of using Chamomile tea in your daily life(first consult with your doctor):</h3>
                    <ol>
                        <li>Menstrual symptoms:
                            <dt>In 2019, some researchers concluded that chamomile's anti-inflammatory,
                                antispasmodic, sedative, and anti-anxiety properties might help relieve
                                anxiety and discomfort due to premenstrual syndrome (PMS).</dt>
                        </li>
                        <li>Diabetes and blood sugar:
                            <dt>Some studies have found that chamomile tea can lower blood sugar in
                                people with diabetes. Research suggests that chamomile might improve
                                glycemic and lipid profiles and oxidative stress levels in people with
                                diabetes mellitus and reduce the risk of diabetes-related complications.
                            </dt>
                            <dt>
                                The results do not show that chamomile is a viable substitute for
                                diabetes medications, but it may be a helpful supplement to existing
                                treatments.
                            </dt>
                        </li>
                        <li>Osteoporosis:
                            <dt>Osteoporosis is the progressive loss of bone density. This loss
                                increases the risk of broken bones and stooped posture. A study
                                published in 2022 found that chamomile helped prevent osteoporosis
                                in rats due to steroid treatment. The antioxidant effects of the
                                flavonoids in chamomile could help prevent osteoporosis by reducing
                                oxidative stress.
                            </dt>
                        </li>
                        <li>Inflammation:
                            <dt>Inflammation is an immune system reaction to fight infection. Chamomile
                                tea contains compounds that may reduce inflammation. Long-term
                                inflammation is linked to various health problems, including hemorrhoids,
                                gastrointestinal pain, arthritis, autoimmune disorders, obesity, and
                                depression.
                            </dt>
                        </li>
                        <li>Cancer:
                            <dt>Some studies suggest that chamomile tea may target cancer cells or even
                                prevent those cells from developing in the first place. Results from
                                laboratory tests have suggested that compounds in chamomile may help
                                prevent the growth of glioma, liver cancer, cervical cancer, and
                                leukemia. However, more research is needed to prove chamomile's
                                anticancer claims.</dt>
                        </li>
                        <li>Sleep and relaxation:
                            <dt>Chamomile tea may help people relax and fall asleep. A 2019 review
                                noted that, after 2-4 weeks of treatment with chamomile, people with
                                generalized anxiety disorder saw an improvement in symptoms. Treatment
                                with chamomile may also improve sleep quality.
                                However, there was no evidence that chamomile can reduce symptoms when
                                a person is in an anxious situation. Also, it does not appear to
                                prevent insomnia.
                            </dt>
                        </li>
                        <li>Cold symptoms:
                            <dt>Anecdotal evidence and some studies suggest that inhaling steam with
                                chamomile extract can relieve some of the symptoms of the common cold.
                                However, this benefit is not proven yet.
                            </dt>
                        </li>
                        <li>Mild skin conditions:
                            <dt>Some research indicates that topical products containing chamomile may
                                help:
                            </dt>

                            <ul>
                                <li>treat acne</li>
                                <li>repair sensitive skin</li>
                                <li>reduce skin dehydration</li>


                            </ul>
                            This could be due to its anti-inflammatory, anti-allergy, and
                            antimicrobial properties.
                            While chamomile tea may reduce inflammation, cosmetic options include
                            lotions and soaps. However, people should do a patch test before
                            using on a wider area to check first for adverse effects.

                        </li>
                    </ol>
                </p>
                <p className="paragraph-content">
                    The following groups should avoid chamomile unless advised otherwise by a doctor:
                    <ul>
                        <li>People with a history of severe allergies:
                            <dt>
                                Chamomile may not be safe for people who have a known allergy to ragwort, daisy,
                                chrysanthemum, or marigolds, which are related
                                plants.
                                It may cause a severe reaction known as anaphylaxis.
                            </dt>
                        </li>
                        <li>
                            People who have previously had an allergic reaction, even mild, to
                            chamomile products:
                            <dt>
                                They should avoid chamomile, as allergic reactions can get worse
                                with time.
                            </dt>
                        </li>
                        <li>Drug interactions:
                            <dt>Chamomile can interact with blood-thinning drugs, such as warfarin.
                                A person should check with a doctor before increasing their intake of
                                chamomile, especially if they have an existing health issue.
                            </dt>
                        </li>
                        <li>Infants and very young children:
                            <dt>Chamomile tea, similar to honey and some other natural
                                products, may contain botulism spores. Most healthy adults can fight off a botulism
                                infection, but infants may not be able to. Many doctors recommend infants and young
                                children avoid honey and chamomile products.
                                It is not safe to use chamomile as a substitute for proven medical treatments. If someone
                                takes any medications, they should ask their doctor about potential interactions with
                                chamomile tea.
                            </dt>
                        </li>
                    </ul>
                </p>
                <p className="paragraph-content">
                    Chamomile tea has been used in natural medicine for thousands of years, often with
                    encouraging results. For now, however, it remains a supplement and not a medication.
                    People interested in trying chamomile tea should use it as a supplement and not a
                    replacement for their usual medication regimen. In regular doses, such as 1-2 cups a
                    day, it is possible to see incremental health improvements.
                </p>
                <p className="paragraph-content">
                    It's important to remember that
                    supplements in general are not regulated by the U.S. Food and Drug Administration
                    (FDA), so if you're interested in trying one, look for labels that reference third
                    party testing and clinical studies. Bonus if they have a USP-verified seal of
                    approval.
                </p>
                <p className="paragraph-content">
                    In addition to supplements, chamomile essential oils are used in aromatherapy
                    (via inhaled steam or vapor) to improve mood and relieve stress, per the National
                    Cancer Institute. Research has found that chamomile can relax spasming muscles,
                    possibly because of the herb's abundance of anti-inflammatory flavonoids.

                </p>
                <p className="paragraph-content">
                    Chamomile is becoming increasingly common in cosmetics and skincare products as a
                    soothing agent, especially in sunburn relief sprays and acne scar treatments.
                    As long as you aren't allergic to chamomile and aren't taking other medication,
                    you should be safe to indulge with your doctor's okay.
                </p>
            </div >
        </>
    )
}

function SideAffects_Use() {
    return (
        <>
            <div className="flex-content">
                <Ingredient ingredientName="Chamomile"
                    familyName="Asteraceae" origin="Europe and western Asia"
                    geoLocation="Europe and western Asia" />

                <div className="content-wrapper">
                    <h2>Are there any side effects or health risks for Chamomile?</h2>

                    <p className="paragraph-content">
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
            <div id="paragraph-content1">
                <p className="paragraph-content">Chamomile can also trigger allergic contact
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
        </>
    )
}

function GrowIngredient() {
    return (
        <>
            <div className="flex-content">
                <Ingredient ingredientName="Chamomile"
                    familyName="Asteraceae" origin="Europe and western Asia"
                    geoLocation="Europe and western Asia" />

                <div className="content-wrapper">
                    <h2>How to Grow Chamomile and store the herb:</h2>
                    <p className="paragraph-content">
                        If you decide to grow your own chamomile, follow the below steps given or view <a
                            href="https://hort.extension.wisc.edu/articles/chamomile-matricaria-chamomilla/">
                            UWHD</a>.
                        <ul>
                            <li>
                                Grow the plant in full sunlight. Pick the flowers when they're near full bloom,
                                or when they're full and lay flat around the center of the flower.
                            </li>
                            <li>
                                Pop the flower head off with your fingers, and leave behind any stems.
                            </li>
                            <li>
                                Spread the flowers out on a surface in a warm and well-ventilated
                                place away from sunlight to dry out completely (or put them in a
                                food dehydrator on the lowest heat setting for 12 to 24 hours).
                            </li>
                        </ul>
                        Store them in a sealed, airtight container away from sunlight, at room temperature for up to a year.
                    </p>
                </div>
            </div>
            <div id="paragraph-content2">
            </div>
        </>
    )
}

function Chamomile() {
    return (
        <>

            <IngredientNameHeading ingredientName="Chamomile" />
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
                {/* Components will be rendered here using react-router-dom <Link> components*/}
                <Chamomile_Overview />
                <SideAffects_Use />
                <GrowIngredient />
                {/* <Interactions />
                <Dosage /> */}
            </div>
        </>
    )
}

export default Chamomile;