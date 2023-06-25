import CompaniesList from './Components/CompaniesList'
import Inventory from './Components/Inventory'
import { useContext } from 'react'
import { ContextAuth } from '../../Components/Context/ContextAuth'
import { useNavigate } from 'react-router-dom'

export default function Home(){
    const { stateAuth } = useContext(ContextAuth)
    const navigate = useNavigate()
    if(!stateAuth.token){
        navigate('/login')
    }
    return(
        <main className="w-full h-screen bg-red-400 flex justify-start items-center">
             <div className="w-2/5 h-full flex items-center justify-center">
                <CompaniesList stateAuth={stateAuth} />                
            </div>
            <div className='w-full h-screen bg-white h-full'>
                <Inventory stateAuth={stateAuth} />
            </div>

        </main>
    )
}