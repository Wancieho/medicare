import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Peppermint_Overview() {
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
            </div>
        </>
    )
}

export default Peppermint_Overview;