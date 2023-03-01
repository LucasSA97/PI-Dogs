import React from "react";
import {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { getDogs } from "../../redux/actions/index";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import CardsConteiner from "../CardsConteiner/CardsConteiner";
import Paginado from "../Paginado/Paginado";

const Home = () => {
    const dispatch = useDispatch()
    const allDogs = useSelector((state)=> state.dogs)
    const [currentePage, setCurrentPage] = useState(1) //Pagina que va a empezar en 1
    const [dogsForPage, setDogsForPage]=useState(8) //Dogs por pagina
    const indexOfLastDog = currentePage * dogsForPage //Indice de ultimo dog por pagina
    const indexOfFirsttDog = indexOfLastDog - dogsForPage //Indice del primer dog por pagina
    const currentDogs = allDogs.slice(indexOfFirsttDog, indexOfLastDog) //Devuelve un arreglo desde el primer dog hasta el ultimo en la pagina actual

    const paginado = (pageNumber)=>{
        setCurrentPage(pageNumber)
    }
    useEffect(()=>{
        dispatch(getDogs())
    },[dispatch] )

    
    function handleClick(e){
        e.preventDefault();
        dispatch(getDogs());

    }


    return(
        <div>
            <h1>Estoy en Home</h1>
            <CardsConteiner/>
        <Link to="/dog">Create Dog</Link>
        <button onClick={e=>{handleClick(e)}}>All Dogs</button>
        <div>
            <select>
                <option value="aToZ">A to Z</option>
                <option value="zToA">Z to A</option>
            </select>
            
            <select>
                <option value="menos">Minor to Mayor weight</option>
                <option value="mas">Mayor to Minor weight</option>
            </select>

            <select>
                <option value="temp">Temperaments</option>
                <option value="tempDb">Temperaments DB</option>
                <option value="tempApi">Temperaments API</option>
            </select>
            <Paginado
             dogsForPage={dogsForPage}
             allDogs={allDogs.lenght}
             paginado={paginado}
             />
                {currentDogs?.map((el)=>{
                return(
                <div>
                    <Link to={"/home/"+el.id}>

                    <Card name={el.name} temperaments={el.temperaments} weight={el.weight} image={el.image} key={el.id}/>
                </Link>

                </div> 
                )
            })}
        </div>

        </div>
    )
}

export default Home;