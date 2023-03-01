

export default function Card({
    image,
    name,
    temperaments,
    weight,
}){
    return(
        <div>
            <h3>{name}</h3>
            <h3>{temperaments}</h3>
            <h3>{weight}</h3>
            <img src={image} alt="img not found" width="200px" height="250px" />
        </div>
    )
}



/*
const Card=(props)=>{
    return(
        <div className={style.card}>

            <p>image:{props.image}</p>
            <p>name:{props.name}</p>
            <p>temperaments:{props.temperaments}</p>
            <p>weight:{props.weight}</p>
 
        </div>
    )
}

export default Card; //Este componente debe mostrar la info de cada perro mapeado y ademas tener un link
                     // para llevarnos a ver la informacion detallada
                     */