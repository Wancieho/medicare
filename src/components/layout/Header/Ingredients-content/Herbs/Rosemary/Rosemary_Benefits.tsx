import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Rosemary_Benefits() {
    return (
        <>
            <IngredientNameHeading ingredientName="Rosemary" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Rosemary_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Rosemary_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Rosemary_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Rosemary_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Rosemary_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Rosemary">Grow Rosemary</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Rosemary"
                        familyName="Lamiaceae" origin="Native to the Mediterranean region"
                        geoLocation="Mediterranean Region" />
                    <div className="content-wrapper">
                        <h2>What are the benefits of using Rosemary?</h2>
                        <p>
                            Popularly known for being a culinary herb, rosemary is from the
                            mint family and has been used in traditional medicine for centuries.
                            Rosemary essential oil has a woodsy fragrance and is considered a
                            mainstay in aromatherapy. However, rosemary oil has a wide range of
                            uses, from treating ailments and pains to promoting hair growth,
                            making it beneficial to have on hand in your home.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <div className="ingredient-benefits-a">
                        <ul>
                            <li>
                                <h3>#1 Combat Gastrointestinal Stress:</h3>
                                <dt>
                                    <p>
                                        Rosemary oil can be used to relieve a variety of gastrointestinal complaints,
                                        including indigestion, gas, stomach cramping, bloating and constipation. It
                                        also stimulates appetite and helps regulate the creation of bile, which plays
                                        a crucial role in digestion.
                                    </p>
                                </dt>
                                <dt>
                                    <p>
                                        To treat stomach ailments, combine 1 teaspoon of
                                        a carrier oil such as coconut or almond oil with 5 drops of rosemary oil and
                                        gently massage the mixture over your abdomen. Applying rosemary oil in this
                                        way on a regular basis detoxifies the liver and promotes gallbladder health.

                                    </p>
                                </dt>
                            </li>
                            <li>
                                <h3>#2 Relieve Stress and Anxiety:</h3>
                                <dt>
                                    <p>
                                        Research shows that simply inhaling the aroma of rosemary essential oil can
                                        lower levels of the stress hormone cortisol in your blood. High cortisol
                                        levels are caused by stress, anxiety or any thought or event that puts your
                                        body in "fight-or-flight" mode.
                                    </p>
                                </dt>
                            </li>
                            <li>
                                <dt>
                                    <p>
                                        When stress is chronic, cortisol can cause
                                        weight gain, oxidative stress, high blood pressure and heart disease. You
                                        can combat stress instantly using an essential oil diffuser or even by
                                        inhaling over an open bottle.
                                    </p>
                                </dt>
                            </li>
                            <li>
                                <dt>
                                    <p>
                                        To create an anti-stress aromatherapy spray:
                                        imply combine in a small spray bottle 6 tablespoons of water with 2
                                        tablespoons of vodka, and add 10 drops of rosemary oil. Use this spray
                                        at night on your pillow to relax, or spray it into the air indoors any
                                        time to relieve stress.
                                    </p>
                                </dt>
                            </li>
                            <li>
                                <h3>#3 Reduce Pain and Inflammation:</h3>
                                <dt>
                                    <p>
                                        Rosemary oil has anti - inflammatory and pain - relieving properties you
                                        can benefit from by massaging the oil on the affected area.Mix 1 teaspoon
                                        of a carrier oil with 5 drops of rosemary oil to create an effective
                                        salve. Use it for headaches, sprains, muscle soreness or pain, rheumatism
                                        or arthritis. You can also soak in a hot bath and add a few drops of
                                        rosemary oil to the tub.
                                    </p>
                                </dt>
                            </li>
                            <li>
                                <h3>#4 Treat Respiratory Problems:</h3>
                                <dt>
                                    <p>
                                        Rosemary oil works as an expectorant when inhaled, relieving throat
                                        congestion from allergies, colds or flus.Inhaling the aroma can fight
                                        respiratory infections because of its antiseptic properties.It also has
                                        an antispasmodic effect, which helps in the treatment of bronchial asthma.
                                        Use rosemary oil in a diffuser, or add a few drops to a mug or small pot
                                        of boiling - hot water and inhale the vapor up to 3 times daily.
                                    </p>
                                </dt>
                            </li>
                            <li>
                                <h3>#5 Promote Hair Growth and Beauty:</h3>
                                <dt>
                                    <p>
                                        Rosemary essential oil has been found to increase the growth of new hair
                                        by 22 percent when massaged onto the scalp.It works by stimulating scalp
                                        circulation and can be used to grow longer hair, prevent baldness or
                                        stimulate new hair growth in balding areas.Rosemary oil also slows the
                                        graying of hair, promotes shininess and prevents and reduces dandruff,
                                        making it a great tonic for overall hair health and beauty.
                                    </p>
                                </dt>
                            </li>
                            <li>
                                <h3>#6 Enhance Memory:</h3>
                                <dt>
                                    <p>
                                        Greek scholars are known to have used rosemary essential oil to improve
                                        their memory before exams.A recent study published in the International
                                        Journal of Neuroscience evaluated the cognitive performance of 144
                                        participants when using rosemary oil for aromatherapy.
                                    </p>
                                </dt>
                                <dt>
                                    <p>
                                        It found that
                                        rosemary significantly enhanced the quality of memory and increased mental
                                        alertness.Another study, published in Psychogeriatrics, tested the effects
                                        of rosemary oil aromatherapy on 28 elderly dementia and Alzheimer's
                                        patients and found that its properties can prevent and slow Alzheimer's
                                        disease.
                                    </p>
                                </dt>
                                <dt>
                                    <p>
                                        Add a few drops of rosemary oil to lotion and apply it to your
                                        neck, or use a diffuser to reap the mental benefits of rosemary oil's
                                        aroma. Whenever you need a boost of mental energy, you can even inhale
                                        over the bottle of oil to get the same effects.
                                    </p>
                                </dt>
                            </li>
                            <li>
                                <h3>#7 Fight Bad Breath</h3>
                                <dt>
                                    <p>
                                        Rosemary essential oil has antimicrobial qualities that make it an
                                        effective counter for bad breath.You can use it as a mouthwash simply by
                                        adding a few drops of rosemary oil to water and swishing it around. By
                                        killing bacteria, it not only fights bad breath but also prevents plaque
                                        buildup, cavities and gingivitis.
                                    </p>
                                </dt>
                            </li>
                            <li>
                                <h3>#8 Heal Your Skin</h3>
                                <dt>
                                    <p>
                                        Rosemary oil's antimicrobial properties make it likewise effective in
                                        treating skin problems such as acne, dermatitis and eczema. By hydrating
                                        and nourishing the skin while killing bacteria, it makes a great addition
                                        to any moisturizer. Simply add a few drops to facial moisturizer to use
                                        rosemary oil every day and get a healthy glow. To treat problem areas,
                                        dilute 5 drops of rosemary oil in 1 teaspoon of a carrier oil and apply
                                        it to the site. It won't make your skin more oily; in fact, it removes
                                        excess oil from the surface of your skin.
                                    </p>
                                </dt>
                            </li>
                            <li>
                                <h3>#9 Cancer</h3>
                                <dt>
                                    <p>
                                        Several studies suggest that rosemary extract may inhibit tumor growth by
                                        preventing cancerous cells from replicating. One study found that rosemary,
                                        on its own and in combination with curcumin, helped prevent breast cancer.
                                        A second study found similar effects of rosemary on colon cancer cells.
                                    </p>
                                </dt>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rosemary_Benefits;