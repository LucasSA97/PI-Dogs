import React from "react";
import style from "./cardsConteiner.module.css"
import Card from "../Card/Card";
import {useSelector} from "react-redux";

function CardsConteiner() {
    const dogs = useSelector(state=> state.allDogs)

    return(
        <div className={style.conteiner}>
         {dogs.map(dog =>{
             <Card
             id={dog.id}
             key={dog.id}
             image={dog.image}
             name={dog.name}
             temperaments={dog.temperaments}
             weight={dog.weight}
            />
         })}
        </div>
    )
}

export default CardsConteiner; 


   