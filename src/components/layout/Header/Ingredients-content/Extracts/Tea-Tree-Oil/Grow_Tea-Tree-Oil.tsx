import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Grow_Tea_Tree_Oil() {
    return (
        <>
            <IngredientNameHeading ingredientName="Tea-Tree-Oil" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Tea-Tree-Oil_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Tea-Tree-Oil_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Tea-Tree-Oil_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Tea-Tree-Oil_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Tea-Tree-Oil_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Tea-Tree-Oil">Grow Tea Tree Oil</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Tea tree oil(Melaleuca oil)"
                        familyName="Myrtaceae" origin="Native to Australia"
                        geoLocation="Southeast coast of Australia" />
                    <div className="content-wrapper">
                        <h2>How do I grow Tea-Tree-Oil?</h2>
                        <p>
                            The tea tree (Melaleuca alternifolia) is a small evergreen that likes warm climes. It is
                            attractive and fragrant, with a definitely exotic look. Herbalists swear by tea tree oil,
                            made from its foliage. For more information on melaleuca tea trees, including tips on
                            growing a tea tree, read on.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <h3>About Melaleuca Tea Trees:</h3>
                    <p>
                        Tea trees are native to the warmer regions of Australia
                        where they grow wild in tropical and subtropical swampy areas.
                    </p>
                    <p>
                        You will find many different types of tea trees, each with its own dramatic variations in
                        needle and blossom shades. Melaleuca tea trees attract attention in your garden.
                        Tea tree information suggests that one of the most attractive features is the trunk,
                        with its gorgeous, papery bark.
                    </p>
                    <p>
                        If you are thinking of growing a tea tree, note that the tree can get 20 feet (6 m.)
                        tall. It spreads out too, to 10 or 15 feet (3-5 m.) wide. Be sure to site it with
                        enough room to grow, or else keep the pruners handy.
                    </p>
                    <h3>Growing a Tea Tree:</h3>
                    <p>
                        If you live where the weather is warm, you can plant melaleuca tea
                        trees in your garden. Otherwise, growing a tea tree in a container is a valid alternative.
                        You can position it in outdoor sun during summer, then move it inside for winter. When you
                        are growing a tea tree, you may be surprised by how fast your tree develops. Tea tree
                        information tells us that Melaleuca tea trees in warm locations can grow several feet
                        (1 m.) a season. Tea trees in cooler regions wo not grow as fast.
                    </p>
                    <p>
                        How to Care for Tea Trees When you are learning how to care for tea trees, think warmth.
                        Do not plant Melaleuca tea trees outside in your garden unless you live in U.S. Department
                        of Agriculture plant hardiness zone 8 or above. The trees need sun to thrive, whether
                        they are planted indoors or out. They will not be happy in shade. As far as soil goes,
                        make sure it drains easily. The plants just wo not thrive if drainage is limited. Grow
                        them in acidic or neutral soil that is moist. Speaking of do not forget irrigation.
                    </p>
                    <p>
                        Even outdoor plants need watering during dry spells. For those growing a tea tree in a
                        container, regular irrigation is essential. Tea trees are not one of those potted plants
                        that like drying out between drinks. Keep that soil a bit moist at all times.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Grow_Tea_Tree_Oil;