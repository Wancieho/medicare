import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Grow_Ginseng() {
    return (
        <>
            <IngredientNameHeading ingredientName="Ginseng" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Ginseng_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Ginseng_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Ginseng_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Ginseng_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Ginseng_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Ginseng">Grow Ginseng</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Ginseng"
                        familyName="Araliaceae" origin="Shangdang China"
                        geoLocation="Asia, Japan and Canada" />
                    <div className="content-wrapper">
                        <h2>How do I grow Ginseng?</h2>
                        <p>First of all there are three types of Ginseng:</p>
                        <div className="ingredient-benefits">
                            <ul>
                                <li>Asian Ginseng</li>
                                <li>Japanese Ginseng</li>
                                <li>American Ginseng</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="content-section2">
                    <h3>How to plant Ginseng:</h3>
                    <p>
                        To prepare your site, remove low branches of trees to promote air movement
                        and be sure your soil has plenty of incorporated organic matter. Well-composted
                        leaf litter is an excellent addition.
                    </p>
                    <p>
                        Ginseng can be grown from seed or seedling. Purchase good quality seed that
                        has been stratified (gone through a cold period) for fastest germination,
                    </p>
                    <p>
                        There is an advantage to starting with ginseng seedlings instead of seeds
                        which are more widely available these days and may be planted in spring or
                        fall. One or two year old seedlings will speed up the time to maturity, when
                        the root is large enough to harvest, which is a minimum of five years old.
                    </p>
                    <h3>Can I grow Ginseng in a container?</h3>
                    <p>
                        Ginseng may be grown in a container, especially in its early years and as
                        seedlings. Select a container that has a drainage hole. Use a loamy soil
                        mix and plant your seeds about one-and-a-half inches deep. Site the
                        container in a shady spot, keep it watered, and leave it outdoors in
                        winter. Bury [the container] a few inches into the ground and mulch to
                        mimic a wild plant going through a cold period mulched with litter from the
                        fall of autumn leaves.
                    </p>
                    <p>
                        Ginseng is not a good choice for growing indoors. It prefers a well-drained
                        forest soil, good air flow, and needs to go through the cycles of the seasons
                        including cold dormancies, where the leaves and stem of the plant die back
                        to the ground in the fall, to reemerge in the spring.
                    </p>
                    <h3>Harvesting Ginseng:</h3>
                    <p>
                        Ginseng is a slow grower, even in the best of conditions. Ginseng plants
                        may grow for decades and can be aged by counting the neck scars left on the
                        top of the root from each growing season's stem.
                    </p>
                    <p>
                        It will likely be 5-10 years before you can harvest a decent root. Roots should
                        be dug in the fall as the leaves begin to die. Gently wash off your harvested
                        roots, then place them on a screen to dry in a well-ventilated area out of
                        direct sunlight. Rotate them occasionally so they dry evenly. Drying usually
                        takes two to four weeks, although large roots may take longer. Store your roots
                        in a ventilated box or basket.
                    </p>
                    <h3>Why is there a red and white Ginseng?</h3>
                    <p>
                        The difference in colour comes down to how ginseng is treated. White ginseng
                        is naturally dried in the sun. Red ginseng is steam heated between 100-110
                        degrees for 2-3 hours. This treatment kills any potential pathogens on the
                        plant's roots. The downside is that it degrades some of the active components
                        which are found in the outer layers of bark.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Grow_Ginseng;