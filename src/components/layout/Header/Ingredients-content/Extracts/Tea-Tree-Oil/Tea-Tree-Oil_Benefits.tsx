import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Ingredient_Benefits() {
    return (
        <>
            <IngredientNameHeading ingredientName="Tea-Tree-Oil" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Tea-Tree-Oil_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Tea-Tree-Oil_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Tea-Tree-Oil_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Tea-Tree-Oil_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Tea-Tree-Oil_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Tea-Tree-Oil">Grow Tea Tree Oil</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Tea tree oil(Melaleuca oil)"
                        familyName="Myrtaceae" origin="Native to Australia"
                        geoLocation="Southeast coast of Australia" />
                    <div className="content-wrapper">
                        <h2>What are the benefits of using Tea-Tree-Oil?</h2>
                        <p>
                            Tea tree oil comes from the leaves of Melaleuca alternifolia, a small tree native to Queensland
                            and New South Wales, Australia. Although Melaleuca alternifolia is known as the tea tree, it
                            should not be confused with the plant whose leaves are used to make black, green, and oolong tea.
                        </p>
                        <p>
                            Tea tree oil has been used as a traditional medicine by the Aboriginal people of Australia for
                            centuries. These native Australians crush tea tree leaves to extract the oil, then inhale it to
                            treat coughs and colds or apply it directly to the skin for healing. Today, tea tree oil is widely
                            available as a 100% undiluted, or neat, oil. Diluted forms are also available, ranging from 5-50%
                            strength in products designed for the skin.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <p>
                        Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill
                        certain bacteria, viruses, and fungi. Terpinen-4-ol also appears to increase the activity of your
                        white blood cells, which help fight germs and other foreign invaders. These germ-fighting properties
                        make tea tree oil a valued natural remedy for treating bacterial and fungal skin conditions,
                        preventing infection, and promoting healing.
                    </p>
                    <h2>Health benefits:</h2>
                    <div className="ingredient-benefits">
                        <ol>
                            <li>
                                <h3>Hand sanitizer:</h3>
                                <p>
                                    Tea tree oil makes an ideal natural hand sanitizer. Studies have shown that it kills
                                    several common bacteria and viruses responsible for causing illness, including E. coli,
                                    S. pneumoniae, and H. influenzae. In fact, a study testing several types of handwash
                                    shows that adding tea tree oil to the cleansers boosted their effectiveness against E.
                                    coli.
                                </p>
                                <p>
                                    Studies continue to confirm that hand sanitizers with tea tree oil are effective for
                                    hand disinfection, killing bacteria without antibiotics.
                                </p>
                            </li>
                            <li>
                                <h3>Insect repellent:</h3>
                                <p>
                                    Tea tree oil may help keep pesky insects away. One study found that 24 hours after being
                                    treated with tea tree oil, cows had 61% fewer flies than cows not treated with tea tree oil.
                                    Tea tree oil is used to keep ants off of produce in agriculture.
                                </p>
                                <p>
                                    It is also an effective mosquito repellent. A test-tube study revealed that tea tree oil
                                    had a greater ability to repel mosquitoes than DEET, the most common active ingredient in
                                    commercial insect repellents. Try this easy-to-make insect repellent using tea tree oil
                                    and other natural ingredients.
                                </p>
                            </li>
                            <li>
                                <h3>Natural deodorant:</h3>
                                <p>
                                    Tea tree oil's antibacterial effects may help control underarm odor related to perspiration.
                                    Sweat itself does not smell. However, when secretions from your sweat glands combine with
                                    bacteria on your skin, a moderate to strong odor is produced.
                                </p>
                                <p>
                                    Your underarm area contains a large concentration of these glands and is mainly responsible
                                    for what is commonly referred to as body odor. Tea tree oil's bacteria-fighting properties
                                    make it an ideal natural alternative to commercial deodorants and antiperspirants.
                                </p>
                                <p>
                                    Here is a safe and effective natural deodorant that can be made from tea tree oil and a few
                                    other ingredients.
                                </p>
                            </li>
                            <li>
                                <h3>Antiseptic for minor cuts and scrapes:</h3>
                                <p>
                                    Injuries that result in broken skin make it easy for germs to enter your bloodstream, which
                                    can lead to infection. Tea tree oil can be used to treat and disinfect minor cuts and
                                    abrasions by killing S. aureus and other bacteria that can cause infection in open wounds.
                                    To disinfect a cut or scrape, follow these steps:
                                </p>
                                <div className="ingredient-benefits">
                                    <ol>
                                        <li>Clean the cut thoroughly with plain soap and water.</li>
                                        <li>Mix one drop of tea tree oil with one teaspoon of coconut oil.</li>
                                        <li>Apply a small amount of the mixture to the injury and cover with a bandage.</li>
                                        <li>Repeat this process once or twice daily until a scab has formed.</li>
                                    </ol>
                                </div>
                                <p>
                                    If you do not have cocunut oil, find some online or visit the local store or pharmacy.
                                </p>
                            </li>
                            <li>
                                <h3>Boost wound healing:</h3>
                                <p>
                                    In addition to preventing infection in cuts and abrasions, tea tree oil may also encourage
                                    wound healing. Research has shown that tea tree oil helps reduce inflammation and triggers
                                    the activity of white blood cells that are instrumental in the healing process.
                                </p>
                                <p>
                                    Tea tree oil is a known antibacterial, antifungal, and anti-oxidant, and these actions will
                                    help reduce inflammation and enhance healing. In a small study of 10 people with wounds,
                                    adding tea tree oil to conventional wound treatment led to decreased healing time in all
                                    but one participant.
                                </p>
                                <p>
                                    A few drops of tea tree oil can be added to wound dressing each time a new dressing is
                                    applied.
                                </p>
                            </li>
                            <li>
                                <h3>Fight acne:</h3>
                                <p>
                                    Tea tree oil can be a powerful weapon against acne. Several studies have shown that it
                                    helps reduce the amount and overall severity of acne.
                                </p>
                                <p>
                                    Some acne is caused by bacteria that are becoming resistant to traditional antibiotics.
                                    Scientific examination of tea tree oil found that application not only reduced the
                                    activity of bacteria but also killed them in the lab after 4 to 6 hours.
                                </p>
                                <p>
                                    In another study, tea tree oil was found to be as effective against acne as benzoyl
                                    peroxide, the most common anti-acne medication.
                                    Tea tree oil-based acne gels can be purchased at natural grocery stores or from
                                    online retailers.
                                </p>
                                <p>
                                    Alternatively, you can make your own acne treatment by mixing one part tea tree oil
                                    with nine parts water and applying the mixture to affected areas with a cotton swab
                                    once or twice a day, as needed.
                                </p>
                            </li>
                            <li>
                                <h3>Get rid of nail fungus:</h3>
                                <p>
                                    Fungal nail infections are quite common. Although they are not dangerous, they can be
                                    unsightly. There are medications that can treat nail fungus, but some people may prefer
                                    a more natural approach.
                                </p>
                                <p>
                                    Tea tree oil has been shown to help get rid of nail fungus when used alone or in combination
                                    with other natural remedies, with fewer side effects than traditional medications.
                                    In a controlled study, people with nail fungus used straight tea tree oil or an antifungal
                                    medication for 6 months. At the end of the study, about 60% of people in each group
                                    experienced partial or full resolution of the fungus.
                                </p>
                                <p>
                                    You can use a few drops of tea tree oil alone or mix it with an equal amount of coconut
                                    oil and apply it to the affected area. Be sure to wash your hands immediately after applying
                                    in order to avoid spreading the fungus to other areas.
                                </p>
                            </li>
                            <li>
                                <h3>Chemical-free mouthwash:</h3>
                                <p>
                                    Research suggests that tea tree oil may fight germs that cause tooth decay and bad breath.
                                </p>
                                <p>
                                    One study found that tea tree oil was more effective against plaque-causing bacteria than
                                    chlorhexidine, a common disinfectant and oral rinse. its taste was found to be less
                                    objectionable. A 2020 study found that a tea tree oil mouthwash was an effective treatment
                                    to reduce the inflammation of gingivitis.
                                </p>
                                <p>
                                    To make your own chemical-free mouthwash, simply add a drop of tea tree oil to a cup of warm
                                    water, mix thoroughly, and swish in your mouth for 30 seconds or so. Like other mouthwashes,
                                    tea tree oil should not be swallowed. It can be toxic if ingested.
                                </p>
                            </li>
                            <li>
                                <h3>All-purpose cleaner:</h3>
                                <p>
                                    Tea tree oil makes a great all-purpose cleaner that also sanitizes surfaces.
                                    Plus, it does so without leaving traces of chemicals you wouldn’t want your family members or pets coming in contact with.

                                    An novice recipe for an all-natural, all-purpose cleaner:
                                </p>
                                <div className="ingredient-benefits">
                                    <ul>
                                        <ol>
                                            <li>
                                                Combine 20 drops tea tree oil, 3/4 cup water, and a 1/2 cup apple cider
                                                vinegar in a spray bottle.
                                            </li>
                                            <li>Shake well until thoroughly mixed.</li>
                                            <li>Spray directly onto surfaces and wipe clean with a dry cloth.</li>
                                            <li>
                                                Make sure to shake the bottle before each use in order to mix the tea
                                                tree oil with the other ingredients.
                                            </li>
                                        </ol>
                                    </ul>
                                </div>
                                <p>
                                    Shop for apple cider vinegar online or via the local store.
                                </p>
                            </li>
                            <li>
                                <h3>Soothe skin inflammation:</h3>
                                <p>
                                    Tea tree oil may help relieve inflamed skin. A common form of skin irritation is contact
                                    dermatitis, which occurs when your skin comes in contact with an allergen, such as nickel.
                                    Exposure to the allergen leads to red, itchy, and sometimes painful skin.
                                </p>
                                <p>
                                    Both animal and human research suggest that applying tea tree oil may help reduce the
                                    severity of these symptoms. In a study comparing the effects of different treatments for
                                    contact dermatitis, tea tree oil was found to reduce symptoms by 40%, which was significantly
                                    more than standard medications applied to the skin.
                                </p>
                                <p>
                                    In addition, tea tree oil may provide relief from bug bite reactions by reducing the
                                    itching, redness, and swelling that occurs when your body releases histamine to defend
                                    against the insect's saliva. One study found that tea tree oil applied as a gel to
                                    rosacea reduced inflammation and redness.
                                </p>
                                <p>
                                    Demodex blepharitis is inflammation around the eyes and eyelids related to Demodex
                                    mites. Tea tree oil has been used worldwide to treat this irritating condition and
                                    has been found to reduce the number of mites and reduce inflammation. Use this
                                    recipe to relieve inflamed skin:
                                </p>
                                <div className="ingredient-benefits">
                                    <ol>
                                        <li>Combine 10 drops tea tree oil with 1 tablespoon extra virgin olive oil and
                                            1 tablespoon melted coconut oil.
                                        </li>
                                        <li>Mix well, and store in a sealed container.</li>
                                        <li>Apply to the affected area up to twice per day until symptoms resolve.</li>
                                    </ol>
                                </div>
                                <p>Find olive oil online or via the local store.</p>
                            </li>
                            <li>
                                <h3>Control dandruff:</h3>
                                <p>
                                    Dandruff, or white flakes of dead skin that fall from the scalp, is not dangerous.
                                    However, it can be annoying and embarrassing for some people. Adding tea tree oil
                                    to shampoo has been found to reduce dandruff. This is thought to be related to its
                                    antifungal properties. And because it is slightly more acidic than your skin, it
                                    helps clear the dandruff scales.
                                </p>
                                <p>
                                    In one study, tea tree oil shampoos were found to be effective in reducing the growth
                                    of Candida albicans (yeast) which often contributes to dandruff formation.
                                    To help reduce dandruff, try adding a few drops of tea tree oil to a dollop of shampoo
                                    when washing your hair.
                                </p>
                            </li>
                            <li>
                                <h3>Treat athlete's foot:</h3>
                                <p>
                                    Athlete's foot can be frustratingly hard to control. Known medically as tinea pedis,
                                    athlete's foot is a contagious fungal infection on the feet that can also spread to
                                    the toenails and hands. Symptoms include peeling, cracking, blisters, and redness.
                                    Antifungal medications are considered standard treatment for athlete's foot. Yet
                                    studies suggest that tea tree oil may be an effective alternative for relieving
                                    symptoms.
                                </p>
                                <p>
                                    In a controlled study of 158 people, 72% of the tea tree oil group had significant
                                    clinical improvement in athlete's foot, compared with 39% in the placebo group.
                                    A 2020 study found tea tree oil was effective in reducing athlete's foot, but a
                                    combination of traditional treatment and tea tree oil might be a quicker way to
                                    deal with this.
                                </p>
                                <p>
                                    A natural treatment to relieve the symptoms of athlete's foot:
                                </p>
                                <div className="ingredient-benefits">
                                    <ol>
                                        <li>
                                            Combine 1/4 cup arrowroot powder, 1/4 cup baking soda,
                                            and 20-25 drops tea tree oil.
                                        </li>
                                        <li>Stir to combine and place in a covered container.</li>
                                        <li>Apply to clean, dry feet twice per day.</li>
                                    </ol>
                                </div>
                            </li>
                            <li>
                                <h3>Banish mold on fruits and vegetables:</h3>
                                <p>
                                    Fresh produce is undeniably delicious and healthy. Unfortunately, it's also
                                    susceptible to the growth of gray mold known as Botrytis cinerea,
                                    particularly in warm, moist climates.
                                </p>
                                <p>
                                    Studies have shown that tea tree oil's antifungal compounds terpinen-4-ol
                                    and 1,8-cineole may help reduce the growth of this mold on fruits and
                                    vegetables. To protect against mold, add 5-10 drops of tea tree oil to water
                                    before rinsing your produce and drying it thoroughly.
                                </p>
                            </li>
                            <li>
                                <h3>Relieve psoriasis:</h3>
                                <p>
                                    Psoriasis is an autoimmune condition characterized by outbreaks of red, itchy,
                                    scaly skin. Although medications can improve symptoms, the condition itself
                                    is chronic and there is no known cure.
                                </p>
                                <p>
                                    Tea tree oil contains anti-inflammatory compounds, which, according to emerging
                                    evidence, may be helpful for easing psoriasis symptoms. To provide relief for
                                    psoriasis flares, combine 10-15 drops of tea tree oil with 2 tablespoons of
                                    melted coconut oil. Apply this to the affected area 2-3 times per day, as needed.
                                </p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ingredient_Benefits;