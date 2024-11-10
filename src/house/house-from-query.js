import { useParams } from "react-router-dom";
import House from ".";
import { useContext } from "react";
import HouseContext from "../context/housesContext";

const HouseFromQuery = () => {
    const allHouses = useContext(HouseContext);
    const params = useParams();
    const house = allHouses.find(h => h.id === parseInt(params.id));

    if(!house) return <div>House not found</div>
    return <House house={house} />
}

export default HouseFromQuery;