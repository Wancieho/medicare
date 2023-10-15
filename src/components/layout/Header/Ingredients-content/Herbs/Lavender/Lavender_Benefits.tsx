import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Lavender_Benefits() {
    return (
        <>
            <IngredientNameHeading ingredientName="Lavender" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Lavender_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Lavender_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Lavender_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Lavender_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Lavender_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Lavender">Grow Lavender</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Lavandula(Lavender)"
                        familyName="LamiaCeae" origin="Europe,northern to eastern Africa, 
                    Mediterranean, southwest Asia, and India"
                        geoLocation="Europe,northern to eastern Africa, 
                    Mediterranean, southwest Asia, and India." />
                    <div className="content-wrapper">
                        <h2>What are the health benefits of using Lavandula(Lavender)?</h2>
                        <p>Lavender may help with some of the following comditions</p>
                        <div className="ingredient-benefits">
                            <ul>
                                <li>Insomnia</li>
                                <li>Anxiety</li>
                                <li>Hair loss</li>
                                <li>Headaches</li>
                                <li>Chemotherapy side effects</li>
                            </ul>
                            <ul>
                                <li>Acne</li>
                                <li>Burns</li>
                                <li>Eczema and dry skin</li>
                                <li>Wound healing</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="content-section2">
                    <div className="ingredient-benefits">
                        <ul>
                            <li><h3>Insomnia:</h3>
                                <dt>
                                    During early times, lavender was recommended for people suffering
                                    from insomnia or other sleep disorders. People stuffed their
                                    pillows with lavender flowers to help them fall asleep and get
                                    a better night's rest.
                                </dt>
                                <dt>
                                    Today, research suggests that breathing in lavender's aroma could
                                    improve sleep quality. A systematic review of 15 studies from 2014
                                    found that inhaling essential oils, including lavender, had positive
                                    effects in people with mild sleep disturbances. Numerous smaller
                                    studies have found additional benefits of lavender for sleep issues.
                                </dt>
                                <dt>
                                    Research from 2015 showed that people who used lavender aromatherapy
                                    felt more refreshed upon waking. Another 2010 studyTrusted Source
                                    conducted on people with anxiety disorders revealed that orally
                                    administered lavender oil helped them sleep longer at night.
                                </dt>
                            </li>
                            <li>
                                <h3>Anxiety:</h3>
                                <dt>Lavender may also provide support for people with anxiety. In a
                                    large meta-analysis from 2019Trusted Source, people with anxiety
                                    disorders who took 160-milligram lavender oil capsules experienced
                                    significant decreases in anxiety.
                                </dt>
                                <dt>
                                    Other studies have found similar results. One from 2015 involved 60
                                    people in a coronary intensive care unit. The researchers found that
                                    those treated with lavender essential oil had lower levels of anxiety
                                    and better sleep.
                                </dt>
                                <dt>
                                    Another study from 2010 compared lavender capsules to the anti-anxiety
                                    medication lorazepam, concluding that lavender's effects were comparable
                                    to the prescription drug.
                                </dt>
                            </li>
                            <li>
                                <h3>Hair loss:</h3>
                                <dt>
                                    Topical use of lavender oil might help to treat a disease called
                                    alopecia aerata, which causes a person's hair to fall out in patches.
                                </dt>
                                <dt>According to an older 1998 study of 86 people with alopecia areata,
                                    44 percent experienced improved hair growth after massaging an essential
                                    oil blend of thyme, rosemary, lavender, and cedarwood in a mixture of
                                    carrier oils into their scalp daily for seven months.
                                </dt>
                                <dt>
                                    While this study is promising, it's difficult to say whether the hair
                                    growth could be contributed to lavender specifically.
                                    An animal study from 2021 also found that lavender oil successfully
                                    stimulated hair growth within a 28-day timeframe.
                                </dt>
                            </li>
                            <li>
                                <h3>Headaches and migraine:</h3>
                                <dt>
                                    The calming effects of lavender might be enough to soothe away a
                                    headache or migraine. In one study from 2016, people with migraine
                                    who received 3 months of lavender therapy scored lower on a headache
                                    assessment scale than a control group.
                                </dt>
                                <dt>
                                    In another 2012 study, 47 participants with migraine inhaled lavender
                                    essential oil for 15 minutes. They experienced reduced headache
                                    severity and frequency.
                                </dt>
                            </li>
                            <li>
                                <h3>Chemotherapy side effects:</h3>

                                <dt>
                                    According to the National Cancer InstituteTrusted Source, aromatherapy
                                    can help people with cancer manage the side effects of their treatment.
                                    Lavender aromatherapy may help lower anxiety about cancer treatment
                                    procedures.
                                </dt>
                            </li>

                            <li>
                                <h3>Acne</h3>
                                <dt>
                                    Compared to more aggressive treatments, lavender oil could be a gentle
                                    way to treat acne due to its ability to kill bacteria. In a 2013 study,
                                    a combination of lavender oil and aloe extract effectively inhibited
                                    the growth of one bacterial strain that causes acne.
                                </dt>
                            </li>
                            <li>
                                <h3>Burns:</h3>
                                <dt>
                                    Lavender has long been used as a traditional remedy for burns, and some
                                    older researchTrusted Source has suggested there's scientific data to
                                    confirm this use. According to a 2009 studyTrusted Source, its
                                    antimicrobial activity might also help prevent infections after a
                                    burn.
                                </dt>
                            </li>
                            <li>
                                <h3>Skin conditions:</h3>
                                <dt>
                                    Lavender contains two inflammation-fighting compounds called
                                    linalool and linalyl acetate. A 2020 study suggests that these
                                    may provide relief for skin issues such as:
                                    <div className="ingredient-benefits" >
                                        <ul>
                                            <li>Eczema</li>
                                            <li>Dermatitis</li>
                                            <li>Psoriasis</li>
                                            <li>Itching</li>
                                            <li>Rashes</li>
                                        </ul>
                                    </div>
                                </dt>
                            </li>
                            <li>
                                <h3>Wound healing:</h3>
                                <dt>
                                    Lavender's soothing powers might extend to healing wounded skin.
                                    A review of 20 studies found that lavender oil increased the rate of wound
                                    healing, promoted the growth of collagen, and boosted the tissue remodeling
                                    process of the skin.
                                </dt>
                            </li>
                            <li>
                                <h3>Capsules:</h3>
                                <dt>
                                    While ingesting lavender oil on its own is not recommended, lavender-infused
                                    capsules are often used in the treatment of anxiety.
                                </dt>
                                <dt>
                                    In small amounts such as in capsule form, lavender oil is considered safe to
                                    ingest. Because lavender capsules are herbal supplements, you can purchase
                                    them without a prescription.
                                </dt>
                            </li>
                            <li>
                                <h3>Teas, tisanes, and infusions:</h3>
                                <dt>
                                    Lavender tea, sometimes called a tisane, is commonly sold at supermarkets.
                                    Try Stash Organic Lavender Tulsi Herbal Tea. You can make it yourself
                                    by brewing 1 tablespoon of dried lavender buds in 2 cups of water.
                                    Similarly, you can infuse lavender into a liquid sweetener like honey.
                                </dt>
                                <h3>Ingrdients:</h3>
                                <ul>
                                    <li>
                                        1 tablespoon of dried ;avender flower
                                    </li>
                                    <li>
                                        1 cup of honey
                                    </li>
                                    <li>
                                        Glass jar with a lid
                                    </li>
                                </ul>
                                <h3>Directions:</h3>
                                <ol>
                                    <li>Stir lavender flower and honey together.</li>
                                    <li>
                                        Place the jar in a warm place, like the top of the fridge,
                                        away from direct sunlight.
                                    </li>
                                    <li>Flip the jar every day to mix the honey and flowers.</li>
                                    <li>Allow the honey to infuse for 1-4 weeks.</li>
                                    <li>When you're happy with the flavor, strain the flowers.
                                        You can discard them or add them to a cup of tea.
                                    </li>
                                    <li>Store in a cool, dry place away from direct sunlight.</li>
                                </ol>
                            </li>
                            <li>
                                <h3>Creams, lotions, and salves:</h3>
                                <dt>
                                    For application on wounds or extremely dry skin, try a lavender
                                    salve. A salve is typically made with thicker oils, like coconut
                                    oil, or wax, like beeswax or soy. You can purchase them or make
                                    them yourself. Try Los Poblanos Lavender Salve.
                                </dt>
                                <dt>
                                    Lavender creams and lotions may not deliver the same therapeutic
                                    benefits as more concentrated oils, salves, or capsules, but they're
                                    a soothing way to experience lavender's calming scent and moisturize
                                    skin. Purchase a lavender-infused lotion or create your own by
                                    adding a few drops of lavender essential oil into an unscented base.
                                </dt>
                            </li>
                            <li>
                                <h3>Beauty products:</h3>
                                <dt>
                                    With a color and scent as appealing as lavender's, it's not surprising that countless beauty products feature it prominently, including:
                                    <ul>
                                        <li>face masks</li>
                                        <li>cleansers</li>
                                        <li>body bars</li>
                                        <li>shampoos</li>
                                    </ul>
                                    As with lotions and creams, these products may not impart much clinical benefit, but can be a pleasant part of a beauty regimen.
                                </dt>
                            </li>
                        </ul>
                    </div>
                    <p>
                        One study found that lavender fragrance could have a beneficial effect on insomnia
                        and depression in female college students. However, the authors highlighted that
                        repeated studies are needed to confirm effective proportions of lavender oil and
                        carrier oil for insomnia and depression.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Lavender_Benefits;