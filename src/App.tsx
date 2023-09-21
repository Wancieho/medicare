import './App.css';
import { AppComponents } from './imports';
function App() {
  return (
    <div id="App">
      <AppComponents.Header />
      <div className="wrap-outer-description-layer">
        <div className="wrap-inner-description-layer">
          <h1>
            <cite>
              <blockquote>
                "For over 50 Years Medicare Global has succeeded in treating and hospitalizing patients
                from all over the globe by using basic to extreme rare herbs, plants, spices, and extracts
                and tonics from plants to fight against viruses, bacteria, parasites, illnesses, and
                diseases to protect all races who seek to live the healthy life they thrive for"
              </blockquote>
            </cite>
          </h1>
        </div>
        <div className="wrap-inner-description-layer">
          {/* React Router will be used here to render different pages from different ingredients */}
          <div id="content-layer">
            {/* <AppComponents.Astragalus /> */}
            <AppComponents.Chamomile />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
