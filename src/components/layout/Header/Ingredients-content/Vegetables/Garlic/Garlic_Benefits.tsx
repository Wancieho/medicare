import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Garlic_Benefits() {
    return (
        <>
            <IngredientNameHeading ingredientName="Garlic(Allium sativum)" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Garlic_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Garlic_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Garlic_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Garlic_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Garlic_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Garlic">Grow Garlic</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Garlic(Allium sativum)"
                        familyName="Amaryllidaceae" origin="Native to South Asia, 
                    Central Asia and northeastern Iran"
                        geoLocation="South Asia, 
                    Central Asia and northeastern Iran" />
                    <div className="content-wrapper">
                        <h2>What are the health benefits of using Garlic?</h2>
                        <p>
                            Garlic has been part of the kitchens for centuries. This herb has curative and
                            medicinal properties because of its antibacterial and antiseptic nature. The
                            beneficial properties of garlic are because of a compound, Allicin. It is rich
                            in minerals like phosphorus, zinc, potassium, and magnesium. Vitamins C, K,
                            Folate, niacin and thiamine also are found abundantly in garlic.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <h2>The Health Benefits of Eating Garlic (Lahsun):</h2>
                    <div className="ingredient-benefits">
                        <ol>
                            <li>
                                <h3>Wards Off Cough and Cold:</h3>
                                <dt>
                                    Raw garlic has the potential to ward off cough and cold infections. Eating two crushed
                                    garlic cloves on an empty stomach has the maximum benefit. For kids and babies, hanging
                                    garlic cloves in a thread around their necks is supposed to relieve congestion symptoms.
                                </dt>
                            </li>
                            <li>
                                <h3>Good for Cardiac Health:</h3>
                                <dt>
                                    Allicin, a compound found in garlic stops the oxidizing of LDL (bad cholesterol). This
                                    reduces cholesterol levels and improves heart health. Regular consumption of garlic
                                    reduces the incidence of blood clots and thus helps prevent thromboembolism. Garlic
                                    also lowers blood pressure so is good for patients with hypertension.
                                </dt>
                            </li>
                            <li>
                                <h3>Improves Brain Functioning:</h3>
                                Garlic promotes brain health because of its antioxidant and anti-inflammatory properties.
                                It is effective against neurodegenerative diseases like Alzheimer's and dementia
                                <dt></dt>
                            </li>
                            <li>
                                <h3>Improves Digestion</h3>
                                <dt>
                                    Digestive problems improve with the inclusion of raw garlic in the diet. It benefits the intestines
                                    and reduces inflammation. Eating raw garlic helps to clear out intestinal worms. The good thing is
                                    that it destroys the bad bacteria and protects the good bacteria in the gut.
                                </dt>
                            </li>
                            <li>
                                <h3>Balances Blood Sugar</h3>
                                <dt>
                                    Those who suffer from diabetes observe their blood sugar levels regulating the consumption of raw garlic.
                                </dt>
                            </li>
                            <li>
                                <h3>Boosts Immunity</h3>
                                <dt>
                                    Garlic protects against free radicals and prevents damage to the DNA. Zinc in garlic promotes immunity.
                                    Vitamin C helps to fight off infections. It is very beneficial against eye and ear infections as it has
                                    antimicrobial properties.
                                </dt>
                            </li>
                            <li>
                                <h3>Skin Health</h3>
                                <dt>
                                    Garlic helps prevent acne and lightens acne scars. Cold sores, psoriasis, rashes, and blisters can all
                                    benefit from the application of garlic juice. It also protects against UV rays and therefore prevents ageing.
                                </dt>
                            </li>
                            <li>

                                <h3>Prevents Cancer and Peptic Ulcer</h3>
                                <dt>
                                    Because of a high amount of antioxidants, garlic protects the body against lung, prostate, bladder, stomach,
                                    liver and colon cancer. The antibacterial action of garlic prevents peptic ulcers as it eliminates the
                                    contagion from the gut.
                                </dt>
                            </li>
                            <li>
                                <h3>Good for Weight Loss</h3>
                                <dt>
                                    Garlic reduces the expression of genes responsible for the formation of adipose cells which store
                                    fat. It also increases thermogenesis in the body and leads to the burning of more fat and the
                                    lowering of LDL (bad cholesterol). Apart from the fact that it is good for weight loss, garlic
                                    is highly nutritional. In fact, one clove of raw garlic, which is around three grams, contains:
                                </dt>
                                <div className="ingredient-benefits">
                                    <ul>
                                        <li>Manganese</li>
                                        <li>Vitamin B6</li>
                                        <li>Vitamin C</li>
                                        <li>Selenium</li>
                                        <li>Fiber</li>
                                        <li>Amounts of calcium, copper, potassium, iron, etc.</li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <h3>May Improve Athletic Performance:</h3>
                                <dt>
                                    Garlic is considered one of the best :performance enhancing" substances. In olden times, the item was used to
                                    treat fatigue and improve the work capacity of labourers. Studies on rodents suggest consuming garlic helps in
                                    improving exercise performance. People who had heart disease consumed garlic for 6 weeks and this resulted in a
                                    12% reduction in their heart rate and better exercise capacity.
                                </dt>
                            </li>
                            <li>
                                <h3>Fights UTI and Improves Renal Health:</h3>
                                <dt>
                                    Fresh garlic juice has the potential to reduce the growth of E. Coli bacteria that cause urinary tract
                                    infection (UTI). It also helps prevent kidney infections. Garlic reduces infections on wounds, promotes
                                    hair growth, bone health and liver health. Most of the home remedies are effective only if garlic is
                                    consumed raw.
                                </dt>
                            </li>
                            <li>
                                <h3>Reduces Exercise Fatigue:</h3>
                                <dt>
                                    According to studies from Japan, raw garlic when aged in a mixture of water and alcohol may have
                                    significant effects on exercise endurance. Human studies have also been conducted that have shown that
                                    garlic can indeed improve the symptoms of exercise fatigue.
                                </dt>
                            </li>
                            <li>
                                <h3>Reduces Blood Toxicity:</h3>
                                <dt>
                                    For people who are susceptible to lead poisoning due to occupational hazards, garlic may be the best
                                    organic solution. Studies conducted in 2012 have revealed that garlic is in fact, safer and better at
                                    reducing lead poisoning of the blood than d-Penicillamine, which is the common drug used to treat the same.
                                </dt>
                            </li>
                            <li>
                                <h3>Overcome Oestrogen Deficiency:</h3>
                                <dt>
                                    The period of menopause for older women has often been associated with a lack of the female hormone
                                    known as oestrogen due to irregular production of a protein known as a cytokine. Consumption of garlic
                                    has been seen to regulate this to some extent and therefore, may be effective in overcoming oestrogen
                                    deficiency after menopause.
                                </dt>
                            </li>
                            <li>
                                <h3>Reduce Effects or Onset of Osteoarthritis:</h3>
                                <dt>
                                    Consuming garlic in your regular diet can also help to prevent or reduce the onset of osteoarthritis.
                                    Research has shown that garlic contains a compound known as diallyl disulphide which helps to maintain
                                    bone density and therefore can potentially delay the onset of bone-related ailments like osteoarthritis.
                                </dt>
                            </li>
                            <li>
                                <h3>Prevent Heart Blockages:</h3>
                                <dt>
                                    Garlic is also believed to help reduce the stickiness of the platelets in your blood. These platelets
                                    are responsible for the clotting of blood. Consuming a healthy dose of garlic can help reduce the excessive
                                    clotting effect of platelets on the blood. Therefore, it may help prevent unnecessary blood clots inside
                                    arteries that may reach up to your heart causing a heart attack.
                                </dt>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Garlic_Benefits;