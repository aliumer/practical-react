import { useContext } from "react";
import { useHistory } from "react-router-dom";
import HouseContext from "../context/housesContext";

const HouseFilter = () => {
    const history = useHistory();
    const allHouses = useContext(HouseContext);
    
    const countries = allHouses
    ? Array.from(new Set(allHouses.map(h => h.country)))
    : [];
    countries.unshift(null);

    const onSelectChange = (e) => {
        const country = e.target.value;
        history.push(`/searchresults/${country}`);
    }

    return (
        <div className="row mt-3">
            <div className="offset-md-2 col-md-4">
                Look for your dream house in country
            </div>
            <div className="col-md-4 mb-3">
                <select className="form-select" onChange={onSelectChange}>
                    {
                        countries.map((c, index) => (
                            <option key={index} value={c}>{c}</option>
                        ))
                    }
                </select>

            </div>
        </div>
    )

}

export default HouseFilter;