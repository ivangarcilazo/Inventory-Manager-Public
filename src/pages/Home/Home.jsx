import CompaniesList from './Components/CompaniesList'
import Inventory from './Components/Inventory'
import { useContext } from 'react'
import { ContextAuth } from '../../Components/Context/ContextAuth'
import { useNavigate } from 'react-router-dom'
import LogoutButton from './Components/Components/LogoutButton'

export default function Home(){
    const { stateAuth } = useContext(ContextAuth)
    const navigate = useNavigate()
    if(!stateAuth.token || stateAuth.length===0){
        navigate('/login')
    }

    return(
        <main className="w-full h-screen bg-white flex flex-col-reverse lg:flex-row justify-start items-center">
             <div className="h-full lg:w-3/6 w-screen flex lg:items-center justify-center items-end pb-1 flex-col">
                <LogoutButton />
                <CompaniesList stateAuth={stateAuth} />                
            </div>
            <div className='w-full h-screen bg-white h-full'>
                <Inventory stateAuth={stateAuth} />
            </div>

        </main>
    )
}