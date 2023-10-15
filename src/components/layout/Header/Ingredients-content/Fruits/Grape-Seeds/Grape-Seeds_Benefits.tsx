import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Grape_Seeds_Benefits() {
    return (
        <>
            <IngredientNameHeading ingredientName="Grape Seeds" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Grape-Seeds_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Grape-Seeds_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Grape-Seeds_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Grape-Seeds_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Grape-Seeds_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Grape-Seeds">Grow Grape-Seeds</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Grape Seeds"
                        familyName="Vitaceae" origin="Native to the Mediterranean 
                    region, central Europe and southwest Asia"
                        geoLocation="Mediterranean 
                    region, central Europe and southwest Asia" />
                    <div className="content-wrapper">
                        <h2>What are the benefits of using Grape Seeds?</h2>
                        <p>
                            A study of healthy volunteers found that taking grape seed as an extract substantially
                            increased blood levels of antioxidants. Antioxidants are substances that destroy
                            free radicals, which are harmful compounds in the body that damage DNA (genetic
                            material) and even cause cell death. Scientists believe free radicals contribute
                            to aging, as well as the development of a number of health problems, including
                            heart disease and cancer.
                        </p>
                        <p>
                            But grapes, or the chemicals within them, especially oligomeric proanthocyanidin
                            complexes (OPCs), have been touted as powerful antioxidants. Some people believe
                            they could help treat a number of conditions, from heart disease to cancer to
                            aging skin, although scientific evidence is mostly lacking for those conditions.
                            However, there is good evidence that grape seed extract can help treat chronic
                            venous insufficiency and edema.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <p>
                        Some studies, mostly in animals, support these uses. Flavonoids found in red wine may help to
                        protect the heart by lowering LDL ("bad") cholesterol. The so called "French paradox" is the
                        belief that drinking wine protects people living in France from developing heart disease at the
                        high rates seen in people living in the United States. So far, however, there is no clear evidence
                        that taking grape seed extract helps reduce the risk of heart disease. Some researchers speculate
                        that the alcohol in the wine, not the flavonoids, could be responsible for any healthful effects.
                    </p>
                    <h2>Health Benefits:</h2>
                    <div className="ingredient-benefits">
                        <ol>
                            <li>
                                <h3>Can reduce blood pressure:</h3>
                                <dt>
                                    Several studies have researched the effects of GSE on high blood pressure.
                                    A review of 16 studies in 810 people with high blood pressure or an elevated
                                    risk of it found that taking 100-2000 mg of GSE daily significantly reduced systolic and
                                    diastolic blood pressure (the top and bottom number) by an average of 6.08 mmHg and
                                    2.8 mmHg, respectively. Those under the age of 50 with obesity or a metabolic disorder
                                    showed the greatest improvements. The most promising results came from lower
                                    doses of 100-800 mg daily for 8-16 weeks, rather than a single dose of 800 mg or more.
                                </dt>
                            </li>
                            <li>
                                <h3>Can improve blood flow:</h3>
                                <dt>
                                    Some studies suggest that GSE may improve blood flow. In an 8-week study in 17
                                    healthy postmenopausal women, taking 400 mg of GSE had blood-thinning effects,
                                    potentially reducing the risk of blood clots. An additional study in 8 healthy young
                                    women assessed the effects of a single 400-mg dose of proanthocyanidin from GSE
                                    immediately followed by 6 hours of sitting. It was shown to reduce leg swelling
                                    and edema by 70%, compared with not taking GSE.
                                </dt>
                            </li>
                            <li>
                                <h3>Could Reduce Oxidative Damage:</h3>
                                <p>
                                    An elevated blood level of LDL (bad) cholesterol is a known risk factor for heart disease.
                                    The oxidation of LDL cholesterol significantly increases this risk and plays a
                                    central role in atherosclerosis, or the buildup of fatty plaque in your arteries. GSE
                                    supplements have been found to reduce LDL oxidation triggered by high fat
                                    diets in several animal studies.
                                </p>
                                <p>
                                    Some research in humans shows similar results. When 8 healthy people ate a high fat
                                    meal, taking 300 mg of GSE inhibited the oxidation of fats in the blood, compared
                                    with a 150% increase seen in those who did not take GSE.
                                </p>
                                <p>
                                    In another study, 61 healthy adults saw a 13.9% reduction in oxidized LDL after
                                    taking 400 mg of GSE. However, a similar study was unable to replicate these results.
                                    Additionally, a study in 87 people undergoing heart surgery found that taking
                                    400 mg of GSE the day before surgery significantly reduced oxidative stress.
                                    Therefore, GSE likely protected against further heart damage.
                                </p>
                            </li>
                            <li>
                                <h3>May Improve Collagen Levels and Bone Strength:</h3>
                                <p>
                                    Increasing flavonoid consumption may improve collagen synthesis and
                                    bone formation. As a rich source of flavonoids, GSE may thus help increase
                                    your bone density and strength. Animal studies have found that adding GSE
                                    to either a low calcium, standard, or high calcium diet can increase bone
                                    density, mineral content, and bone strength.
                                </p>
                                <p>
                                    Rheumatoid arthritis is an autoimmune condition that results in severe
                                    inflammation and the destruction of bone and joints. Animal studies have
                                    shown that GSE may suppress bone destruction in inflammatory autoimmune arthritis.
                                </p>
                                <p>
                                    GSE also significantly reduced pain, bony spurs, and joint damage in
                                    osteoarthritic mice, improving collagen levels and reducing cartilage loss.
                                </p>
                            </li>
                            <li>
                                <h3>Supports Your Brain As it Ages:</h3>
                                <p>
                                    Flavonoids' combination of antioxidant and anti-inflammatory properties are
                                    thought to delay or reduce the onset of neurodegenerative diseases like
                                    Alzheimer's disease.
                                </p>
                                <p>
                                    One of the components of GSE is gallic acid, which animal
                                    and lab studies have shown can inhibit the formation of fibrils by beta-amyloid peptides.
                                    Clusters of beta-amyloid proteins in the brain are characteristic of Alzheimer's disease.
                                </p>
                                <p>
                                    Animal studies have found that GSE may prevent memory loss, improve cognitive
                                    status and brain antioxidant levels, and reduce brain lesions and amyloid clusters.
                                    One 12-week study in 111 healthy older adults found that taking 150 mg of GSE daily improved attention, language, and both immediate and delayed memory.
                                </p>
                            </li>
                            <li>
                                <h3>Can Improve Kidney Function:</h3>
                                <p>
                                    Your kidneys are particularly susceptible to oxidative damage, which is often
                                    irreversible. Animal studies have shown that GSE may reduce kidney damage and
                                    improve function by reducing oxidative stress and inflammatory damage.
                                </p>
                                <p>
                                    In one study, 23 people diagnosed with chronic renal failure were given 2 grams
                                    of GSE daily for 6 months and then compared with a placebo group. Urinary
                                    protein decreased by 3% and kidney filtration improved by 9%.
                                </p>
                                <p>
                                    This means that the kidneys of those in the test group were much better able to
                                    filter urine than the kidneys of those in the placebo group.
                                </p>
                            </li>
                            <li>
                                <h3>Can Inhibit Infectious Growth:</h3>
                                <p>
                                    GSE displays promising antibacterial and antifungal properties. Studies have shown
                                    that GSE inhibits the growth of common foodborne bacteria, including Campylobacter
                                    and E. coli, both of which are often responsible for severe food poisoning and
                                    abdominal upset.

                                    In lab studies, GSE has been found to inhibit 43 strains of antibiotic-resistant
                                    Staphylococcus aureus bacteria.
                                </p>
                                <p>
                                    Candida is a common yeast-like fungus that can sometimes result in candida overgrowth,
                                    or thrush. GSE is widely used in traditional medicine as a remedy for candida.
                                    In one study, mice with vaginal candidiasis were given an intravaginal GSE solution
                                    every 2 days for 8 days. The infection was inhibited after 5 days and gone after 8.
                                    Unfortunately, human studies on GSE's ability to help treat infections are still lacking.
                                </p>
                            </li>
                            <li>
                                <h3>May Reduce Cancer Risk:</h3>
                                <p>
                                    The causes of cancer are complex, though DNA damage is a central characteristic.
                                    A high intake of antioxidants, such as flavonoids and proanthocyanidins, are
                                    associated with a reduced risk of various cancers. The antioxidant activity of
                                    GSE has shown potential to inhibit human breast,
                                    lung, gastric, oral squamous cell, liver, prostate, and pancreatic cell lines
                                    in lab settings.
                                </p>
                                <p>
                                    In animal studies, GSE has been shown to enhance the effect of different types
                                    of chemotherapy. GSE appears to protect against oxidative stress and liver toxicity
                                    while targeting chemotherapy action on the cancerous cells. A review of 41 animal
                                    studies found that either GSE or proanthocyanidins reduced
                                    cancer-induced toxicity and damage in all but one of the studies.
                                </p>
                                <p>
                                    Keep in mind that the anticancer and chemopreventive potential of GSE and its
                                    proanthocyanidins may not be directly transferable to people with cancer. More
                                    studies in humans are needed.
                                </p>
                            </li>
                            <li>
                                <h3>May Protect Your Liver:</h3>
                                <p>
                                    Your liver plays an important role in detoxifying harmful substances introduced
                                    to your body through drugs, viral infections, pollutants, alcohol, and more.
                                    GSE appears to have a protective effect on your liver.
                                </p>
                                <p>
                                    In test-tube studies, GSE reduced inflammation, recycled antioxidants, and
                                    protected against free radical damage during toxin exposure. The liver
                                    enzyme alanine aminotransferase (ALT) is a key indicator of liver toxicity,
                                    meaning that its levels rise when the liver has sustained damage.
                                </p>
                                <p>
                                    In one study, 15 people with non-alcoholic fatty liver disease and subsequent
                                    high ALT levels were given GSE for 3 months. Liver enzymes were monitored monthly,
                                    and results were compared with taking 2 grams of vitamin C per day.
                                    After 3 months, the GSE group experienced a 46% reduction in ALT,
                                    while the vitamin C group showed little change.
                                </p>
                            </li>
                            <li>
                                <h3>Enhances Wound Healing and Appearance:</h3>
                                <p>
                                    Several animal studies have found GSE can aid wound healing. Human
                                    studies show promise as well. In one such study, 35 healthy adults
                                    who had undergone minor surgery were given either a 2% GSE cream
                                    or placebo. Those using the GSE cream experienced full wound healing
                                    after 8 days, while the placebo group took 14 days to heal.
                                </p>
                                <p>
                                    These results are most likely due to high levels of proanthocyanidins
                                    in GSE triggering the release of growth factors in the skin. In another
                                    8-week study in 110 healthy young men, a 2% GSE cream improved skin
                                    appearance, elasticity, and sebum content, which can help reduce the
                                    signs of aging.
                                </p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Grape_Seeds_Benefits;