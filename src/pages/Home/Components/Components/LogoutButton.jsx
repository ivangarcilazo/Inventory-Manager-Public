import { ContextAuth } from "../../../../Components/Context/ContextAuth"
import { useContext } from "react"
import Types from "../../../../Components/Provider/Types"

export default function LogoutButton(){
    const { dispatch } = useContext(ContextAuth)

    const handlerLogout = () =>{
        dispatch({
            type:Types.DELETE_DATA_AUTH
        })
    }
    return(
        <button className='bg-orange-500 shadow-xl p-1 rounded' onClick={handlerLogout}>LOGOUT</button>
    )
}