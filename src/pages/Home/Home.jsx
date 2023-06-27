import CompaniesList from './Components/CompaniesList'
import Inventory from './Components/Inventory'
import { useContext } from 'react'
import { ContextAuth } from '../../Components/Context/ContextAuth'
import LogoutButton from './Components/Components/LogoutButton'

export default function Home(){
    const { stateAuth } = useContext(ContextAuth)
    if(!stateAuth.token || stateAuth.length===0){
        window.location.href='/login'
    }

    return(
        <main className="w-full h-screen bg-white flex flex-col-reverse lg:flex-row justify-start items-center">
             <div className="h-full lg:w-3/6 lg:h-full h-3/6 w-screen flex lg:items-center lg:justify-center justify-end items-end pb-1 flex-col">
                <LogoutButton />
                <CompaniesList stateAuth={stateAuth} />                
            </div>
            <div className='w-full h-screen bg-white h-4/6 lg:h-full'>
                <Inventory stateAuth={stateAuth} />
            </div>

        </main>
    )
}