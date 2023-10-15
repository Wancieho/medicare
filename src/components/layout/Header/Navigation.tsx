import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
    const [mouseEvents, setMouseEvents] = useState(false);
    const handleMouseClick = () => {
        setMouseEvents(true);
    }
    const handleMouseLeave = () => {
        setMouseEvents(false);
    }
    return (
        <>
            <div id="material-container">
                <div className="natural-material-wrapper">
                    <div id="wrap-outer-layer-header">
                        {/* {<div id="wrap-inner-layer-header">
                            <div id="logo-search-container">
                                <input className="inputsearch" type="search" max="50" autoComplete="false" />
                                <input className="inputsearch" type="submit" value="Search" />
                            </div>
                        </div>} 
                        reserved for future use
                        */}
                        <div id="header-right-side">
                            <div id="flex-items">
                                {mouseEvents ?
                                    <button id="ingredients-btn2"
                                        onClick={handleMouseLeave}>&times;
                                    </button> :
                                    <button id="ingredients-btn1"
                                        onClick={handleMouseClick}>&#9776;
                                    </button>}
                            </div>
                            <div className="wrap-material-container">
                                <div id="material-container"
                                    className={mouseEvents ? 'visibles' : 'invisibles'}>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={mouseEvents ? "natural-material-links" : "false "}>
                        {mouseEvents ? <>
                            <div className="natural-material">
                                <p>Herbs</p>
                                <Link to="/Astragalus" >Astragalus</Link>
                                <Link to="/Chamomile" >Chamomile</Link>
                                <Link to="/Lavender" >Lavender</Link>
                                <Link to="/Lemon-Balm" >Lemon-Balm</Link>
                                <Link to="/Peppermint" >Peppermint</Link>
                                <Link to="/Rosemary" >Rosemary</Link>
                            </div>
                            <div className="natural-material">
                                <p>Extracts</p>
                                <Link to="/Dandelion" >Dandelion</Link>
                                <Link to="/Echinacea" >Echinacea</Link>
                                <Link to="/Tea-Tree-Oil" >Tea Tree Oil</Link>
                            </div>
                            <div className="natural-material">
                                <p>Spices</p>
                                <Link to="/Ginger" >Ginger</Link>
                                <Link to="/Turmeric" >Turmeric</Link>
                            </div>
                            <div className="natural-material">
                                <p>Plants</p>
                                <Link to="/FlaxSeeds" >Flax Seeds</Link>
                                <Link to="/Ginseng" >Ginseng</Link>
                                <Link to="/Licorice" >Licorice</Link>
                            </div>
                            <div className="natural-material">
                                <p>Vegetables</p>
                                <Link to="/Broccoli" >Broccoli</Link>
                                <Link to="/Garlic" >Garlic</Link>
                            </div>
                            <div className="natural-material">
                                <p>Fruit</p>
                                <Link to="/Grape-Seeds" >Grape-Seeds</Link>
                                <Link to="/Kiwi" >Kiwi</Link>
                                <Link to="/Strawberry" >Strawberry</Link>
                            </div>
                        </> : ""}
                    </div>
                </div>
                <Outlet />
            </div >
        </>
    )
}
export default Navigation;