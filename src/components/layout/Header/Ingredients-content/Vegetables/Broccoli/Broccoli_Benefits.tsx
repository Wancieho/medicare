import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Broccoli_Benefits() {
    return (
        <>
            <IngredientNameHeading ingredientName="Broccoli" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Broccoli_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Broccoli_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Broccoli_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Broccoli_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Broccoli_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Broccoli">Grow Broccoli</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Broccoli"
                        familyName="Brassicaceae" origin="Italy"
                        geoLocation="China, India, US, Spain, Mexico" />
                    <div className="content-wrapper">
                        <h2>What are the benefits of using Broccoli?</h2>
                        <p>
                            One of broccoli's biggest advantages is its nutrient content. It is
                            loaded with a wide array of vitamins, minerals, fiber and other bioactive compounds.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <h2>Health Benefits:</h2>
                    <div className="ingredient-benfits">
                        <ol>
                            <li>
                                <h3>Packed With Vitamins, Minerals and Bioactive Compounds:</h3>
                                <p>
                                    One cup (91 grams) of raw broccoli packs:
                                </p>
                                <div className="ingredient-benefits">
                                    <ul>
                                        <li>Carbs: 6 grams</li>
                                        <li>Protein: 2.6 gram</li>
                                        <li>Fat: 0.3 grams</li>
                                        <li>Fiber: 2.4 grams</li>
                                        <li>Vitamin C: 135% of the RDI</li>
                                        <li>Vitamin A: 11% of the RDI</li>
                                        <li>Vitamin K: 116% of the RDI</li>
                                        <li>Vitamin B9 (Folate): 14% of the RDI</li>
                                        <li>Potassium: 8% of the RDI</li>
                                        <li>Phosphorus: 6% of the RDI</li>
                                        <li>
                                            Broccoli can be eaten cooked or raw, both are perfectly healthy but
                                            provide different nutrient profiles.
                                        </li>
                                    </ul>
                                </div>
                                <p>
                                    Different cooking methods, such as boiling, microwaving, stir-frying and steaming, alter the
                                    vegetable's nutrient composition, particularly reducing vitamin C, as well as soluble protein
                                    and sugar. Steaming appears to have the fewest negative effects.
                                </p>
                                <p>
                                    Still, raw or cooked, broccoli is an excellent source of vitamin C. Just half a cup (78 grams)
                                    of cooked broccoli provides 84% of the reference daily intake (RDI) more than one-half orange
                                    can offer
                                </p>
                            </li>
                            <li>
                                <h3>Contains Potent Antioxidants That Offer Health-Protective Effects:</h3>
                                <p>
                                    The antioxidant content of broccoli may be one of its main boons for human health.
                                    Antioxidants are molecules that inhibit or neutralize cell damage caused by free
                                    radicals. This can lead to reduced inflammation and an overall health-protective
                                    effect.
                                </p>
                                <p>
                                    Broccoli has high levels of glucoraphanin, a compound that is converted into a potent
                                    antioxidant called sulforaphane during digestion.
                                </p>
                                <p>
                                    Test-tube and animal studies indicate that sulforaphane may offer multiple health benefits,
                                    including reduced blood sugar, cholesterol levels, oxidative stress and chronic disease
                                    development. However, more research is needed to understand its role in humans.
                                </p>
                                <p>
                                    Broccoli also contains measurable amounts of the antioxidants lutein and zeaxanthin,
                                    which may prevent oxidative stress and cellular damage in your eyes.
                                </p>
                            </li>
                            <li>
                                <h3>Bioactive Compounds May Contribute to Reduced Inflammation:</h3>
                                <p>
                                    Broccoli contains various bioactive compounds that have been shown to reduce inflammation
                                    in your body's tissues. It is theorized that multiple compounds work synergistically to
                                    support this effect, though some seem to work individually as well.
                                </p>
                                <p>
                                    Kaempferol, a flavonoid in broccoli, demonstrates strong anti-inflammatory capacity in
                                    both animal and test-tube studies. A small human study in tobacco smokers also revealed
                                    that eating broccoli led to a significant reduction in markers of inflammation.
                                </p>
                                <p>
                                    While these results are promising, more research is needed to better understand how
                                    broccoli consumption affects inflammation in humans.
                                </p>
                            </li>
                            <li>
                                <h3>May Protect Against Certain Types of Cancer:</h3>
                                <p>
                                    Cruciferous vegetables, such as broccoli, contain various bioactive compounds that may reduce cell
                                    damage caused by certain chronic diseases. Multiple small studies have shown that eating
                                    cruciferous vegetables may protect against certain types of cancer, namely:
                                </p>
                                <div className="ingredient-benefits">
                                    <ul>
                                        <li>Breast</li>
                                        <li>Prostate</li>
                                        <li>Gastric/stomach</li>
                                    </ul>
                                    <ul>
                                        <li>Colorectal</li>
                                        <li>Renal/kidney</li>
                                        <li>Bladder</li>
                                    </ul>
                                </div>
                                <p>
                                    Though this data is encouraging, it is not strong enough to make definitive health claims regarding
                                    broccoli's role in cancer treatment or prevention. Ultimately, more human research is needed to
                                    determine the relationship between cruciferous vegetables and cancer prevention.
                                </p>
                            </li>
                            <li>
                                <h3>Antioxidants and Fiber May Aid Blood Sugar Control:</h3>
                                <p>
                                    Eating broccoli may support better blood sugar control in people with diabetes. Although
                                    the exact mechanism is unknown, it may be related to broccoli's antioxidant content.
                                    One human study showed significantly decreased insulin resistance in people with type
                                    2 diabetes who consumed broccoli sprouts daily for one month. Interestingly, an animal
                                    study revealed decreased blood sugar in addition to reduced pancreatic cell damage in
                                    diabetic rats fed broccoli extract. Broccoli is also a good source of fiber. Some
                                    research indicates that higher intake of dietary fiber is associated with lower blood
                                    sugar and improved diabetic control
                                </p>
                            </li>
                            <li>
                                <h3>May Support Heart Health in a Variety of Ways:</h3>
                                <p>
                                    Several studies indicate that broccoli may support heart health in a variety of ways.
                                    Elevated “bad” LDL cholesterol and triglyceride levels are known to be major risk
                                    factors for heart disease. Broccoli may play a role in improving these markers.
                                    One study noticed significantly reduced triglycerides and "bad" LDL cholesterol, as
                                    well as increased "good" HDL cholesterol levels in people who were treated with a
                                    powdered broccoli sprout supplement.
                                </p>
                                <p>
                                    Some research also supports the notion that specific antioxidants in broccoli may
                                    reduce your overall risk of heart attack. A study in mice fed broccoli sprouts
                                    revealed a potentially protective effect against cell death and oxidative stress
                                    in heart tissue following a cardiac arrest. Additionally, higher intake of
                                    fiber-rich foods like broccoli is associated with a reduced risk of heart disease.
                                </p>
                            </li>
                            <li>
                                <h3>Promotes Healthy Digestion and Reduced Constipation:</h3>
                                <p>
                                    Broccoli is rich in fiber and antioxidants — both of which may support healthy bowel
                                    function and digestive health. Bowel regularity and a strong community of healthy
                                    bacteria within your colon are two vital components to digestive health. Eating fiber-
                                    and antioxidant-rich foods like broccoli may play a role in maintaining healthy gut
                                    function.
                                </p>
                                <p>
                                    A study in mice on a broccoli diet found reduced levels of inflammation in the colon,
                                    as well as favorable changes in gut bacteria. A recent human study indicated that
                                    people who ate broccoli were able to defecate more easily than individuals in the
                                    control group.
                                </p>
                                <p>
                                    Though these results are promising, more human research is needed to better understand
                                    how broccoli affects digestive health.
                                </p>
                            </li>
                            <li>
                                <h3>May Slow Mental Decline and Support Healthy Brain Function:</h3>
                                <p>
                                    Some of the nutrients and bioactive compounds in broccoli may slow mental decline and
                                    support healthy brain and nervous tissue function. A study in 960 older adults revealed
                                    that one serving per day of dark green vegetables, such as broccoli, may help resist
                                    mental decline associated with aging.
                                </p>
                                <p>
                                    Additionally, an animal study showed that mice treated with kaempferol a compound in
                                    broccoli had lowered incidence of brain injury and reduced inflammation of neural tissue
                                    following a stroke-like event.
                                </p>
                                <p>
                                    Sulforaphane is another potent bioactive compound present in broccoli with the potential
                                    to support brain function after an event of reduced oxygenation to the brain. In some
                                    studies, mice treated with sulforaphane showed significant brain tissue recovery
                                    and reduced neural inflammation following brain injury or toxic exposure.
                                </p>
                                <p>
                                    Most current research evaluating the effect of bioactive compounds found in broccoli on
                                    brain health are restricted to animal studies. More research is needed to determine how
                                    these compounds support neurological function in humans.
                                </p>
                            </li>
                            <li>
                                <h3>May Help Slow the Aging Process:</h3>
                                <p>
                                    The process of aging is largely attributed to oxidative stress and reduced metabolic
                                    function over the course of your lifespan. Though aging is an unavoidable natural process,
                                    diet quality is thought to be a major player in determining genetic expression and
                                    development of age-related diseases.
                                </p>
                                <p>
                                    Research shows that sulforaphane, a key bioactive compound in broccoli, may have the capacity
                                    to slow the biochemical process of aging by increasing the expression of antioxidant genes.
                                    Still, more human research is needed to determine a cause-and-effect relationship between
                                    dietary intake of broccoli and its effect on the aging process.
                                </p>
                            </li>
                            <li>
                                <h3>Vitamin C Content Supports a Healthy Immune System:</h3>
                                <p>
                                    The human immune system is complex and requires a multitude of nutrients to function properly.
                                    Vitamin C is arguably the most essential nutrient for immune function and broccoli is loaded
                                    with it. Research indicates that vitamin C plays a role in both the prevention and treatment
                                    of various illnesses. A daily intake of 100-200 mg of vitamin C seems to be sufficient to
                                    prevent certain infections. Typically, vitamin C is associated with oranges or strawberries,
                                    but broccoli definitely deserves credit a half-cup (78-gram) serving of cooked broccoli
                                    boasts 84% of the RDI for this vitamin.
                                </p>
                            </li>
                            <li>
                                <h3>May Support Dental and Oral Health:</h3>
                                <p>
                                    Broccoli contains a wide array of nutrients, some of which are known to support oral health
                                    and prevent dental diseases. Broccoli is a good source of vitamin C and calcium, two nutrients
                                    associated with a decreased risk of periodontal disease. Kaempferol, a flavonoid found in
                                    broccoli, may also play a role in preventing periodontitis.
                                </p>
                                <p>
                                    Additional research indicates that the sulforaphane found in broccoli may reduce your risk of
                                    oral cancers. Some sources claim that eating raw broccoli can help manually remove plaque and
                                    whiten your teeth. However, no rigorous scientific data exists to support this. Ultimately,
                                    more human research is needed to better understand broccoli's role in maintaining
                                    a healthy mouth.
                                </p>
                            </li>
                            <li>
                                <h3>May Promote Healthy Bones and Joints:</h3>
                                <p>
                                    Many of the nutrients found in broccoli are known to support healthy bones and may prevent
                                    bone-related disorders. Broccoli is a good source of vitamin K and calcium, two vital
                                    nutrients for maintaining strong, healthy bones.
                                </p>
                                <p>
                                    It also contains phosphorus, zinc and vitamins A and C, which are necessary for healthy
                                    bones as well. A test-tube study indicates that the sulforaphane found in broccoli may
                                    aid in preventing osteoarthritis. However, more research is needed to draw any definitive
                                    conclusions on its role in humans
                                </p>
                            </li>
                            <li>
                                <h3>Nutrient Content May Support a Healthy Pregnancy:</h3>
                                <p>
                                    Your body requires a multitude of vitamins, minerals and protein during pregnancy to
                                    support both baby and mother. Broccoli is a good source of B vitamins — namely B9,
                                    also known as folate. Folate is an essential nutrient for the development of the fetal
                                    brain and spinal cord.
                                </p>
                                <p>
                                    Regular consumption of folate-rich foods like broccoli can help ensure healthy pregnancy
                                    outcomes Additionally, some animal studies indicate that broccoli eaten by the mother may
                                    support healthier cognitive development of the newborn. More research is needed to better
                                    understand how broccoli and its bioactive compounds may support healthier pregnancy outcomes.
                                </p>
                            </li>
                            <li>
                                <h3>May Protect Your Skin From Sun Damage:</h3>
                                <p>
                                    Skin cancer is on the rise due in part to a damaged ozone layer and increased exposure to
                                    ultraviolet (UV) rays. Research indicates that bioactive compounds in broccoli may protect
                                    against UV radiation damage which leads to skin cancer. In some animal studies, treatment
                                    with broccoli extract resulted in significantly reduced tumor growth and prevalence in mice
                                    with UV radiation-induced skin cancer.
                                </p>
                                <p>
                                    Small human studies have achieved similar results, revealing a significant protective effect
                                    of broccoli extract against skin damage and cancer development after sun exposure. Ultimately,
                                    more research is needed to understand how broccoli and its bioactive components may protect
                                    skin from sun damage.
                                </p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Broccoli_Benefits;