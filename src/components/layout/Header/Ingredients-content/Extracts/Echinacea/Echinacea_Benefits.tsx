import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Echinacea_Benefits() {
    return (
        <>
            <IngredientNameHeading ingredientName="Echinacea" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Echinacea_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Echinacea_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Echinacea_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Echinacea_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Echinacea_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Echinacea">Grow Echinacea</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Echinacea"
                        familyName="Asteraceae" origin="Native to Northern, Eastern and Central America"
                        geoLocation="Eastern and Central America only" />
                    <div className="content-wrapper">
                        <h2>What are the benefits of using Echinacea?</h2>
                        <p>
                            Echinacea is a genus of flowering plants commonly known as coneflowers.
                            Several species within this genus, such as Echinacea purpurea, Echinacea
                            angustifolia, and Echinacea pallida, have been used for medicinal purposes
                            for many years:
                        </p>
                        <div className="ingredient-benefits">
                            <ul>
                                <li>Immune system support:</li>
                                <li>Anti-Inflammatory Effects:</li>
                                <li>Wound Healing:</li>
                                <li>Antioxidant Properties:</li>
                            </ul>
                            <ul>
                                <li>Pain Relief:</li>
                                <li>Urinary Tract Infections:</li>
                                <li>Skin Health:</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="content-section2">
                    <h2>Health benefits include:</h2>
                    <h3>Immune system support:</h3>
                    <p>
                        Echinacea is perhaps most well-known for its purported immune-boosting
                        properties. It is believed to stimulate the activity of immune cells, such as white blood cells, which can help the body fight off infections and illnesses like the common cold and flu.
                    </p>
                    <h3>Cold and Respiratory Infections:</h3>
                    <p>
                        Some studies suggest that echinacea may help reduce the severity and duration of colds and upper respiratory tract infections. It may also provide relief from symptoms like cough, sore throat, and congestion.
                    </p>
                    <h3>Anti-Inflammatory Effects:</h3>
                    <p>
                        Echinacea contains compounds with anti-inflammatory properties,
                        which can help reduce inflammation and associated symptoms. This makes it
                        potentially useful for conditions like arthritis and skin inflammation.
                    </p>
                    <h3>Wound Healing:</h3>
                    <p>
                        Echinacea has been applied topically to wounds and skin conditions like
                        burns and eczema to promote healing. Its anti-inflammatory and
                        antimicrobial properties may help in this regard.
                    </p>
                    <h3>Antioxidant Properties:</h3>
                    <p>
                        The plant contains antioxidants, such as flavonoids, that can help
                        protect the body from oxidative stress and damage caused by free radicals.
                        This may contribute to its overall health benefits.
                    </p>
                    <h3>Pain Relief:</h3>
                    <p>
                        Some individuals use echinacea for pain relief, especially for conditions
                        involving headaches, toothaches, or general discomfort.
                    </p>
                    <h3>Urinary Tract Infections:</h3>
                    <p>
                        Echinacea may have a role in preventing or managing urinary tract infections
                        (UTIs) due to its potential antimicrobial effects.
                    </p>
                    <h3>Skin Health:</h3>
                    <p>
                        Echinacea creams or ointments are sometimes used for conditions like acne
                        or psoriasis due to its anti-inflammatory and antimicrobial properties.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Echinacea_Benefits;