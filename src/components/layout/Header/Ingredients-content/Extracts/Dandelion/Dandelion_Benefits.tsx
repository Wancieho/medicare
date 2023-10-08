import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Dandelion_Benefits() {
    return (
        <>
            <IngredientNameHeading ingredientName="Dandelion" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to={"/Dandelion_Overview"}>Overview</Link>
                    </li>
                    <li>
                        <Link to={"/Dandelion_HowToUse"}>How to use</Link>
                    </li>
                    <li>
                        <Link to={"/Dandelion_Benefits"}>Benefits</Link>
                    </li>
                    <li>
                        <Link to={"/Dandelion_SideEffects"}>Side Effects</Link>
                    </li>
                    <li>
                        <Link to={"/Dandelion_Dosage"}>Dosage</Link>
                    </li>
                    <li>
                        <Link to={"/Grow_Dandelion"}>Grow Dandelion</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Taraxacum(Dandelion)"
                        familyName="Asteraceae" origin="Eurasia"
                        geoLocation="Eurasia and North America" />
                    <div className="content-wrapper">
                        <h2>What are the benefits of using Dandelion?</h2>
                        <p>
                            Dandelion leaves, roots, and flowers may offer health benefits.
                            These can include promoting liver health, fighting inflammation and more:
                        </p>
                        <div>
                            <ul>
                                <li>Mostly medicine:</li>
                            </ul>
                        </div>
                        <p>
                            The leaves, roots, and flower add a pop of color to your plate, but
                            they are also often found in herbal teas and supplements, where they are
                            used as a natural remedy to support:
                        </p>
                        <div>
                            <ul>
                                <li>Blood sugar management</li>
                                <li>boost skin</li>
                                <li>liver</li>
                                <li>heart health</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="content-section2">
                    <h2>Health benefits:</h2>
                    <h3>Providing antioxidants:</h3>
                    <p>
                        Antioxidants work to neutralize the harmful effects of free radicals. The human
                        body produces free radicals naturally, but they cause harm by accelerating
                        aging or the progression of certain diseases.
                    </p>
                    <p>
                        Dandelions contain beta-carotene, which is an antioxidant that helps protect
                        cells from damage. Research shows that carotenoids such as beta-carotene play
                        a vital role in reducing cell damage.
                    </p>
                    <p>
                        The flower of the dandelion is also full of flavonoids and polyphenols, which are
                        other types of antioxidants.
                    </p>
                    <h3>Reducing Cholesterol:</h3>
                    <p>
                        Dandelions contain bioactive compounds that may help lower a person's
                        cholesterol. Research conducted in vivo and in vitro has shown that
                        dandelion may be able to help reduce blood lipids. This can include
                        lipids, including cholesterol and triglycerides. It is possible that
                        people can use dandelion to help treat high cholesterol.
                    </p>
                    <p>
                        Dandelions contain bioactive compounds that may help lower a person's
                        cholesterol. Dandelions contain high levels of the antioxidant beta
                        carotene, which may protect against cell damage and oxidative stress.
                    </p>
                    <p>
                        They are also rich in another type of antioxidants called polyphenols, which
                        are found mostly in the flower but occur in the roots, leaves, and stems
                        as well.
                    </p>
                    <h3>Fight inflammation:</h3>
                    <p>
                        Dandelion may reduce inflammation, thanks to certain compounds such as
                        polyphenols. Inflammation is a normal immune system response to injury
                        or infection. However, long-term inflammation may lead to permanent damage
                        to your body's tissues and DNA.
                    </p>
                    <h3>May aid in blood sugar management:</h3>
                    <p>
                        Chicoric and chlorogenic acid are two bioactive compounds in dandelion
                        that may help decrease blood sugar levels.
                    </p>
                    <h3>Lowering blood pressure:</h3>
                    <p>
                        Dandelion leaves are a good source of potassium. There is clinical evidence
                        that shows that potassium can help reduce blood pressure.
                    </p>
                    <p>
                        A <a href="https://pubmed.ncbi.nlm.nih.gov/26039623/" target="_blank">meta-analysis</a> of
                        15 randomized controlled trials found that people taking
                        a daily potassium supplement saw a significant reduction in their blood
                        pressure. The reduction in blood pressure was greater among people with
                        pre-existing high blood pressure.
                    </p>
                    <h3>Aiding weight loss:</h3>
                    <p>
                        Some researchers have proposed that dandelion could help people achieve
                        their weight loss goals. Researchers believe that compounds found
                        in the dandelion plant may promote improved carbohydrate metabolism
                        and reduced fat absorption.
                    </p>
                    <h3>Reducing cander risk:</h3>
                    <p>
                        Some limited, but positive, research has indicated that dandelion may help
                        reduce the growth of certain types of cancer.
                    </p>
                    <p>
                        So far, studies have looked at dandelion's impact on cancer growth in test
                        tubes and found that it may help with slowing the growth of certain cancers.
                    </p>
                    <p>
                        One study examining cancer growth in a test tube determined that dandelion
                        extract may help reduce the growth of liver cancer. Other research has
                        shown similar benefits for colon cancer, breast cancer, pancreatic cancer,
                        and prostate cancer.
                    </p>
                    <h3>Boosting the immune system:</h3>
                    <p>
                        There is growing evidence that suggests that dandelions can help boost the
                        immune system.
                    </p>
                    <p>
                        Researchers have found that dandelions show both antiviral and antibacterial
                        properties. For example, one 2014 study found that dandelions help limit
                        the growth of hepatitis B in both human and animal cells in test tubes.
                    </p>

                    <h3>Aiding digestion:</h3>
                    <p>
                        Some people use dandelion as a traditional remedy for constipation and other
                        digestion issues. A rodent study investigating the effect of dandelions on
                        digestion found that certain chemical compounds present in dandelions improved
                        gastric emptying.
                    </p>
                    <p>
                        The study saw a reduction in the resistance of food moving to the rodents'
                        small intestines. Researchers now need to see whether dandelion can have
                        the same effect on humans.
                    </p>
                    <h3>Keeping skin healthy:</h3>
                    <p>
                        Dandelion may help protect the skin from sun damage.
                        Ultraviolet (UV) light causes considerable damage to the skin
                        and contributes to skin aging. A 2015 study on skin cells in a
                        test tube found that dandelion could reduce the impact of one
                        type of damaging UV light.
                    </p>
                    <p>
                        Protecting the skin from UV damage can help protect the skin
                        from premature aging.
                    </p>
                    <h3>Promoting liver health:</h3>
                    <p>
                        dandelion may be able to help prevent and treat some liver diseases.
                        This includes acetaminophen-induced liver injury (AILI), nonalcoholic
                        fatty liver disease (NAFLD), and alcohol-related liver damage.
                    </p>
                    <p>
                        However, not all of the research was conducted in vivo or on humans, so
                        more studies are needed to determine if dandelion can actually be used
                        medicinally for these purposes.
                    </p>
                    <p>
                        Dandelion leaves are sometimes present in salads, but a person cannot
                        find them in all areas. Picking dandelions in a backyard is unsafe due
                        to the potential presence of pesticides or animal excrement.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Dandelion_Benefits;