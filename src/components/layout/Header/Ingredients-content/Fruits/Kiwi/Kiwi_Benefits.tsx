import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Kiwi_Benefits() {
    return (
        <>
            <IngredientNameHeading ingredientName="Kiwifruit(Kiwi)" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Kiwi_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Kiwi_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Kiwi_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Kiwi_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Kiwi_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Kiwi">Grow Kiwi</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Kiwifruit(Kiwi)"
                        familyName="Actinidiaceae" origin="Native to central and eastern China"
                        geoLocation="New Zealand, Italy, California, France, Greece, and Chile" />
                    <div className="content-wrapper">
                        <h2>What are the benefits of using kiwifruit(Kiwi)?</h2>
                        <p>
                            Kiwi and other fruits provide a range of health benefits due to
                            their nutritional contents. Kiwis are a good source of vitamin C,
                            antioxidants, and fiber.
                        </p>
                        <p>
                            Antioxidants including vitamin C, choline, lutein, and zeaxanthin
                            help remove free radicals from the body. Free radicals are unstable
                            molecules that the body produces during metabolism and other processes.
                            If too many free radicals build up, they can cause oxidative stress,
                            which can result in cell damage. This damage may lead to issues such
                            as heart disease or cancer. Antioxidants can help protect the body by
                            removing free radicals.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <h2>The nutrients in kiwi may benefit a person in the following ways:</h2>
                    <div className="ingredient-benefits">
                        <ol>
                            <li>
                                <h3>Healthful skin:</h3>
                                <p>
                                    Vitamin C contributes to the production of collagen, a key
                                    component in cells and organs throughout the body, including
                                    the skin. The vitamin also boosts the body's ability to heal
                                    wounds.
                                </p>
                                <p>
                                    A 2019 review of studies found that taking oral collagen
                                    supplements may help boost skin elasticity and hydration
                                    and reduce wrinkles. Taking supplements is not the same as
                                    consuming vitamin C in kiwis, but eating the fruit may
                                    still help keep the skin healthy.
                                </p>
                                <p>
                                    One kiwi weighing 69 grams (g) provides 64 milligrams (mg) of
                                    vitamin C. This represents 71-85% of an adult's daily vitamin C
                                    requirement.
                                </p>
                                <p>
                                    Kiwifruit also provides vitamin E, or tocopherol. The antioxidant
                                    properties of vitamin E and its ability to help protect the skin
                                    from sun damage may help prevent skin disorders. Learn more about
                                    skin-friendly foods.
                                </p>
                            </li>
                            <li>

                                <h3>Better sleep:</h3>
                                <p>
                                    A 2011 study looked at the effects of kiwifruit on sleep quality
                                    in adults with sleep problems. The researchers found that eating
                                    kiwis improved sleep, according to self-reported measures.
                                </p>
                                <p>
                                    The scientists suggested that this benefit may stem from the
                                    antioxidant and serotonin contents of kiwis.
                                </p>
                            </li>
                            <li>
                                <h3>Heart health and blood pressure:</h3>
                                <p>
                                    Kiwis contain fiber, potassium, and antioxidants, all of which
                                    may support heart health. The American Heart Association (AHA)
                                    encourage people to increase their potassium intake while reducing their
                                    consumption of added salt, or sodium.
                                </p>
                                <p>
                                    Potassium relaxes the blood vessels, which helps manage blood pressure,
                                    and people with low blood pressure tend to be less likely to develop
                                    cardiovascular disease. One kiwi contains about 215 mg of potassium,
                                    or nearly 5% of an adult's daily requirement. Kiwi's fiber content may
                                    also benefit cardiovascular health.
                                </p>
                                <p>
                                    A review published in 2017 found that
                                    people who consume high amounts of fiber have a lower risk of
                                    developing cardiovascular disease. They also tend to have less
                                    low-density lipoprotein, or "bad", cholesterol. One kiwi provides
                                    around 2 g of fiber, or 6-9% of an adult's daily requirement.
                                </p>
                            </li>
                            <li>
                                <h2>Which foods may help manage high blood pressure?</h2>
                                <h3>Kidney stone prevention:</h3>
                                <p>
                                    According to the Office of Dietary Supplements, a high potassium
                                    intake may also help prevent kidney stones from forming.
                                </p>
                            </li>
                            <li>
                                <h3>Cancer prevention:</h3>
                                <p>
                                    The National Cancer Institute note that high levels of free
                                    radicals in the body can cause damage to DNA that can result
                                    in various types of cancer. Kiwis provide a range of
                                    antioxidants that help remove free radicals from the body.
                                    This is one way in which the fruit may help prevent cancer.
                                </p>
                                <p>
                                    In addition, research has shown that people who eat plenty
                                    of fiber especially fiber from fruits and cereals are less
                                    likely to develop colorectal cancer than those who eat little
                                    fiber.
                                </p>
                            </li>
                            <li>
                                <h3>Constipation prevention:</h3>
                                <p>
                                    A 2019 study concluded that when healthy people eat kiwis,
                                    their small intestines are better able to retain water, leading
                                    to greater stool frequency and softer stool consistency.
                                    The study authors suggested that kiwifruit could be a natural
                                    alternative to medical laxatives for people with mild constipation.
                                    Which other foods are good for constipation?
                                </p>
                            </li>
                            <li>
                                <h3>Anti-inflammatory effects:</h3>
                                <p>
                                    Kiwellin and kissper are proteins in kiwifruit that may have
                                    anti-inflammatory properties. Laboratory findings have
                                    indicated that kissper may help manage inflammation in the
                                    human intestines.
                                </p>
                            </li>
                            <li>
                                <h3>During pregnancy:</h3>
                                <p>
                                    Kiwifruit contains folate, which is essential for cell division.
                                    During pregnancy, doctors advise women to take additional folate,
                                    as it may protect the fetus from developmental problems, such as
                                    neural tube abnormalities. One kiwi provides around 17.2
                                    micrograms (mcg) of folate, or just over 4% of an adult's
                                    daily requirement.
                                </p>
                            </li>
                            <li>
                                <h3>Bone health:</h3>
                                <p>
                                    Kiwi contains vitamin K and traces of calcium and phosphorus, all
                                    of which contribute to bone health. An adequate intake of vitamin K
                                    may help prevent osteoporosis. Vitamin K also plays an important
                                    role in blood clotting. One kiwi provides 23-30% of an adult's
                                    daily requirement of the vitamin.
                                </p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Kiwi_Benefits;