import style from "./cardsConteiner.module.css"
import Card from "../Card/Card";
import {useSelector} from "react-redux";

const CardsConteiner=()=>{
    const dogs = useSelector(state=> state.dogs)

    return(
        <div className={style.conteiner}>
         {dogs.map(dog =>{
            return <Card
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
