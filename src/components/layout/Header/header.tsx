import { useState } from "react";
import "../../../App.css";
import { AppComponents } from "../../../imports";

const Header = () => {
  const [mouseEvents, setMouseEvents] = useState(false);
  const handleMouseClick = () => {
    setMouseEvents(true);
  }
  const handleMouseLeave = () => {
    setMouseEvents(false);
  }
  return (
    <div id="wrap-outer-layer-header">
      <div id="wrap-inner-layer-header">
        <div id="logo-search-container">
          <input className="inputSearch" type="search" max="50" autoComplete="false" />

          <input className="inputSearch" type="submit" value="Search" />
        </div>
      </div>

      <div id="header-right-side">
        <div id="flex-items">
          <button id="ingredients"
            onMouseEnter={handleMouseClick}
            onClick={handleMouseLeave}>Ingredients
          </button>
        </div>
        <div className="wrap-material-container">
          <div id="material-container"
            className={mouseEvents ? 'visibles' : 'invisibles'}>
            <AppComponents.DropDowns />
          </div>
        </div>
      </div>
    </div >
  )
}
export default Header;