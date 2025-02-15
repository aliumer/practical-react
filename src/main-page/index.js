import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./header";
import "./main-page.css";
import FeaturedHouse from "./featured-house";
import SearchResults from "../search-results";
import HouseFilter from "./house-filter";
import HouseFromQuery from "../house/house-from-query";
import useHouses from "../hooks/useHouses";
import useFeaturedHouse from "../hooks/useFeaturedHouse";
import HouseContext from "../context/housesContext";

function App() {

  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouse(allHouses);

  return (
    <Router>
      <HouseContext.Provider value={allHouses}>
        <div className="container">
          <Header subtitle="Providing houses all over the world" />
          <HouseFilter />
          <Switch>
            <Route path="/searchresults/:country">
              <SearchResults />
            </Route>
            <Route path="/house/:id">
              <HouseFromQuery />
            </Route>
            <Route exact path="/" >
              <FeaturedHouse house={featuredHouse} />
            </Route>
          </Switch>
        </div>
      </HouseContext.Provider>
    </Router>
  );
}

export default App;