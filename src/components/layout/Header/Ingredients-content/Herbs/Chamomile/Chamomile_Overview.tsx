import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Chamomile_Overview() {
    return (
        <>
            <IngredientNameHeading ingredientName="Chamomile" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Chamomile_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Chamomile_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Chamomile_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Chamomile_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Chamomile_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Chamomile">Grow Chamomile</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Chamomile"
                        familyName="Asteraceae" origin="Europe and western Asia"
                        geoLocation="Europe and western Asia" />
                    <div className="content-wrapper">
                        <h2>What is Chamomile ?</h2>
                        <p>
                            Chamomile is a plant which is used as a herb for medicinal tea purposes.
                            Its related names: Chamaemelum nobile(Roman chamomile), Matricaria
                            recutita(German chamomile), belong to the Asteraceae family of flowering
                            plants that include daisies and sunflowers, but the most common variety
                            is the German Chamomile which is native to Europe and western Asia but
                            has also been found around the globe over the years.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <p>
                        Given the sun-like appearance of chamomile blossoms, which are typically
                        yellow in the middle with ray-like white blossoms radiating outward, it
                        should come as no surprise that the ancient Egyptians used it in
                        offerings to the sun god Ra and burned it as incense according to
                        Chamomile: Medicinal, Biochemical, and Agricultural Aspects.
                        During the Middle Ages, Europeans used it as an air freshener and a
                        cure-all for health ailments
                    </p>
                    <h2>German Chamomile versus Roman Chamomile:</h2>
                    <p>
                        As a result they aren't just different species of flowering asteraceae, but
                        they also have similar repuations for medicinal powers:
                        <span className="span-em">
                            "German Chamomile is said to have a more sweet straw-like taste and Roman
                            more light fresh apple type frgrance"
                        </span>
                        German chamomile, which is the more widely used of the two, is an annual herb
                        also known as Hungarian chmomile.
                    </p>
                    <p>
                        Also the taller type of chamomile, the German variety reaches up to 3 feet tall and
                        grows in a bush-like shrub. It has sparse, fernlike green leaves and silver-white
                        petals blooming from a hollow receptacle. Its essential oil is dark blue, according
                        to Herbal Medicine: Biomolecular and Clinical Aspects, and it's thought to have
                        anti-inflammatory, anti-spasmodic, and anti-microbial properties, in part due to the
                        chemical compounds bisabolol and azulene.
                    </p>
                    <p>
                        The following groups should avoid chamomile unless advised otherwise by a doctor:
                    </p>
                    <ul>
                        <li>People with a history of severe allergies:
                            <dt>
                                Chamomile may not be safe for people who have a known allergy to ragwort, daisy,
                                chrysanthemum, or marigolds, which are related
                                plants.
                                It may cause a severe reaction known as anaphylaxis.
                            </dt>
                        </li>
                        <li>
                            People who have previously had an allergic reaction, even mild, to
                            chamomile products:
                            <dt>
                                They should avoid chamomile, as allergic reactions can get worse
                                with time.
                            </dt>
                        </li>
                        <li>Drug interactions:
                            <dt>Chamomile can interact with blood-thinning drugs, such as warfarin.
                                A person should check with a doctor before increasing their intake of
                                chamomile, especially if they have an existing health issue.
                            </dt>
                        </li>
                        <li>Infants and very young children:
                            <dt>Chamomile tea, similar to honey and some other natural
                                products, may contain botulism spores. Most healthy adults can fight off a botulism
                                infection, but infants may not be able to. Many doctors recommend infants and young
                                children avoid honey and chamomile products.
                                It is not safe to use chamomile as a substitute for proven medical treatments. If someone
                                takes any medications, they should ask their doctor about potential interactions with
                                chamomile tea.
                            </dt>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Chamomile_Overview;