/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import addButton from '../../../assets/addButton.svg'
import useFetch from '../../../hooks/useFetch'
import ButtonInventory from './Components/ButtonInventory'
import { useParams } from 'react-router-dom'
import Products from './Components/Products'
import PDFRender from './Components/PDFRender'
import Carrousel from '../../../Components/Carrousel/Carrousel'

export default function Inventory({stateAuth}){
    const { nit } = useParams()
    const [ newUpdate, setNewUpdate ] = useState(false)
    
    const { data, fetchData } = useFetch(`https://imagineapp-prueba.netlify.app/.netlify/functions/app/company/${nit}`,'GET', null, stateAuth.token)
    useEffect(()=>{
        fetchData()
    }, [nit, newUpdate])

    return(
        <>
            <div className="w-full lg:h-20 h-1/6 bg-slate-400 rounded-b-xl flex justify-around items-center gap-5">
                {
                    data.length===0||nit===undefined?(
                        <h2 className="text-2xl m-0 p-0">Choose a company to see inventary!</h2>
                    )
                    :
                    (
                        <>
                        <h2 className="text-2xl m-0 p-0">Company inventory of<br /> <span className='font-bold'>{data.name}</span> </h2>
                        {stateAuth.statusAdmin&&<ButtonInventory token={stateAuth.token} newUpdate={newUpdate} setNewUpdate={setNewUpdate} method={'POST'} data={data} imgSource={addButton} width={30} title={`Add new product of ${data.name}`} />}
                        </>
                    )
                }
                
            </div>
            
            <div className=' flex flex-wrap justify-center items-center overflow-scroll gap-5 pt-4 h-96 lg:h-4/6 mt-2 overflow-x-hidden'>
            {
                !data?.inventory || nit===undefined?(
                    
                    <div className='text-black text-center'>
                        {
                            nit===undefined?(
                                <Carrousel />
                            ):(
                                stateAuth.length===0?<h1 className='font-bold text-orange-500'>You need to Login first.</h1>    :<h1 className='font-bold text-orange-500'>Loading inventory...</h1>                            )
                        }
                    </div>
                ):
                (
                data.inventory.length===0?(
                    <div className='text-black text-center'>
                        <h1 className='font-bold'>{data.name} doesnt have any product yet.</h1>
                        {
                            stateAuth.statusAdmin?(
                                <span>With the <b>+</b> button you can add new products.</span>
                            ):(
                                <span>Please, Contact an administrator to add products. </span>
                            )
                        }
                    </div>
                ):(
                    data.inventory.map((dataOfProducts,index)=>{ 
                        return(
                        <Products stateAuth={stateAuth} setNewUpdate={setNewUpdate} newUpdate={newUpdate} key={index} data={dataOfProducts} nit={nit}/>
                        )
                    })
                
                )
                )
            }
            </div>
            <div className='flex w-full justify-end pr-5 lg:pt-5'>
                {data.length===0 ||  data.inventory.length===0?<span></span>:(
                <PDFRender data={data.inventory} />
                )}
            </div>
        </>
    )
}