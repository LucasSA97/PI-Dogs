import { GET_DOGS } from "../actions";
import { ORDER_BY_NAME } from "../actions";


const initialState ={
    allDogs: [],
    dogDescription:{},
    temps: [],
    searchDog:[],  
    filter: []  
  }

  function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_DOGS:
        return{
            ...state,
            allDogs:action.payload
        };
        case ORDER_BY_NAME:
          
          return{
            ...state,

          }
        default:
          return{ ...state}
    }
  }

  export default rootReducer;