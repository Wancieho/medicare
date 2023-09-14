import { useState } from "react";
import "../../../App.css";
import { AppProperties } from "../../../App.tsx";
import AppImports from '../../../components/imports';






const Header = () => {
  const [mouseEvents, setMouseEvents] = useState(false);
  const handleMouseClick = () => {
    setMouseEvents(true);
  }
  const handleMouseLeave = () => {
    setMouseEvents(false);
  }
  return (
    <div className="wrap-outer-layer-header">
      <div className="wrap-inner-layer-header">
        <div className="logo-search-container">
          <img src={AppProperties.imageSource} alt={AppProperties.image_alt} />
        </div>
        <div className="logo-search-container">
          <input className="inputSearch" type="search" max={AppProperties.maxSearchInput} autoComplete="false" />

          <input className="inputSearch" type="submit" value="Search" />
        </div>
      </div>

      <div className="wrap-inner-layer-header">
        <div id="flex-items">
          <button className="ingredients"
            onMouseEnter={handleMouseClick}
            onClick={handleMouseLeave}>Ingredients
          </button>
        </div>
        <div className="wrap-material-container">
          <div id="material-container"
            className={mouseEvents ? 'visibles' : 'invisibles'}>
            <div className="natural-material">
              <select>
                <AppImports.HerbsDropdown />
              </select>
            </div>
            <div className="natural-material">
              <select>
                <AppImports.PlantsDropdown />
              </select>
            </div>
            <div className="natural-material">
              <select>
                <AppImports.SpicesDropdown />
              </select>
            </div>
            <div className="natural-material">
              <select>
                <AppImports.ExtractsDropdown />
              </select>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
export default Header;