import './App.css';
import AppImports from './components/imports';


export const AppProperties = {
  maxSearchInput: 50,
  imageSource: "./Components/Medicare_Global.png",
  image_alt: "Medicare Global image logo"
}

function App() {
  return (
    <div className="App">
      <AppImports.Header />
      <div className="wrap-outer-description-layer">
        <div className="wrap-inner-description-layer">
          <h1>
            <cite>
              <blockquote>
                "For over 50 Years Medicare Global has succeeded in treating and hospitalizing patients
                from all over the globe by using basic to extreme rare herbs, plants, spices, and extracts and tonics from plants
                to fight against viruses, bacteria, parasites, illnesses, and diseases to protect all races
                who seek to live the healthy life they thrive for"
              </blockquote>
            </cite>
          </h1>
        </div>
        <div className="wrap-inner-description-layer">
          {/* <BrowserRouter>
          </BrowserRouter> */}
        </div>
      </div>
    </div>
  );
}

export default App;