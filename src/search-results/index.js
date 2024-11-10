import { useParams } from "react-router-dom";
import SearchResultsRow from "./search-results-row";
import { useContext } from "react";
import HouseContext from "../context/housesContext";

const SearchResults = () => {
    const allHouses = useContext(HouseContext);
    const params = useParams();
    const filteredHouses = allHouses.filter(h => h.country === params.country);
    return (
        <div className="mt-2">
            <h4>Results for {params.country}:</h4>
            {
                <table className="table table-hover">
                    <tbody>
                        {
                            filteredHouses.map(h => (
                                <SearchResultsRow key={h.id} house={h} />
                            ))
                        }
                    </tbody>
                </table>
            }
        </div>
    );
}

export default SearchResults;