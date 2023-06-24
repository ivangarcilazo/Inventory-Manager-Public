import { ContextAuth } from "../Context/ContextAuth";
import { INITIAL_STATE } from "./stateAuth";
import { reducerAuth } from "./reducerAuth";
import { useReducer } from "react";

export default function ProviderAuth( {children} ){

    const [ stateAuth, dispatch ] = useReducer(reducerAuth, INITIAL_STATE)

    return(
        <ContextAuth.Provider value={{stateAuth, dispatch}}>
            {children}
        </ContextAuth.Provider>
    )
}