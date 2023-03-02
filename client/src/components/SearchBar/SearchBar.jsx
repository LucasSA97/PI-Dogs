import React from "react";
import { useState , useEffect} from "react";
import { searchDog } from "../../redux/actions";
import { useDispatch } from "react-redux";
import styles from "./SearchBar.module.css";


function SearchBar() {

    const [race, setRace] = useState("");
    const dispatch = useDispatch();
    const handleInputChange = (event) => {
        setRace(event.target.value)
    }

    useEffect(() => {
        dispatch(searchDog(race));
    })

    return(
        <>
            <input
                className={styles.input} 
                placeholder="Search name..."
                name="nombre"
                type="text"
                value={race}
                onChange={handleInputChange}
            />
        </>

    )
}

export default SearchBar;
