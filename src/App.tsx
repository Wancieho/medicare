import { useState } from 'react';
import './App.css';
import { AppComponents } from './imports';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const formDataplaceholder: any = undefined;
  const [formData, setFormData] = useState(formDataplaceholder)
  return (
    <div id="app">
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
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<AppComponents.Navigation />}>
                  {/**/}
                  <Route path="/Dandelion" element={<AppComponents.Dandelion />} />
                  <Route path="/Dandelion_Overview" element={<AppComponents.Dandelion_Overview />} />
                  <Route path="/Dandelion_HowToUse" element={<AppComponents.Dandelion_HowToUse />} />
                  <Route path="/Dandelion_Benefits" element={<AppComponents.Dandelion_Benefits />} />
                  <Route path="/Dandelion_SideEffects" element={<AppComponents.Dandelion_SideEffects />} />
                  <Route path="/Dandelion_Dosage" element={<AppComponents.Dandelion_Dosage />} />
                  <Route path="/Grow_Dandelion" element={<AppComponents.Grow_Dandelion />} />

                  {/**/}
                  <Route path="/Echinacea" element={<AppComponents.Echinacea />} />
                  <Route path="/Echinacea_Overview" element={<AppComponents.Echinacea_Overview />} />
                  <Route path="/Echinacea_HowToUse" element={<AppComponents.Echinacea_HowToUse />} />
                  <Route path="/Echinacea_Benefits" element={<AppComponents.Echinacea_Benefits />} />
                  <Route path="/Echinacea_SideEffects" element={<AppComponents.Echinacea_SideEffects />} />
                  <Route path="/Echinacea_Dosage" element={<AppComponents.Echinacea_Dosage />} />
                  <Route path="/Grow_Echinacea" element={<AppComponents.Grow_Echinacea />} />

                  {/**/}
                  <Route path="/Grape-Seeds" element={<AppComponents.GrapeSeeds />} />
                  <Route path="/Grape-Seeds_Overview" element={<AppComponents.GrapeSeeds_Overview />} />
                  <Route path="/Grape-Seeds_HowToUse" element={<AppComponents.GrapeSeeds_HowToUse />} />
                  <Route path="/Grape-Seeds_Benefits" element={<AppComponents.GrapeSeeds_Benefits />} />
                  <Route path="/Grape-Seeds_SideEffects" element={<AppComponents.GrapeSeeds_SideEffects />} />
                  <Route path="/Grape-Seeds_Dosage" element={<AppComponents.GrapeSeeds_Dosage />} />
                  <Route path="/Grow_Grape-Seeds" element={<AppComponents.Grow_GrapeSeeds />} />

                  {/**/}
                  <Route path="/Garlic" element={<AppComponents.Garlic />} />
                  <Route path="/Garlic_Overview" element={<AppComponents.Garlic_Overview />} />
                  <Route path="/Garlic_HowToUse" element={<AppComponents.Garlic_HowToUse />} />
                  <Route path="/Garlic_Benefits" element={<AppComponents.Garlic_Benefits />} />
                  <Route path="/Garlic_SideEffects" element={<AppComponents.Garlic_SideEffects />} />
                  <Route path="/Garlic_Dosage" element={<AppComponents.Garlic_Dosage />} />
                  <Route path="/Grow_Garlic" element={<AppComponents.Grow_Garlic />} />

                  {/**/}
                  <Route path="/Strawberry" element={<AppComponents.Strawberry />} />
                  <Route path="/Strawberry_Overview" element={<AppComponents.Strawberry_Overview />} />
                  <Route path="/Strawberry_HowToUse" element={<AppComponents.Strawberry_HowToUse />} />
                  <Route path="/Strawberry_Benefits" element={<AppComponents.Strawberry_Benefits />} />
                  <Route path="/Strawberry_SideEffects" element={<AppComponents.Strawberry_SideEffects />} />
                  <Route path="/Strawberry_Dosage" element={<AppComponents.Strawberry_Dosage />} />
                  <Route path="/Grow_Strawberry" element={<AppComponents.Grow_Strawberry />} />

                  {/**/}
                  <Route path="/Kiwi" element={<AppComponents.Kiwi />} />
                  <Route path="/Kiwi_Overview" element={<AppComponents.Kiwi_Overview />} />
                  <Route path="/Kiwi_HowToUse" element={<AppComponents.Kiwi_HowToUse />} />
                  <Route path="/Kiwi_Benefits" element={<AppComponents.Kiwi_Benefits />} />
                  <Route path="/Kiwi_SideEffects" element={<AppComponents.Kiwi_SideEffects />} />
                  <Route path="/Kiwi_Dosage" element={<AppComponents.Kiwi_Dosage />} />
                  <Route path="/Grow_Kiwi" element={<AppComponents.Grow_Kiwi />} />

                  {/**/}
                  <Route path="/Broccoli" element={<AppComponents.Broccoli />} />
                  <Route path="/Broccoli_Overview" element={<AppComponents.Broccoli_Overview />} />
                  <Route path="/Broccoli_HowToUse" element={<AppComponents.Broccoli_HowToUse />} />
                  <Route path="/Broccoli_Benefits" element={<AppComponents.Broccoli_Benefits />} />
                  <Route path="/Broccoli_SideEffects" element={<AppComponents.Broccoli_SideEffects />} />
                  <Route path="/Broccoli_Dosage" element={<AppComponents.Broccoli_Dosage />} />
                  <Route path="/Grow_Broccoli" element={<AppComponents.Grow_Broccoli />} />

                  {/**/}
                  <Route path="/Tea-Tree-Oil" element={<AppComponents.Tea_Tree_Oil />} />
                  <Route path="/Tea-Tree-Oil_Overview" element={<AppComponents.Tea_Tree_Oil_Overview />} />
                  <Route path="/Tea-Tree-Oil_HowToUse" element={<AppComponents.Tea_Tree_Oil_HowToUse />} />
                  <Route path="/Tea-Tree-Oil_Benefits" element={<AppComponents.Tea_Tree_Oil_Benefits />} />
                  <Route path="/Tea-Tree-Oil_SideEffects" element={<AppComponents.Tea_Tree_Oil_SideEffects />} />
                  <Route path="/Tea-Tree-Oil_Dosage" element={<AppComponents.Tea_Tree_Oil_Dosage />} />
                  <Route path="/Grow_Tea-Tree-Oil" element={<AppComponents.Grow_Tea_Tree_Oil />} />

                  {/**/}
                  <Route path="/Astragalus" element={<AppComponents.Astragalus />} />
                  <Route path="/Astragalus_Overview" element={<AppComponents.Astragalus_Overview />} />
                  <Route path="/Astragalus_HowToUse" element={<AppComponents.Astragalus_HowToUse />} />
                  <Route path="/Astragalus_Benefits" element={<AppComponents.Astragalus_Benefits />} />
                  <Route path="/Astragalus_SideEffects" element={<AppComponents.Astragalus_SideEffects />} />
                  <Route path="/Astragalus_Dosage" element={<AppComponents.Astragalus_Dosage />} />
                  <Route path="/Grow_Astragalus" element={<AppComponents.Grow_Astragalus />} />

                  {/**/}
                  <Route path="/Chamomile" element={<AppComponents.Chamomile />} />
                  <Route path="/Chamomile_Overview" element={<AppComponents.Chamomile_Overview />} />
                  <Route path="/Chamomile_HowToUse" element={<AppComponents.Chamomile_HowToUse />} />
                  <Route path="/Chamomile_Benefits" element={<AppComponents.Chamomile_Benefits />} />
                  <Route path="/Chamomile_SideEffects" element={<AppComponents.Chamomile_SideEffects />} />
                  <Route path="/Chamomile_Dosage" element={<AppComponents.Chamomile_Dosage />} />
                  <Route path="/Grow_Chamomile" element={<AppComponents.Grow_Chamomile />} />

                  {/**/}
                  <Route path="/Lavender" element={<AppComponents.Lavender />} />
                  <Route path="/Lavender_Overview" element={<AppComponents.Lavender_Overview />} />
                  <Route path="/Lavender_HowToUse" element={<AppComponents.Lavender_HowToUse />} />
                  <Route path="/Lavender_Benefits" element={<AppComponents.Lavender_Benefits />} />
                  <Route path="/Lavender_SideEffects" element={<AppComponents.Lavender_SideEffects />} />
                  <Route path="/Lavender_Dosage" element={<AppComponents.Lavender_Dosage />} />
                  <Route path="/Grow_Lavender" element={<AppComponents.Grow_Lavender />} />

                  {/**/}
                  <Route path="/Lemon-Balm" element={<AppComponents.Lemon_Balm />} />
                  <Route path="/Lemon-Balm_Overview" element={<AppComponents.Lemon_Balm_Overview />} />
                  <Route path="/Lemon-Balm_HowToUse" element={<AppComponents.Lemon_Balm_HowToUse />} />
                  <Route path="/Lemon-Balm_Benefits" element={<AppComponents.Lemon_Balm_Benefits />} />
                  <Route path="/Lemon-Balm_SideEffects" element={<AppComponents.Lemon_Balm_SideEffects />} />
                  <Route path="/Lemon-Balm_Dosage" element={<AppComponents.Lemon_Balm_Dosage />} />
                  <Route path="/Grow_Lemon-Balm" element={<AppComponents.Grow_Lemon_Balm />} />

                  {/**/}
                  <Route path="/Peppermint" element={<AppComponents.Peppermint />} />
                  <Route path="/Peppermint_Overview" element={<AppComponents.Peppermint_Overview />} />
                  <Route path="/Peppermint_HowToUse" element={<AppComponents.Peppermint_HowToUse />} />
                  <Route path="/Peppermint_Benefits" element={<AppComponents.Peppermint_Benefits />} />
                  <Route path="/Peppermint_SideEffects" element={<AppComponents.Peppermint_SideEffects />} />
                  <Route path="/Peppermint_Dosage" element={<AppComponents.Peppermint_Dosage />} />
                  <Route path="/Grow_Peppermint" element={<AppComponents.Grow_Peppermint />} />

                  {/**/}
                  <Route path="/Rosemary" element={<AppComponents.Rosemary />} />
                  <Route path="/Rosemary_Overview" element={<AppComponents.Rosemary_Overview />} />
                  <Route path="/Rosemary_HowToUse" element={<AppComponents.Rosemary_HowToUse />} />
                  <Route path="/Rosemary_Benefits" element={<AppComponents.Rosemary_Benefits />} />
                  <Route path="/Rosemary_SideEffects" element={<AppComponents.Rosemary_SideEffects />} />
                  <Route path="/Rosemary_Dosage" element={<AppComponents.Rosemary_Dosage />} />
                  <Route path="/Grow_Rosemary" element={<AppComponents.Grow_Rosemary />} />

                  {/**/}
                  {/* <Route path="/FlaxSeeds" element={<AppComponents.FlaxSeeds />} /> */}
                  {/* <Route path="/FlaxSeeds_Overview" element={<AppComponents.FlaxSeeds_Overview />} /> */}
                  {/* <Route path="/FlaxSeeds_HowToUse" element={<AppComponents.FlaxSeeds_HowToUse />} /> */}
                  {/* <Route path="/FlaxSeeds_Benefits" element={<AppComponents.FlaxSeeds_Benefits />} /> */}
                  {/* <Route path="/FlaxSeeds_SideEffects" element={<AppComponents.FlaxSeeds_SideEffects />} /> */}
                  {/* <Route path="/FlaxSeeds_Dosage" element={<AppComponents.FlaxSeeds_Dosage />} /> */}
                  {/* <Route path="/Grow_FlaxSeeds" element={<AppComponents.Grow_FlaxSeeds />} /> */}

                  {/**/}
                  {/* <Route path="/Ginseng" element={<AppComponents.Ginseng />} /> */}
                  {/* <Route path="/Ginseng_Overview" element={<AppComponents.Ginseng_Overview />} /> */}
                  {/* <Route path="/Ginseng_HowToUse" element={<AppComponents.Ginseng_HowToUse />} /> */}
                  {/* <Route path="/Ginseng_Benefits" element={<AppComponents.Ginseng_Benefits />} /> */}
                  {/* <Route path="/Ginseng_SideEffects" element={<AppComponents.Ginseng_SideEffects />} /> */}
                  {/* <Route path="/Ginseng_Dosage" element={<AppComponents.Ginseng_Dosage />} /> */}
                  {/* <Route path="/Grow_Ginseng" element={<AppComponents.Grow_Ginseng />} /> */}

                  {/**/}
                  {/* <Route path="/Licorice" element={<AppComponents.Licorice />} /> */}
                  {/* <Route path="/Licorice_Overview" element={<AppComponents.Licorice_Overview />} /> */}
                  {/* <Route path="/Licorice_HowToUse" element={<AppComponents.Licorice_HowToUse />} /> */}
                  {/* <Route path="/Licorice_Benefits" element={<AppComponents.Licorice_Benefits />} /> */}
                  {/* <Route path="/Licorice_SideEffects" element={<AppComponents.Licorice_SideEffects />} /> */}
                  {/* <Route path="/Licorice_Dosage" element={<AppComponents.Licorice_Dosage />} /> */}
                  {/* <Route path="/Grow_Licorice" element={<AppComponents.Grow_Licorice />} /> */}

                  {/**/}
                  {/* <Route path="/Ginger" element={<AppComponents.Ginger />} /> */}
                  {/* <Route path="/Ginger_Overview" element={<AppComponents.Ginger_Overview />} /> */}
                  {/* <Route path="/Ginger_HowToUse" element={<AppComponents.Ginger_HowToUse />} /> */}
                  {/* <Route path="/Ginger_Benefits" element={<AppComponents.Ginger_Benefits />} /> */}
                  {/* <Route path="/Ginger_SideEffects" element={<AppComponents.Ginger_SideEffects />} /> */}
                  {/* <Route path="/Ginger_Dosage" element={<AppComponents.Ginger_Dosage />} /> */}
                  {/* <Route path="/Grow_Ginger" element={<AppComponents.Grow_Ginger />} /> */}

                  {/**/}
                  {/* <Route path="/Turmeric" element={<AppComponents.Turmeric />} /> */}
                  {/* <Route path="/Turmeric_Overview" element={<AppComponents.Turmeric_Overview />} /> */}
                  {/* <Route path="/Turmeric_HowToUse" element={<AppComponents.Turmeric_HowToUse />} /> */}
                  {/* <Route path="/Turmeric_Benefits" element={<AppComponents.Turmeric_Benefits />} /> */}
                  {/* <Route path="/Turmeric_SideEffects" element={<AppComponents.Turmeric_SideEffects />} /> */}
                  {/* <Route path="/Turmeric_Dosage" element={<AppComponents.Turmeric_Dosage />} /> */}
                  {/* <Route path="/Grow_Turmeric" element={<AppComponents.Grow_Turmeric />} /> */}


                  <Route path="*" element={<AppComponents.Errors />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
      <footer>
        <div className='wrap-footer'>
          <div id='contain-footer-content'>
            <form className='footer-description'>
              <div className='form-child'>
                <label htmlFor="Phone">Phone: </label>
                <span>
                  <a href='tell:+276053548'>+27 72 605 3548</a>
                </span>
              </div>
              <div className='form-child'>
                <label htmlFor="Email">Email: </label>
                <span>
                  <a href='mailto:christopher.fabian2001@gmail.com'>
                    christopher.fabian2001@gmail.com</a>
                </span>
              </div>
            </form>
            <div className='footer-description'>
              <div className='form-child'>
                <label htmlFor="GitHub">Github:</label>
                <span>
                  <a href='https://github.com/Andromeda2284'
                    target='_blank'>
                    My developer code space</a>
                </span>
              </div>
              <div className='form-child'>
                <label htmlFor="LinkedIn">LinkedIn: </label>
                <span>
                  <a href='https://www.linkedin.com/in/christopher-fabian-a09431202/'
                    target='_blank'>
                    View it</a>
                </span>
              </div>

            </div>
          </div>
          <p>This 80hours project was created by Christopher Fabian</p>
          <p>All rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
export default App;
