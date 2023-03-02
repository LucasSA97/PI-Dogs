import axios from "axios";
export const GET_DOGS = "GET_DOGS";
export const GET_BY_ID = "GET_BY_ID"; 
export const SEARCH_DOG ="SEARCH_DOG";
export const ADD_DOG = "ADD_DOG"


export function getDogs(){
    return async function(dispatch){
        const json = await axios.get("http://localhost:3001/dogs");
        return dispatch({
            type: GET_DOGS,
            payload:json.data
        })
    }
};


export const searchDog = (name) => {
    return async function (dispatch) {
        const apiData = await axios.get(`http://localhost:3001/dogs?name=${name}`);
        const dog = apiData.data;
        dispatch({
            type: SEARCH_DOG,
            payload: dog
        });
    }
};

export const getById = (id) => {
    return async function (dispatch) {
        const apiData = await axios.get(`http://localhost:3001/dogs/${id}`);
        const dogId = apiData.data;
        dispatch({
            type: GET_BY_ID,
            payload: dogId
        });
    }
};

export const addDog = (name, height, weight) => {
    return async function (dispatch) {
        const apiData = await axios.post('http://localhost:3001/dogs', { name ,height ,weight });
        const newDog = apiData.data;
        dispatch({
            type: ADD_DOG,
            payload: newDog
        });
    }
};

    
