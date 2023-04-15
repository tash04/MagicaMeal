export const getAllEdiblesReducer = (state = {edibles:[]}, action)=>{
  
    switch (action.type)
    {
      case "GET_EDIBLES_REQUEST":return {
        loading: true,  
        ...state
        }
      case "GET_EDIBLES_SUCCESS":
        return {
          loading: false,
          edibles: action.payload
        }
      case "GET_EDIBLES_FAILED":
        return {
          loading: false,
          error: action.payload
        }
      default: return state
    }
  }
  
