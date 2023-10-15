import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";


function Ginseng_Benefits() {
    return (
        <>
            <IngredientNameHeading ingredientName="Ginseng" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Ginseng_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Ginseng_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Ginseng_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Ginseng_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Ginseng_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Ginseng">Grow Ginseng</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Ginseng"
                        familyName="Araliaceae" origin="Shangdang China"
                        geoLocation="Asia, Japan and Canada" />
                    <div className="content-wrapper">
                        <h2>What are the benefits of using Ginseng?</h2>
                        <p>
                            Ginseng is an herb that is rich in antioxidants. It may offer benefits
                            for brain health, immune function, blood sugar control, and more.
                            Ginseng has also been used in traditional Chinese medicine for centuries.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <h2>Health benefits include:</h2>
                    <h3>Contains antioxidants that reduces inflammation:</h3>
                    <p>
                        Ginseng has beneficial antioxidant and anti-inflammatory properties.
                        Some test-tube studies have shown that ginseng extracts and ginsenoside c
                        ompounds could inhibit inflammation and reduce oxidative damage to cells,
                        which can contribute to chronic disease.
                    </p>
                    <p>
                        The results are promising in humans, as well.
                        One study in 12 active males found that short-term supplementation with
                        American ginseng extract reduced exercise-induced muscle damage and decreased
                        markers of inflammation compared to a placebo.
                    </p>
                    <p>
                        A larger study in 2014 followed 71 postmenopausal females who took 3 grams(g)
                        of red ginseng or a placebo daily for 12 weeks. Antioxidant activity and
                        oxidative stress markers were then measured. red ginseng may help reduce
                        oxidative stress by increasing antioxidant enzyme activities.
                    </p>
                    <h3>May benefit brain function:</h3>
                    <p>
                        Ginseng could help improve brain functions like memory, behavior, and mood.
                        Some test-tube and animal studies show that components in ginseng, like
                        ginsenosides and compound K, could protect the brain against damage caused
                        by free radicals.

                        Interestingly, one study in 6,422 older adults found that regular
                        consumption of ginseng for at least 5 years was associated with improved
                        cognitive function later in life.

                        Another small study showed that taking 200 milligrams (mg) of American
                        ginseng significantly improved working memory after 3 hours, compared to a
                        placebo.

                        According to one review, ginseng could also help ease stress and may
                        offer benefits for depression and anxiety.
                    </p>
                    <h3>Could improve erectile dysfunction:</h3>
                    <p>
                        Some research suggests that ginseng may be a useful alternative for the
                        treatment of erectile dysfunction (ED).

                        According to some older research, certain compounds found in ginseng may
                        protect against oxidative stress in the blood vessels and tissues of the
                        penis to help restore normal function.

                        Additionally, studies have shown that ginseng may promote the production
                        of nitric oxide, a compound that improves muscle relaxation in the male
                        genitals and increases blood circulation.

                        Still, research on the effects of ginseng on ED has turned up mixed
                        results and more high quality studies are needed.

                        In fact, one review of nine studies found that ginseng could improve
                        self-reported ability to have intercourse in males.
                    </p>
                    <h3>May boost the immune system:</h3>
                    <p>
                        According to one review, ginseng possesses potent anti-bacterial,
                        anti-fungal, and anti-viral properties and may enhance the function of
                        the immune system.
                    </p>
                    <p>
                        Interestingly, one animal study found that black red ginseng extract
                        increased the number of immune cells and enhanced antioxidant levels
                        in the liver.
                    </p>
                    <p>
                        Similarly, another study in 100 people showed that taking 2 g of Korean
                        red ginseng per day for 8 weeks significantly increased levels of
                        immune cells compared to a placebo.
                    </p>
                    <h3>May have potential benefits against cancer:</h3>
                    <p>
                        Ginseng may be helpful in reducing the risk of certain cancers.
                        Ginsenosides in this herb have been shown to help reduce inflammation and
                        provide antioxidant protection.

                        The cell cycle is the process by which cells normally grow and divide.
                        Ginsenosides could benefit this cycle by preventing abnormal cell
                        production and growth.

                        A review of several studies concluded that people who take ginseng may
                        have a a 16% lower risk of developing cancer. Ginseng may also help
                        improve the health of people undergoing chemotherapy and could reduce
                        side effects and enhance the effect of some cancer treatments
                    </p>
                    <h3>May fight tiredness and increase energy levels:</h3>
                    <p>
                        Ginseng has been shown to help ease fatigue and increase energy levels.

                        Various animal studies have linked some components in ginseng, like
                        polysaccharides and oligopeptides, with lower oxidative stress and higher
                        energy production in cells, which could help decrease fatigue.

                        One review of 10 studies concluded that ginseng could significantly
                        improve symptoms of chronic fatigue syndrome compared to a placebo,
                        even after just 15 days.

                        Another review showed that taking American or Asian ginseng could
                        decrease symptoms of cancer-related fatigue when taken in doses of
                        2,000 mg or 3,000 mg per day, respectively.
                    </p>
                    <h3>Could lower blood sugar:</h3>
                    <p>
                        Ginseng seems to be beneficial in the control of blood sugar levels
                        in people both with and without diabetes.
                    </p>
                    <p>
                        American and Asian ginseng have been shown to improve pancreatic
                        cell function, boost insulin production, and enhance the uptake of
                        blood sugar in tissues.
                    </p>
                    <p>
                        Moreover, studies show that ginseng extracts help by providing
                        antioxidant protection that can help reduce free radicals in the
                        cells of those with diabetes.
                    </p>
                    <p>
                        One review of eight studies found that ginseng supplementation
                        could decrease fasting blood sugar levels and improve insulin
                        sensitivity in people with type 2 diabetes
                    </p>
                    <p>
                        Another 8-week study showed that taking 3 g per day of American ginseng
                        significantly reduced fasting blood sugar levels and improved hemoglobin
                        A1c, a marker of long-term blood sugar control, compared to a placebo in
                        people with type 2 diabetes.
                    </p>
                    <p>
                        It seems that fermented red ginseng could be even more effective at
                        blood sugar control. Fermented ginseng is produced with the help of live
                        bacteria that transform the ginsenosides into a more easily absorbed and
                        potent form.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Ginseng_Benefits;