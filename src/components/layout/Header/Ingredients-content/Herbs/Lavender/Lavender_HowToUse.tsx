import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Lavender_HowToUse() {
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
                        <h2>How is Lavandula(Lavender) used?</h2>
                        <p>Lavandula is used in:</p>
                        <ol>
                            <li>Baking</li>
                            <li>Cooking</li>
                            <li>Desserts</li>
                            <li>Medicine</li>
                        </ol>
                        <p>It is also used in the forms of:</p>
                        <div className="ingredient-benefits">
                            <ul>
                                <li>Dried flowers</li>
                                <li>Essential oil</li>
                                <li>Topical oil</li>
                                <li>Capsules</li>
                            </ul>
                            <ul>
                                <li>Teas, Tisanes, and infusions </li>
                                <li>Creams, lotions and salves</li>
                                <li>Beauty products</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="content-section2">
                    <h3>Baking, Cooking, and Desserts:</h3>
                    <p>
                        The ancient Egyptians used this flowering herb, a member of the mint family,
                        for its potent fragrance during mummification; in ancient Greece it was
                        incorporated in treatments for everything from insomnia to backaches; and
                        it was employed so often by the Romans for healing baths that the word
                        lavender comes from the Latin verb <span className="span-em">lavare</span>
                        meaning <span className="span-em">"to wash"</span>.
                    </p>
                    <p>
                        Lavadula is used in the baking industry, for most of the cooking applications,
                        the dried buds, which are also referred to as flowers, are used. Lavender
                        greens have a more subtle flavor when compared to rosemary. The
                        <span className="span-em">potency</span> of
                        the lavender flowers increases with drying which necessitates more sparing
                        use to avoid a heavy, soapy aftertaste. Chefs reduce the dry amount in
                        recipes that call for fresh lavender buds by two-thirds.
                    </p>
                    <p>But what kind of Lavender do we need in the kitchen?
                        <span className="span-em">Culinary Lavender</span> On the other hand is a
                        term which is generally used to describe any plant of the genus Lavandula that
                        encompasses fourty-seven known species of flowers. Not all Lavenders should be
                        used for cooking, although most lavender types typically are safe to eat, culinary
                        lavender is cultivated from Lavandula angustifolia plants (commonly
                        known as English or "true" lavender) and has a lot less oil than the aromatic
                        lavender used in perfumes or soaps.
                    </p>
                    <h3>How do you cook and bake with lavender?</h3>
                    <p>
                        While culinary lavender has a more delicate flavor than its ornamental counterparts,
                        less is still more. Dried lavender buds are about three times as potent as fresh
                        ones, so be particularly sparing when freestyling in the kitchen or using a recipe
                        that doesn't specify fresh or dried.
                    </p>
                    <h2>Traditional medicine:</h2>
                    <p>
                        Health benefits and uses: Lavender is an herb that is used in skin and beauty
                        products but packs a <span className="span-em">wealth of health</span> benefits
                        against fungi, wounds, and anxiety.
                    </p>
                    <p>
                        Lavender oil is believed to have antiseptic and anti-inflammatory properties, which
                        can help to heal minor burns and bug bites. Research suggests that it may be useful
                        for <span className="span-em">treating</span> anxiety, insomnia, depression, and
                        restlessness. Some studies suggest that consuming lavender as a <span className="span-em">tea</span>
                        can help digestive issues such as vomiting, nausea, intestinal gas, upset stomach,
                        and abdominal swelling. In addition to helping with digestive problems, lavender is
                        used to  <span className="span-em">help</span> relieve pain from headaches, sprains,
                        toothaches, and sores. It can also be used to prevent hair loss.
                    </p>
                    <h3>Fungal infections:</h3>
                    <p>
                        A study published in the Journal of Medical Microbiology found that lavender oil
                        could be effective in combating antifungal-resistant infections.
                        The researchers found that the oil was lethal to a range of strains that can cause
                        disease in the skin. In the study, the essential oils distilled from the Lavandula
                        genus of the lavender plant seemed to work by destroying the membranes of fungal
                        cells. The study showed that Lavandula oil is potent and demonstrates antifungal
                        activity on a wide spectrum.
                    </p>
                    <h3>Wound healing:</h3>
                    <p>
                        A study published in the journal Evidence-Based Complementary and Alternative Medicine
                        compared the effects of several treatments for wound healing.
                        The researchers compared the effects of transcutaneous electrical nerve stimulation
                        (TENS), saline solution, povidone-iodine, and lavender oil. These were applied to
                        laboratory rats. The study authors noted that wounds closed faster in the TENS and
                        lavender oil groups than the control groups. These findings suggest that lavender
                        has an acceleratory effect on wound healing.
                    </p>
                    <h3>Hair loss:</h3>
                    <p>
                        Lavender is possibly effective for treating alopecia areata. This is a condition in
                        which hair is lost from some or all areas of the body. Research from 1998 shows that
                        lavender can promote hair growth by up to 44 percent after 7 months of treatment.
                        In a more recent study, researchers found that applying lavender oil to the backs of
                        mice helped to promote hair growth over the course of 4 weeks.

                    </p>
                    <h3>Anxiety disorder, related conditions and Dental health:</h3>
                    <p>
                        Lavender scents have been shown to reduce anxiety before a dental appointment.
                        A review article in the International Journal of Psychiatry in Clinical Practice
                        evaluates how effective Silexan might be for patients with different anxiety
                        disorders. Silexan is a lavender-oil preparation available in 80-milligram (mg)
                        gelatine capsules. The team found that Silexan had an anxiolytic, or anxiety-reducing,
                        effect on patients with generalized or subsyndromal anxiety within 2 weeks.
                    </p>
                    <p>
                        Researchers have also found that lavender scent may help anxious dental patients.
                        The investigators measured the dental anxiety levels of 340 adult patients during
                        their wait at the dentist's waiting room for their appointment.
                        Half the patients were exposed to lavender scent, while the other half were not.
                        The team found that those exposed to lavender scent reported lower levels of anxiety
                        compared to the other patients. The calming effect of lavender was present regardless
                        of the type of scheduled dental appointment.
                    </p>
                    <p>
                        Kritsidima, who conducted the study,
                        concluded: "Our findings suggest that lavender could certainly be used as an
                        effective 'on-the-spot' anxiety reduction in dentists' waiting rooms."
                        Dr. M. Kritsidima, study author, Lavender does not seem to impact anxiety about
                        future dental visits. However, it has been shown to provide a sense of calm
                        while attending a treatment.
                    </p>
                    <h3>Post-tonsillectomy pain in children:</h3>
                    <p>
                        Lavender oil has been shown to reduce the amount of painkilling medicine required
                        after a tonsillectomy. A team of researchers at the Isfahan University of Medical
                        Sciences, Iran, carried out a study to determine whether aromatherapy with Lavandula
                        angustifolia essential oil might reduce symptoms of pain in children after the
                        removal of the tonsils. The study included 48 children aged 6 to 12 years. They were
                        randomly separated into two groups of 24 participants. One group took painkillers
                        alongside lavender, and the other took only painkillers.
                    </p>
                    <p>
                        The frequency of each child's acetaminophen use and nocturnal awakening due to pain was monitored for three
                        days after surgery. Pain intensity was also measured. Acetaminophen is also known
                        as Tylenol or paracetamol, and the group using lavender oil was shown to use
                        acetaminophens less frequently. However, there was no significant difference in how
                        often they woke up at night or their perceptions of pain intensity. Due to the small
                        sample size, more research is required to fully confirm lavender oil as an effective
                        painkiller.
                    </p>
                    <h3>Premenstrual emotional symptoms:</h3>
                    <p>
                        Researchers have also studied whether lavender might help to alleviate premenstrual
                        emotional symptoms. Many women of reproductive age experience a range of symptoms in
                        the premenstrual phase, commonly known as premenstrual syndrome (PMS). Even though
                        PMS is common, no single treatment is universally recognized as effective. As a
                        result, many women turn to alternative therapies, such as aromatherapy.
                    </p>
                    <p>
                        This crossover study involved 17 women, aged on average 20.6 years, with
                        mild-to-moderate premenstrual symptoms. The participants spent one menstrual cycle
                        with no lavender aromatherapy treatment, and another undergoing lavender aromatherapy.
                        The study concluded that lavender aromatherapy could alleviate premenstrual emotional
                        symptoms.
                    </p>
                    <h3>Lavender flower:</h3>
                    <p>
                        Lavender, of course, begins as a plant with bright purple flowers.
                        In its original form, it has a soothing fragrance. You can add the buds to foods,
                        use them in a potpourri, or steep them in tea. You can even dry them and place
                        small sachets in your drawers to freshen your linens.
                    </p>
                    <h3>Essential oil:</h3>
                    <p>
                        Lavender is commonly used in aromatherapy. To reap the benefits of its calming
                        smell, you can simply hold a bottle of lavender oil to your nose and inhale.
                        For a more sustained experience, you may prefer to place a few drops of the
                        oil into a diffuser, which can spread its aroma throughout a room.
                    </p>
                    <h3>Topical oil:</h3>
                    <p>
                        Lavender oil is created by steeping lavender buds in a carrier oil, such as olive
                        or coconut oil, typically for at least 1 week. In the finished product, lavender
                        oil should account for just 0.5 percent to 2 percent of the total amount of oil,
                        or 3 to 12 drops of essential oil per ounce of carrier oil. You can apply this
                        oil topically, but it's important to talk with your doctor before using lavender
                        oil directly on skin. Unless directed to do so by a healthcare professional,
                        don't apply it on or near:
                        <div>
                            <ul>
                                <li>Irritated skin</li>
                                <li>Wounds </li>
                                <li>Rashes skin with symptoms of conditions such as psoriasis
                                    or eczema</li>
                                <li>
                                    To choose a high quality lavender oil, look for a product tightly sealed
                                    in a dark glass bottle with no additives or synthetic fragrances. And be
                                    sure to give it a sniff! A quality oil should have a strong smell.
                                </li>
                            </ul>
                        </div>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Lavender_HowToUse;