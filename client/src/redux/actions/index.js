import axios from "axios";
export const ORDER_BY_NAME="ORDER_BY_NAME";
export const GET_DOGS = "GET_DOGS"





export function getDogs(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/dogs");
        return dispatch({
            type: GET_DOGS,
            payload:json.data
        })
    }
}

export function orderByName(payload) {
    return function(dispatch) {
            dispatch({
                type: ORDER_BY_NAME,
                payload: payload
            })
        }
    };
/*
export function getDogs(name){
    return async function(dispatch){
        if(name){
            const dogByName= await axios.get('http://localhost:3001/dogs?name=' + name )
            return dispatch({
                type: GET_DOG_BY_NAME,
                payload: dogByName.data
            })
        } else{
        const dogs = await axios.get('http://localhost:3001/dogs');
        return dispatch({
            type:GET_DOGS,
            payload:dogs.data
        })}
    }
}

export const getDog = (id)=>{
    return async function (dispatch){
        const apiData = await axios.get(`http://localhost:3001/dogs/${id}`)
        const dog=apiData.data;
        dispatch({type:"GET_DOG",payload:dog})
    }
}

import { 
    GET_ALL_DOGS, 
    GET_DESCRIPTION,
    GET_DOGS_FOR_NAME, 
    ORDER_ASC,
    ORDER_DES,
    DESDE_API,
    DESDE_DB,
    DESDE_TODOS,
    ORDER_PESO_MIN,
    ORDER_PESO_MAX,
    GET_ALL_TEMPERAMENT,
    FILTRAR_TEMPERAMENT,
    // ----------------------
    ADD_FAVORITES,
    REMOVE_FAVORITES,
    MODE_NOCTURNE,
 
} from "../action-types/index";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";

//Obtener

// Action para obtener datos desde el back el cual esta corriendo en el puerto 3001
export const getAllDogs = () => {
    //obtener todos los perros en /dogs por medio de un get
    return (dispatch) => {
        axios("/dogs")
        .then(response => {
            const mapeo = response.data.map(dog => {
                if(dog.proviene === "API"){
                    if(dog.pesoMax && dog.pesoMin) return dog;
                    else{
                        if(!dog.pesoMax && !dog.pesoMin){
                            return {
                                ...dog,
                                pesoMin: "N/A",
                                pesoMax: "N/A",
                            }
                        }

                        if(!dog.pesoMax){
                            return {
                                ...dog,
                                pesoMax: "N/A",
                            }
                        }else{
                            return {
                                ...dog,
                                pesoMin: "N/A",
                            }
                        }
                    }
                }

                else if(dog.proviene === "DB") { // Aplico logica extra a los que vienen de la DB ya que viene un objeto y quiero convertilo en un string
                    const temp = dog.temperamento.map(tempe => tempe.nombre)
                    return {
                        ...dog,
                        temperamento: temp.join(",")
                    }
                }
            })
            dispatch({type: GET_ALL_DOGS, payload: mapeo})
        })
        .catch(err => new Error(err))
    }   
}
*/