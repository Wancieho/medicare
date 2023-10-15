import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Chamomile_Benefits() {
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
                        <h2>What are the potential health benefits of Chamomile?</h2>
                        <p>
                            As Chamomile is renowned for its diverse health benefits: SLeep,
                            Digestive aid, and anti-infammatory and more below which
                            are supported by research:
                        </p>
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
                    </div>
                </div>
                <div className="content-section2">
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
                                anticancer claims.
                            </dt>
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
                            <dt>
                                This could be due to its anti-inflammatory, anti-allergy, and
                                antimicrobial properties.
                                While chamomile tea may reduce inflammation, cosmetic options include
                                lotions and soaps. However, people should do a patch test before
                                using on a wider area to check first for adverse effects.
                            </dt>
                        </li>
                    </ol>
                </div>
            </div>
        </>
    )
}

export default Chamomile_Benefits;