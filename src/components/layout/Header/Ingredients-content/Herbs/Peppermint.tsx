import "../../../../../App.css";
import Ingredient from "../Ingredient";
import IngredientNameHeading from "../Ingredient-heading";

function Ingredient_Overview() {
    return (
        <>
            <div className="flex-content">
                <Ingredient ingredientName="Peppermint"
                    familyName="Lamiaceae" origin="Europe and Middle East"
                    geoLocation="North America, Europe and Middle East" />
                <div className="content-wrapper">
                    <h2>What is Peppermint?</h2>
                    <p>
                        Peppermint is an aromatic herb in the mint family. It is a hybrid mint that's a
                        cross between spearmint and watermint. It can be found naturally in North
                        America and Europe.
                    </p>
                    <p>
                        Peppermint typically occurs in moist habitats, which include stream sides and
                        drainage ditches. As a hybrid, peppermint is usually sterile, producing no seeds
                        and reproducing only vegetatively, spreading by its runners.

                        Outside of its native range, areas where peppermint was formerly grown for oil
                        often have an abundance of feral plants, it is considered invasive in
                        Australia, the Galápagos Islands, New Zealand, and the United States in the
                        Great Lakes region, kept record of since 1843.
                    </p>
                </div>
            </div>
            <div className="content-section2">
                <p>
                    Peppermint (Mentha, piperita) is a hybrid species of mint, a cross between
                    watermint and spearmint. Native to Europe and the Middle East, and the plant is
                    now widely spread and cultivated in many regions of the world. It is occasionally
                    found in the wild with its parent species. Although the genus Mentha comprises
                    more than 25 species, the one in most common use is peppermint. While Western
                    peppermint is derived from Mentha and piperita, Chinese peppermint, or bohe,
                    is derived from the fresh leaves of M. haplocalyx. M. piperita and M. haplocalyx
                    are both recognized as plant sources of menthol and menthone, and are among
                    the oldest herbs used for both culinary and medicinal products.
                </p>
            </div>
        </>
    )
}

function Ingredient_HowToUse() {
    return (
        <>
            <div className="flex-content">
                <Ingredient ingredientName="Peppermint"
                    familyName="Lamiaceae" origin="Europe and Middle East"
                    geoLocation="North America, Europe and Middle East" />
                <div className="content-wrapper">
                    <h2>How is Peppermint used?</h2>
                    <p>
                        Peppermint is used as:
                    </p>
                    <ol>
                        <li>Foods, Beverages and Desserts</li>
                        <li>Medicine</li>
                        <li>Aromatherapy</li>
                        <li>Personal care</li>
                        <li>Pest control</li>
                        <li>Home remedies</li>
                    </ol>
                </div>
            </div>
            <div className="content-section2">
                <h2>Detailed information for above list usage:</h2>
                <h3>Foods, Benefits and Desserts:</h3>
                <ul>
                    <li>Fresh Leaves:
                        <dt>Fresh peppermint leaves can be used in salads, as a
                            garnish for desserts, or infused in water to make a refreshing
                            beverage.
                        </dt>
                    </li>
                    <li>
                        Dried Leaves:
                        <dt>
                            Dried peppermint leaves are often used to make peppermint tea.
                            Simply steep a teaspoon of dried leaves in hot water for several
                            minutes, then strain and enjoy.
                        </dt>
                    </li>
                    <li>Peppermint Extract:
                        <dt>
                            Peppermint extract is a concentrated form of peppermint flavor
                            and is commonly used in baking. Add a few drops to your cookie,
                            cake, or icing recipes for a minty flavor.
                        </dt>
                    </li>
                    <li>
                        Candies and Desserts:
                        <dt>
                            Peppermint candies, such as peppermint sticks
                            or candy canes, are popular holiday treats. Crushed peppermint candies
                            are also used as toppings for desserts like ice cream or hot chocolate.
                        </dt>
                    </li>
                </ul>
                <h3>Medicine:</h3>
                <ul>
                    <li>
                        Peppermint Oil:
                        <dt>
                            Peppermint oil is used for various medicinal purposes. It can be applied
                            topically when diluted with a carrier oil to soothe sore muscles or
                            relieve headaches. It can also be ingested in the form of enteric-coated
                            capsules for digestive issues like indigestion or IBS symptoms.
                        </dt>
                    </li>
                    <li>
                        Peppermint Tea:
                        <dt>
                            Peppermint tea is a common remedy for digestive problems. Steep peppermint
                            tea bags or dried leaves in hot water for about 5-10 minutes and drink it
                            to soothe an upset stomach or alleviate gas.
                        </dt>
                    </li>
                </ul>
                <h3>Aromatherapy:</h3>
                <ul>
                    <li>
                        Essential Oil:
                        <dt>
                            Peppermint essential oil is used in aromatherapy. You can diffuse it in an
                            essential oil diffuser to create a refreshing and invigorating atmosphere.
                            Inhaling the aroma may help improve mental clarity and reduce fatigue.
                        </dt>
                    </li>
                </ul>
                <h3>Personal care:</h3>
                <ul>
                    <li>
                        Toothpaste and Mouthwash:
                        <dt>
                            Many toothpaste and mouthwash products contain peppermint for its
                            freshening and breath-cleansing properties.
                        </dt>
                    </li>
                    <li>
                        Skincare:
                        <dt>
                            Some skincare products, such as creams and lotions, contain peppermint oil
                            for its cooling and soothing effects on the skin.
                        </dt>
                    </li>
                </ul>
                <h3>Pest control:</h3>
                <ul>
                    <li>
                        Gardening:
                        <dt>
                            Planting peppermint in your garden can help deter pests like ants and aphids
                            due to its strong scent.
                        </dt>
                    </li>
                </ul>
                <h3>Home remedies:</h3>
                <ul>
                    <li>
                        Steam Inhalation:
                        <dt>
                            Inhaling steam with a few drops of peppermint essential oil can help clear
                            nasal congestion and soothe respiratory discomfort.
                        </dt>
                    </li>
                    <li>
                        Compresses:
                        <dt>
                            You can make a peppermint-infused warm or cold compress to relieve muscle
                            aches or headaches. Soak a cloth in water mixed with a few drops of
                            peppermint oil, then apply it to the affected area.
                        </dt>
                    </li>
                </ul>
            </div>
        </>
    )
}

function Ingredient_Benefits() {
    return (
        <>
            <div className="flex-content">
                <Ingredient ingredientName="Peppermint"
                    familyName="Lamiaceae" origin="Europe and Middle East"
                    geoLocation="North America, Europe and Middle East" />
                <div className="content-wrapper">
                    <h2>Health Benefits of using Peppermint help reduce symptoms like:</h2>
                    <div className="ingredient-benefits">
                        <ul>
                            <li>flatulence(gas)</li>
                            <li>menstrual pain</li>
                            <li>diarrhea</li>
                            <li>nausea</li>
                        </ul>
                        <ul>
                            <li>depression-related anxiety</li>
                            <li>muscle and nerve pain</li>
                            <li>symptoms of the common cold</li>
                            <li>indigestion</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="content-section2">
                <h2>Additional Health Benefits:</h2>
                <ol>
                    <li>Relieves Indigestion:
                        <p>
                            IBS Relief:
                            <dt>
                                Some studies suggest that peppermint oil capsules may reduce the
                                symptoms of irritable bowel syndrome (IBS), such as abdominal pain and bowel
                                irregularity.
                            </dt>
                        </p>
                        <p>
                            Eases Nausea:
                            <dt>
                                Peppermint tea or candies can help reduce nausea and motion
                                sickness.
                            </dt>
                        </p>
                    </li>
                    <li>
                        <p>Pain Relief:
                            <dt>
                                Headache Relief: Peppermint oil applied topically or inhaled
                                may help relieve tension headaches and migraines.
                            </dt>
                        </p>
                        <p>
                            <dt>
                                Muscle Relaxation: Peppermint oil, when diluted and massaged onto
                                sore muscles, may provide relief from muscle pain and tension.
                            </dt>
                        </p>
                    </li>
                    <li> Respiratory Health:
                        <p>
                            Clears Congestion:
                            <dt>Inhaling the vapor from peppermint tea or essential oil
                                can help clear nasal congestion and open up airways.
                            </dt>
                        </p>
                        <p>
                            Soothes Sore Throat:
                            <dt>Peppermint tea can have a soothing effect on a sore
                                throat.
                            </dt>
                        </p>
                    </li>
                    <li>Mental Clarity and Alertness:
                        <p>
                            Aromatherapy:
                            <dt>
                                Inhaling the aroma of peppermint essential oil through
                                aromatherapy can improve mental clarity, focus, and alertness.
                            </dt>
                        </p>
                    </li>
                    <li>
                        Antioxidant Properties:
                        <p>
                            <dt>
                                Peppermint contains antioxidants that can help protect cells from
                                oxidative stress and damage caused by free radicals.
                            </dt>
                        </p>
                    </li>
                    <li>
                        Antibacterial and Antiviral Properties:
                        <p>
                            <dt>
                                The essential oils in peppermint have been studied for their potential
                                antibacterial and antiviral effects, which may help in fighting infections.
                            </dt>
                        </p>
                    </li>
                    <li>Weight Management:
                        <p>
                            <dt>
                                Some research suggests that the aroma of peppermint may help reduce
                                appetite and food cravings, potentially aiding in weight management.
                            </dt>
                        </p>
                    </li>
                    <li>Oral Health:
                        <p>
                            Fresh Breath:
                            <dt>
                                Peppermint is commonly used in oral care products like
                                toothpaste and mouthwash for its breath-freshening properties.
                            </dt>
                        </p>
                        <p>
                            Anti-inflammatory:
                            <dt>
                                It may have anti-inflammatory effects that can
                                benefit oral health.
                            </dt>
                        </p>
                    </li>
                    <li>Stress Reduction:
                        <p>
                            <dt>
                                Peppermint's aroma can have a calming effect and
                                may help reduce stress and anxiety levels.
                            </dt>
                        </p>
                    </li>
                    <li>Skin Health:
                        <p>
                            <dt>
                                Peppermint oil, when diluted, can be used topically to
                                soothe skin irritation and itching.
                            </dt>
                        </p>
                    </li>
                </ol>
            </div>
        </>
    )
}

function Ingredient_SideEffects() {
    return (
        <>
            <div className="flex-content">
                <Ingredient ingredientName="Peppermint"
                    familyName="Lamiaceae" origin="Europe and Middle East"
                    geoLocation="North America, Europe and Middle East" />
                <div className="content-wrapper">
                    <h2>What are the side effects is using Peppermint?</h2>
                    <p>
                        The following Side affects include:
                    </p>
                    <ul>
                        <li>Heartburn, nausea, and vomiting in patients with IBS, after
                            taking peppermint oil.
                        </li>
                        <li>Dermatitis following external application of peppermint oil.</li>
                        <li>Toxicity: Acute lung injury has been reported following intravenous
                            injection of peppermint oil.
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

function Ingredient_Dosage() {
    return (
        <>
            <div className="flex-content">
                <Ingredient ingredientName="Peppermint"
                    familyName="Lamiaceae" origin="Europe and Middle East"
                    geoLocation="North America, Europe and Middle East" />
                <div className="content-wrapper">
                    <h2>What is the recommended dosage for using Peppermint?</h2>
                    <ul>
                        <li>Peppermint Tea</li>
                        <li>Peppermint Essential Oil</li>
                        <li>Peppermint Oil Capsules (Enteric-Coated):</li>
                        <li>Fresh or Dried Peppermint Leaves:</li>
                    </ul>
                </div>
            </div>
            <div className="content-section2">
                <div className="ingredient-benefits">
                    <ol>
                        <li>Peppermint Tea:
                            <ul>
                                <li>You typically use 1 to 2 teaspoons of dried peppermint leaves per
                                    8 ounces (240 ml) of hot water. Steep the leaves for about 5-10
                                    minutes, then strain and drink. You can drink peppermint tea up
                                    to 3 times a day, especially for digestive issues or relaxation.
                                </li>
                            </ul>
                        </li>
                        <li>Peppermint Essential Oil:
                            <ul>
                                <li>When using peppermint essential oil topically, it's important to
                                    dilute it with a carrier oil (such as coconut oil or almond oil)
                                    to avoid skin irritation. A common dilution ratio is 1-2 drops of
                                    peppermint oil per tablespoon of carrier oil. For massage, use the
                                    diluted oil sparingly, as the menthol in peppermint oil can have a
                                    cooling and sometimes intense sensation on the skin.
                                </li>
                            </ul>
                        </li>
                        <li>Peppermint Oil Capsules (Enteric-Coated):
                            <ul>
                                <li>If you are using peppermint oil capsules for digestive issues like
                                    irritable bowel syndrome (IBS), it's essential to follow the
                                    manufacturer's recommended dosage, typically 0.2-0.4 ml (200-400 mg)
                                    per capsule. The usual recommendation is to take one capsule before
                                    meals, up to three times a day, as directed by your healthcare
                                    provider.
                                </li>
                            </ul>
                        </li>
                        <li>Fresh or Dried Peppermint Leaves:
                            <ul>
                                <li>When using fresh peppermint leaves in cooking or as a garnish,
                                    there's no strict dosage. Use the leaves to suit your taste and the
                                    recipe. For dried peppermint leaves in tea, as mentioned earlier, 1
                                    to 2 teaspoons per cup of hot water is a common guideline.
                                </li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </div>
        </>
    )
}

function GrowIngredient() {
    return (
        <>
            <div className="flex-content">
                <Ingredient ingredientName="Peppermint"
                    familyName="Lamiaceae" origin="Europe and Middle East"
                    geoLocation="North America, Europe and Middle East" />
                <div className="content-wrapper">
                    <h2>How do I grow Peppermint at home in my Garden?</h2>
                    <p>
                        Peppermint generally grows best in moist, shaded locations ,and expands by
                        underground rhizomes. Young shoots are taken from old stocks and dibbled
                        into the ground about 0.5 m (1.5 ft) apart.
                    </p>
                </div>
            </div>
            <div className="content-section2">
                <h2>When to Plant Peppermint:</h2>
                <p>
                    Mint is a prodigious and invasive grower in many different types of climates,
                    so consider planting your peppermint inside in a container instead of your
                    herb garden. Peppermint should be planted in early spring after the last frost
                    of the winter has passed. Peppermint grows in USDA hardiness zones 5 to 9.
                    It can tolerate quick spurts of frost, but cannot survive temperatures that
                    stay cold for extended periods of time.
                </p>
                <p>
                    Growing peppermint is faster when you propagate it from cuttings rather than
                    planting from mint seeds. Follow these steps to plant and grow your own
                    peppermint at home.
                </p>
                <ol>
                    <li>
                        Prepare your stem cutting. To start propagating your new plants, cut a
                        five to six inch piece of peppermint from a plant that is already
                        established. Remove the leaves from the bottom two inches of the piece.
                        Place your stems in a glass of water that is placed in the full sun.
                        When it has new roots that are a couple inches long, it is ready to
                        plant.
                    </li>
                    <li>
                        Choose your container. Many people choose to grow peppermint in a container
                        because it can easily take over a garden bed. Go with a plastic container
                        to keep the soil moist, because peppermint thrives in consistently-moist
                        soil.
                    </li>
                    <li>
                        Fill your container with soil. Fill your container with moist potting
                        soil. If you are growing your peppermint indoors, do not use manure or
                        emulsion. A layer of mulch can help the soil retain moisture. Place
                        your container in a location that gets full sunlight.
                    </li>
                    <li>Plant your peppermint stems. Carefully plant each cutting in the moist
                        soil, spacing the stems at least 10 inches apart.
                    </li>
                    <li>Regularly water your peppermint. Unlike other plants, you should not allow
                        peppermint soil to dry out between waterings. The soil should always be
                        moist. Water your peppermint everyday or every other day.
                    </li>
                    <li>Harvest your peppermint. When your peppermint leaves are fragrant, they
                        are ready to harvest. For small harvests, simply pinch or snip off the
                        fresh leaves or sprigs you would like to remove. For larger harvests, cut
                        the entire plant down to just above the first set of leaves. This removes
                        the lower leaves, which may have already begun to yellow, and helps the plant
                        grow bushier for the second or third harvest.
                    </li>
                </ol>
                <h3>Care Tips for growing Peppermint:</h3>
                <p>
                    Peppermint is a hardy plant, but it still requires attention and care.
                    Here are some tips for growing your peppermint:
                </p>
                <ol>
                    <li>Prune your peppermint regularly. Peppermint is a wild grower that you will need
                        to prune to make sure your leaves are flavorful and to ensure healthy new growth.
                        Prune the top half of your plant back before and during its growing season in late
                        spring to mid-summer. Keep an eye out for stems that appear 'woody' or dry and
                        remove them. Cut back and replace your peppermint plants every two to three years.
                        You may also remove flower buds to keep the leaves at peak oil concentration.
                    </li>
                    <li>Give your plant enough light. As long as the soil is moist, peppermint prefers
                        exposure to full sun which helps the plant produce its oils. They can tolerate
                        partial shade, but the flavor is strongest when your plant receives full sun.
                    </li>
                    <li>Keep the soil moist. Peppermint is not as susceptible to root rot as many other
                        plants, and it thrives in moist soil. Make sure that this thirsty plant gets
                        enough water.
                    </li>
                    <li>Monitor your plant for pests. Mint plants usually repel pests like deer and
                        rodents, smaller insects such as aphids and spider mites. Spray your plants
                        with a hose to knock them off your plant.
                    </li>
                </ol>
                <h2>When to Harvest Peppermint:</h2>
                <p>
                    Depending on the health of your plant, peppermint can be harvested two to three
                    times per growing season. The ideal time to harvest is right before your plant
                    begins to bloom. This is when the oil concentration in the leaves is its highest.
                </p>
            </div>
        </>
    )
}

function Peppermint() {
    return (
        <>
            <IngredientNameHeading ingredientName="Peppermint" />
            <div className="ingredient-hub">
                <ul>
                    <li>Overview</li>
                    <li>How to use</li>
                    <li>Benefits</li>
                    <li>Side Affects</li>
                    <li>Dosage</li>
                    <li>Grow Peppermint</li>
                </ul>
            </div>
            <div className="component-content-rendering">
                {/* Components will be rendered here using react-router-dom <Link> components*/}
                <Ingredient_Overview />
                <Ingredient_HowToUse />
                <Ingredient_Benefits />
                <Ingredient_SideEffects />
                <Ingredient_Dosage />
                <GrowIngredient />
            </div>
        </>
    )
}

export default Peppermint;