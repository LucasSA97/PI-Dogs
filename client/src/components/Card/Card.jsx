import React from "react";
import { Link } from "react-router-dom";
import style from "./card.module.css"

export default function Card({
    image,
    id,
    name,
    temperaments,
    weight,
}) {
    return(
        <div className={style.card}>
            <h3>{name}</h3>
            <h3>{temperaments}</h3>
            <h3>{weight}</h3>
            <img src={image} alt="img not found" width="200px" height="250px" />
        </div>
    )
}


/*

function Card({id, img , nombre, temperamento , peso}) {

    return (
        <div className={styles.card}>
            { img ? 
                <img className={styles.cardImage} src={img} alt={id}/>
                : <img className={styles.cardImageDefault} src={defaultImg} alt={defaultImg}/>
            }
            <Link to={`/detail/${id}`} className={styles.cardName}>
                <h1 >{nombre}</h1>
            </Link>
            <div className={styles.container}>
                {temperamento ? <h3>TEMP: {temperamento}</h3> : undefined}
                {peso.min ? 
                    <h3>PESO MIN: {peso.min}</h3>
                    : undefined
                }
                {peso.max ? 
                    <h3>PESO MAX: {peso.max}</h3>
                    : undefined
                }
            </div>
        </div>
    )
}

export default Card;




//Este componente debe mostrar la info de cada perro mapeado y ademas tener un link
// para llevarnos a ver la informacion detallada*/
                    