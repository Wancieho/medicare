import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Astragalus_Benefits() {
    return (
        <>
            <IngredientNameHeading ingredientName="Astragalus" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Astragalus_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Astragalus_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Astragalus_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Astragalus_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Astragalus_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Astragalus">Grow Astragalus</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Astragalus membranaceus"
                        familyName="Fabaceae" origin="Northern and Eastern China"
                        geoLocation="Northern and Eastern China" />
                    <div className="content-wrapper">
                        <h2>Benefits of using Astragalus:</h2>
                        <p>
                            The specific plant compounds in astragalus, such as polysaccharides (APS),
                            saponins, flavonoids, and alkaloids, produce most of its health benefits.
                            Astragalus polysaccharide (APS) has been proven responsible for most of
                            the herb's benefits.
                        </p>
                        <div className="ingredient-benefits">
                            <ul>
                                <li>The liver</li>
                                <li>The kidneys and urinary system</li>
                                <li>Energy or “Qi”</li>
                                <li>Blood sugar</li>
                                <li>Seasonal allergies</li>
                                <li>Upper respiratory tract</li>
                            </ul>
                            <ul>
                                <li>Menstrual cycle</li>
                                <li>Menopause</li>
                                <li>Organs of detoxification</li>
                                <li>The skin</li>
                                <li>Pain/inflammation</li>
                                <li>Stress response</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="content-section2">
                    <div className="ingredient-benefits">
                        <ol>
                            <li>
                                <h3>Gives You Energy</h3>
                                <dt>
                                    Astragalus root contains a variety of herbal formulations. They help in boosting
                                    your strength and stamina. In addition, they work wonders to improve the health
                                    of athletes. Hence, you can have Astragalus root to increase your metabolism.
                                    They also help in improving performance in sports.
                                </dt>
                                <dt>
                                    The study has powerful anti-oxidative stress, anti-inflammatory, immune-regulation,
                                    and vascular protective effects. However, more studies are required to give these
                                    facts a concrete shape.
                                </dt>
                            </li>
                            <li>
                                <h3>Lowers Blood Pressure:</h3>
                                <dt>
                                    Astragalus root can treat various heart conditions as it has a diuretic effect.
                                    It lowers blood pressure and relaxes the blood vessels. Hence, your heart can
                                    pump a more significant amount of blood.
                                </dt>
                                <dt>
                                    According to research, it may be beneficial for your heart health, but it cannot
                                    replace conventional care. Therefore, patients with heart issues can take
                                    astragalus twice daily and routine medications. However, it is advisable to
                                    consult your physician.
                                </dt>
                            </li>
                            <li>
                                <h3>Good for Anxiety:</h3>
                                <dt>
                                    As per a study, astragalus root curbs the stress level. It also brings a
                                    sense of peace and calms your mind and body. People who suffer from frequent
                                    mood swings and constant nervousness may benefit from consuming astragalus root.
                                    Thus, it can be instrumental for your mental health. A significant benefit that
                                    distinguishes the astragalus herb from other traditional medicines is that it
                                    is an adaptogen. This quality makes it non-toxic and safe. It tweaks your hormone
                                    production capacity and physical reaction against internal and external stressors.
                                </dt>
                            </li>
                            <li>
                                <h3>Increases Estrogen Levels:</h3>
                                <dt>
                                    Diet, lifestyle, and the environment negatively affect the estrogen levels in the
                                    body. They leave you with estrogen-dominant bodies that disturb your menstrual
                                    flow. Thus, to strengthen your reproductive health, you should have Astragalus
                                    root.
                                </dt>
                                <dt>
                                    As per research, the astragalus serves as a support to the reproductive system.
                                    You can mix it with other herbs to balance the hormones. It benefits both males
                                    and females.
                                </dt>
                            </li>
                            <li>
                                <h3>Treats Lung Cancer:</h3>
                                <dt>
                                    According to a study, the astragalus root benefits lung cancer patients
                                    undergoing chemotherapy. Thus, consuming supplements that have astragalus root
                                    in them positively affect health and longevity. In addition, one can combine
                                    with chemotherapy to increase the chances of survival. Hence, it enhances your
                                    respiratory health.
                                </dt>
                            </li>
                            <li>
                                <h3>Removes Seasonal Allergies:</h3>
                                <dt>
                                    According to research, astragalus root removes seasonal allergies by reducing
                                    the severity of reactions. It also dramatically improves the quality of life.
                                    It works by regulating the immune system and reducing sensitivity to allergens.
                                    Hence, if you are frequently affected by seasonal allergies, taking astragalus
                                    root extract by mouth daily can be beneficial. Consuming it for 3-6 weeks may
                                    reduce running nose, itching, and sneezing.
                                </dt>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Astragalus_Benefits;