import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";


function Licorice_HowToUse() {
    return (
        <>
            <IngredientNameHeading ingredientName="Licorice" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Licorice_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Licorice_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Licorice_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Licorice_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Licorice_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Licorice">Grow Licorice</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Liquorice(Licorice)"
                        familyName="Fabaceae" origin="Native to Western Asia, North Africa, 
                    and Southern Europe"
                        geoLocation="Western Asia, North Africa, 
                    and Southern Europe" />
                    <div className="content-wrapper">
                        <h2>How is Licorice used?</h2>
                        <p>
                            Licorice is used:
                        </p>
                        <div className="ingredient-benefits">
                            <ul>
                                <li>As a flavoring in candy</li>
                                <li>As an ingredient for tabacco products</li>
                                <li>In medicine</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="content-section2">
                    <h3>Flavoring in candy:</h3>
                    <h4>
                        <a target="_blank"
                            href="https://licorice.com/blogs/news/learn-about-the-different-types-of-licorice#:~:text=Licorice%20comes%20in%20so%20many,%2C%20salty%2C%20and%20sour%20licorice.">Licorice
                            with its favorite candies:</a>
                    </h4>
                    <ul>
                        <li>Red Licorice</li>
                        <li>Black Licorice</li>
                        <li>Salty Licorice</li>
                        <li>Sour Licorice</li>
                    </ul>
                    <h3>Tabacco products:</h3>
                    <p>
                        Licorice is known for its sweet and slightly anise-like flavor. In the
                        tobacco industry, it may be used as a flavoring agent to impart a
                        distinctive taste to tobacco products. Licorice flavoring can be found in
                        various types of tobacco products, including cigarettes, cigars, and pipe
                        tobacco.
                    </p>
                    <p>
                        Licorice extract, often referred to as licorice juice or
                        licorice molasses, contains glycyrrhizinic acid, which can help retain moisture
                        in tobacco. This moisture-retaining property can affect the texture and burn
                        characteristics of tobacco products.
                    </p>
                    <p>
                        Licorice may be blended with other herbs, spices, or
                        flavorings to create unique and aromatic tobacco blends. These blends are
                        often used in herbal smoking products and are marketed as alternatives to
                        traditional tobacco.
                    </p>
                    <h3>Medicine:</h3>
                    <p>
                        What is Licorice Root? Well it is the root of the plant which is often
                        added to herbal teas to enhance the flavor which has been used for centuries
                        in ancient like Egypt, Europe, and Asia. You can find licorice root
                        tea in health food stores and some supermarkets. You may be able to
                        find licorice root in some health food shops if you would like to make
                        the tea yourself.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Licorice_HowToUse;