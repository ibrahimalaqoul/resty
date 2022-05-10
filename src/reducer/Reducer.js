const intialState = {
   history: [],//array of object{method,url}
}
//one case to set url and nmethod
//intial history
//
export default function reducer(state = intialState, action) {
    const {type,payload} = action;
    switch (type) {
        case "SET_METHOD_AND_URL":
            return {

                history: [...state.history, payload],
              
            }
     
    
        default:
        return state;
        }
  
}


export const setMethodAndURL = (action) => {
    return {
        type: "SET_METHOD_AND_URL",
        payload: action,
    }
}


