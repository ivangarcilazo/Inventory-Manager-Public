/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import addButton from '../../../assets/addButton.svg'
import useFetch from '../../../hooks/useFetch'
import ButtonInventory from './Components/ButtonInventory'
import { useParams } from 'react-router-dom'
import Products from './Components/Products'

export default function Inventory({stateAuth}){
    const { nit } = useParams()
    const [ newUpdate, setNewUpdate ] = useState(false)
    const { data, fetchData } = useFetch(`http://localhost:3000/company/${nit}`,'GET', '', stateAuth.token)

    useEffect(()=>{
        fetchData()
    }, [nit, newUpdate])

    return(
        <>
            <div className="w-full h-20 bg-slate-400 rounded-b-xl flex justify-around items-center gap-5">
                {
                    data.length===0?(
                        <h2 className="text-2xl m-0 p-0">Choose a company to see inventary<br /> <span className='font-bold'>{data.name}</span> </h2>
                    )
                    :
                    (
                        <>
                        <h2 className="text-2xl m-0 p-0">Company inventory of<br /> <span className='font-bold'>{data.name}</span> </h2>
                        {stateAuth.isAdmin&&<ButtonInventory token={stateAuth.token} newUpdate={newUpdate} setNewUpdate={setNewUpdate} method={'POST'} data={data} imgSource={addButton} width={30} title={`Add new product of ${data.name}`} />}
                        </>
                    )
                }
                
            </div>
            
            <div className=' flex flex-wrap justify-center items-center overflow-scroll gap-5 pt-4 h-5/6 mt-4 overflow-x-hidden'>
            {
                !data?.inventory?(
                    <h1>Selecciona una empresa!</h1>
                ):
                (
                    data.inventory.map((data,index)=>{
                        return(
                            <Products stateAuth={stateAuth} setNewUpdate={setNewUpdate} newUpdate={newUpdate} key={index} data={data} nit={nit}/>
                        )
                    })
                )
            }
            {
           
            }
            </div>
        </>
    )
}