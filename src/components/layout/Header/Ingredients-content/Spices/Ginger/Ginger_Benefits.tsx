import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Ginger_Benefits() {
    return (
        <>
            <IngredientNameHeading ingredientName="Ginger" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Ginger_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Ginger_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Ginger_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Ginger_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Ginger_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Ginger">Grow Ginger</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Ginger"
                        familyName="Zingiberaceae" origin="Southeast Asia"
                        geoLocation="All around the world" />
                    <div className="content-wrapper">
                        <h2>What are the benefits of using Ginger?</h2>
                        <p>
                            Ginger, the "root" or the rhizome, of the plant Zingiber officinale,
                            has been a popular spice and herbal medicine for thousands of years.
                            It has a long history of use in Asian, Indian, and Arabic herbal traditions.
                        </p>
                        <p>
                            In China, for example, ginger has been used to help digestion and treat
                            stomach upset, diarrhea, and nausea for more than 2000 years. Ginger has
                            also been used to help treat arthritis, colic, diarrhea, and heart conditions.
                            It has been used to help treat the common cold, flu-like symptoms, headaches,
                            and painful menstrual periods.
                        </p>
                        <p>
                            Ginger is native to Asia where it has been used as a cooking spice for at
                            least 4,400 years.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <h3>Fights germs:</h3>
                    <p>
                        Certain chemical compounds in fresh ginger help your body ward off germs. They are
                        especially good at halting growth of bacteria like E.coli and shigella, and they
                        may also keep viruses like RSV at bay.
                    </p>
                    <h3>Keeps your mouth Healthy:</h3>
                    <p>
                        Ginger's antibacterial power may also brighten your smile. Active compounds in
                        ginger called gingerols keep oral bacteria from growing. These bacteria are the
                        same ones that can cause periodontal disease, a serious gum infection.
                    </p>
                    <h3>Calms nausea:</h3>
                    <p>
                        The old wives' tale may be true: Ginger helps if you are trying to ease a
                        queasy stomach, especially during pregnancy. It may work by breaking up
                        and getting rid of built-up gas in your intestines. It might also help
                        settle seasickness or nausea caused by chemotherapy.
                    </p>
                    <h3>Soothes sore muscles:</h3>
                    <p>
                        Ginger will not whisk away muscle pain on the spot, but it may tame soreness
                        over time. In some studies, people with muscle aches from exercise who
                        took ginger had less pain the next day than those who did not.
                    </p>
                    <h3>Ease Arthiritis symptoms:</h3>
                    <p>
                        Ginger is an anti-inflammatory, which means it reduces swelling. That may be
                        especially helpful for treating symptoms of both rheumatoid arthritis and
                        osteoarthritis. You might get relief from pain and swelling either by taking
                        ginger by mouth or by using a ginger compress or patch on your skin.
                    </p>
                    <h3>Curbs cancer growth-Related:</h3>
                    <p>
                        Some studies show that bioactive molecules in ginger may slow down the
                        growth of some cancers like colorectal, gastric, ovarian, liver, skin,
                        breast, and prostate cancer. But much more research is needed to see
                        if this is true.
                    </p>
                    <h3>Lowers blood sugar:</h3>
                    <p>
                        One recent small study suggested that ginger may help your body use insulin
                        better. Larger studies are needed to see if ginger could help improve blood
                        sugar levels.
                    </p>
                    <h3>Eases period pains:</h3>
                    <p>
                        Got menstrual cramps? Ginger powder may help. In studies, women who took
                        1500 milligrams of ginger powder once a day for 3 days during their cycle
                        felt less pain than women who did not.
                    </p>
                    <h3>Lowers Cholesterol:</h3>
                    <p>
                        A daily dose of ginger may help you battle your bad or LDL cholesterol
                        levels. In a recent study, taking 5 grams of ginger a day for 3 months
                        lowered people's LDL cholesterol an average of 30 points.
                    </p>
                    <h3>Protects against disease:</h3>
                    <p>
                        Ginger is loaded with antioxidants, compounds that prevent stress and damage
                        to your body's DNA. They may help your body fight off chronic diseases like
                        high blood pressure, heart disease, and diseases of the lungs, plus promote
                        healthy aging.
                    </p>
                    <h3>Relieves Indegestion-Related:</h3>
                    <p>
                        If you live with chronic indigestion, also called dyspepsia, ginger could
                        bring some relief. Ginger before meals may make your system empty faster,
                        leaving less time for food to sit and cause problems.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Ginger_Benefits;