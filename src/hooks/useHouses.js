import { useEffect, useState } from "react";


const useHouses = () => {
    const [allHouses, setallHouses] = useState([])
    useEffect(() => {
      const fetchHouses = async () => {
        const resp = await fetch("/houses.json");
        const houses = await resp.json();
        console.log(houses);
        setallHouses(houses);
      };
      fetchHouses();
    }, []);

    return allHouses;
  
};

export default useHouses;