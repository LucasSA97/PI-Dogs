import { GET_DOGS, SEARCH_DOG, GET_BY_ID } from "../actions";



const initialState ={
    allDogs: [],
    dogDescription:{},   
  }

  function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_DOGS:{
        return{
            ...state,
            allDogs:action.payload}
        }
        

        case SEARCH_DOG:{
          return{
            ...state,
            allDogs:action.payload}
          }

        case GET_BY_ID:{
            return{
              ...state,
              dogDescription:action.payload
            }
          }
        default:
          return{ ...state}
    }
  }

  export default rootReducer;