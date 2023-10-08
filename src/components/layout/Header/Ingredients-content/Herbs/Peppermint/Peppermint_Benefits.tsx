import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Peppermint_Benefits() {
    return (
        <>
            <IngredientNameHeading ingredientName="Peppermint" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Peppermint_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Peppermint_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Peppermint_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Peppermint_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Peppermint_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Peppermint">Grow Peppermint</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
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
            </div>
        </>
    )
}

export default Peppermint_Benefits;