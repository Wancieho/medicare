import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Lemon_Balm_Benefits() {
    return (
        <>
            <IngredientNameHeading ingredientName="Lemon-Balm" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Lemon-Balm_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Lemon-Balm_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Lemon-Balm_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Lemon-Balm_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Lemon-Balm_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Lemon-Balm">Grow Lemon-Balm</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Lemon-Balm"
                        familyName="Lamiaceae" origin="South-central Europe, the Mediterranean
                    Basin, Iran, and Central Asia"
                        geoLocation="south-central Europe, the Mediterranean
                    Basin, Iran, and Central Asia" />
                    <div className="content-wrapper">
                        <h2>What are the benefits of using the Lemon-Balm plant?</h2>
                        <p>
                            Lemon balm has traditionally been used to <span className="span-em">improve</span> mood and cognitive
                            function, but the potential benefits do not stop here...
                        </p>
                        <p>
                            As a matter of fact it helps
                        </p>
                        <div className="ingredient-benefits-a">
                            <ul>
                                <li>#1 Relieve stress</li>
                                <li>#2 Reduce anxiety</li>
                                <li>#3 Boost cognitive function</li>
                                <li>#4 Ease Insomnia and other sleep disorders</li>
                                <li>#5 Treat cold sores</li>
                                <li>#6 Relieve Indigestion</li>
                            </ul>
                            <ul>
                                <li>#7 Treat Nuasea</li>
                                <li>#8 Minimize menstrual cramps</li>
                                <li>#9 Ease headache pain</li>
                                <li>#10 Lessen toothache pain</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="content-section2">
                    <h2>The Benefits of using Lemon-Balm in detail:</h2>
                    <h3>#1 Relieve stress</h3>
                    <p>
                        Lemon balm is said to soothe symptoms of stress, help you to relax,
                        and boost your mood.</p>
                    <p>
                        A <a href="https://pubmed.ncbi.nlm.nih.gov/15272110/"
                            target="_blank">2004 study</a> found that taking lemon balm eased the
                        negative mood effects of laboratory-induced psychological stress.
                        Participants who took lemon balm self-reported an increased sense of
                        calmness and reduced feelings of alertness. Although this was a
                        double-blind, placebo-controlled study, it had a small sample size of eighteen
                        people. Further research is needed to elaborate on these findings.
                    </p>
                    <p>
                        How to use Take 300 milligrams (mg) of lemon balm in capsule form
                        twice a day. You can take a single dose of 600 mg in acute episodes of
                        stress.
                    </p>
                    <h3>#2 Reduce anxiety</h3>
                    <p>
                        Lemon balm may also be used to help reduce symptoms of anxiety, such as
                        nervousness and excitability. Research published in 2014 examined the mood
                        and cognitive effects of foods containing lemon balm. The supplement was
                        mixed into a beverage and into yogurt along with either natural or artificial
                        sweeteners. Participants in both groups reported positive effects on various
                        aspects of mood, including reduced levels of anxiety. Although this is promising,
                        more research is needed to truly determine its efficacy.
                    </p>
                    <p>
                        How to use: Take 300 to 600 mg of lemon balm three times per day. You can take
                        a higher dose in acute episodes of anxiety.
                    </p>
                    <h3>#3 Boost cognitive function</h3>
                    <p>
                        The same 2014 study also looked at the effects of lemon balm in improving
                        cognitive function. Participants were asked to do cognitive tasks involving
                        memory, mathematics, and concentration. The results of these computerized
                        tasks suggest that participants who ingested lemon balm performed better than
                        those who did not. Although these participants did experience an increase
                        in levels of alertness and performance, it is still possible for fatigue to
                        set in over time. Combining lemon balm with food also affects its absorption
                        rate, which may have had an impact on its efficacy, however, additional research
                        is needed.
                    </p>
                    <p>
                        How to use: Take 300 to 600 mg of lemon balm three times a day.
                    </p>
                    <h3>#4 Ease Insomnia and other sleep disorders</h3>
                    <p>
                        Combining lemon balm with valerian may help relieve restlessness and sleep disorders
                        such as insomnia. Researchers in one 2006 study found that children who took a
                        combined dose experienced a 70 to 80 percent improvement in symptoms. Both the
                        researchers and parents regarded lemon balm as being a good or very good treatment.
                        Still, more research is needed to validate these findings.
                    </p>
                    <p>
                        How to use: Drink a cup of tea brewed with valerian and lemon balm before bed.
                        You can find loose-leaf or bagged options at your local grocery store or online.
                    </p>
                    <h3>#5 Treat cold sores</h3>
                    <p>
                        You can even apply lemon balm topically at the first sign of a cold sore.
                        Participants in a 1999 study applied either a lemon balm or placebo cream on the
                        affected area four times per day for five days. The researchers found that the
                        participants who used the lemon balm cream experienced fewer symptoms and healed
                        faster than those who did not. The researchers also suggested that using lemon balm
                        cream may help prolong the intervals between cold sore outbreaks. Further studies are
                        needed to expand on these findings.
                    </p>
                    <p>
                        How to use: Apply a lemon balm cream to the affected area several times per day. Be
                        sure to patch test the cream on the inside of your forearm before applying it to the
                        cold sore. If you do not experience any irritation or inflammation within 24 hours,
                        it should be safe to use.
                    </p>
                    <h3>#6 Relieve Indigestion</h3>
                    <p>If you experience frequent abdominal pain and discomfort, lemon balm may have a positive
                        effect on your digestion. A small <a href="https://pubmed.ncbi.nlm.nih.gov/20385075/"
                            target="_blank">study from 2010</a> assessed the effects of a cold dessert
                        containing lemon balm on functional dyspepsia. Participants ate a sorbet, with
                        or without the herb, after a meal. Although both types of desserts lessened the
                        symptoms and their intensity, the dessert containing lemon balm intensified this
                        effect. More research is needed.
                    </p>
                    <p>
                        How to use: Add 1 teaspoon (tsp) of lemon balm powder to a bowl of ice cream or
                        smoothie and enjoy.
                    </p>
                    <h3>#7 Treat Nuasea</h3>
                    <p>Given its potential impact on your digestive system, lemon balm may also help relieve
                        feelings of nausea. A 2005 review assessing the results of several studies on lemon
                        balm found the herb to be useful in treating gastrointestinal symptoms such as this.
                        Although this is a promising development, it is important to recognize the study
                        limitations. Many of the studies looked at lemon balm used in conjunction with other
                        herbs. Further research is needed to determine the efficacy of lemon balm when used alone.
                    </p>
                    <p>
                        How to use: Drink a cup of lemon balm tea at the first sign of nausea. You can find
                        loose-leaf or bagged options at your local grocery store or online.
                    </p>
                    <h3>#8 Minimize menstrual cramps</h3>
                    <p>There is also research to suggest that lemon balm can be used to relieve menstrual
                        cramps and premenstrual syndrome (PMS).
                        A <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4557408/" target="_blank">
                            2015 study</a> researched the effect of lemon balm in reducing the intensity of
                        cramps in 100 high school girls. The girls took either a lemon balm essence or
                        a placebo for three consecutive menstrual cycles. The intensity of PMS symptoms
                        was analyzed before and one, two, and three months after the trial. The group who
                        took the lemon balm reported a significant reduction in symptoms. Further research
                        is needed to confirm these findings.
                    </p>
                    <p>
                        How to use: Take 1200 mg of lemon balm daily for optimal results. This will allow
                        the herb to get into your system long before it is time for PMS symptoms to appear.
                        Continued use is thought to reduce your symptoms over time.
                    </p>
                    <h3>#9 Ease headache pain</h3>
                    <p>Lemon balm may also be useful in treating headaches, especially if they are happening
                        as a result of stress. Its relaxing properties can help you to unwind, release tension,
                        and relax your muscles. It's also though that ingesting the herb can help to open up
                        and relax tight blood vessels, which can contribute to headaches.
                    </p>
                    <p>
                        How to use: If you experience recurrent headaches, you may find it beneficial take 300 to
                        600 mg of lemon balm up to three times per day. This will allow the herb to get into your
                        system well before a headache develops. You can take a higher dose if you feel a headache
                        developing.
                    </p>
                    <h3>#10 Lessen toothache pain</h3>
                    <p>
                        Lemon balm's pain-relieving properties may make it an ideal choice for relieving toothache
                        pain. In addition to drawing on its relaxing properties, this home remedy is thought to
                        target inflammation in the body. More research is needed to confirm these findings.

                    </p>
                    <p>
                        How to use: Use a cotton swab to apply lemon balm oil to the affected area as needed. Be
                        sure to select an oil that has already been diluted by a carrier oil, such as jojoba. If
                        you purchase pure lemon balm oil, you should dilute it. Essential oils should not be applied
                        directly to the skin until they are diluted in a carrier oil.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Lemon_Balm_Benefits;