import Types from "./Types"

export const reducerAuth = ( state, action ) =>{
    switch(action.type){
        case(Types.ADD_DATA_AUTH):
            return { ...state, ...action.payload }
        case(Types.DELETE_DATA_AUTH):
            return([])
    }
}